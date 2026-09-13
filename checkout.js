/* ============================================================
   Azylis — checkout
   Bag → details → confirm. Cash on delivery, so there is no payment
   step: the order is written down, the bag is emptied, and the summary
   is handed to the studio so they can call the customer back.
   ============================================================ */

(function () {
  "use strict";

  /* Where orders go. WhatsApp is the hand-off: the customer taps once and
     the studio has the full summary in a chat it can reply to. Country code,
     digits only — e.g. "212612345678". Leave empty and the button is hidden.
     `endpoint`, if set, also receives the order as JSON by POST. */
  var SHOP = {
    whatsapp: "",
    endpoint: ""
  };

  var ORDERS = "azylis-orders";

  var $ = function (id) { return document.getElementById(id); };
  var t = window.I18N ? window.I18N.t : function (s) { return s; };
  var Bag = window.Bag;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* ---------- items --------------------------------------------------------- */

  function thumb(it) {
    if (it.img) return '<img src="' + esc(it.img) + '" alt="">';
    var initials = it.name.split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2);
    return '<span class="bag-thumb-blank" aria-hidden="true">' + esc(initials) + "</span>";
  }

  function itemRow(it, editable) {
    var variant = [it.color, it.size].filter(Boolean).join(" · ");
    return '' +
      '<div class="bag-item" data-key="' + esc(it.key) + '">' +
        '<a class="bag-thumb" href="product.html?p=' + esc(it.slug) + '">' + thumb(it) + "</a>" +
        '<div class="bag-info">' +
          '<p class="bag-name">' + esc(it.name) + "</p>" +
          (variant ? '<p class="bag-var">' + esc(variant) + "</p>" : "") +
          (editable
            ? '<div class="bag-ctl">' +
                '<div class="qty" aria-label="Quantity">' +
                  '<button type="button" data-dec aria-label="Decrease quantity">&minus;</button>' +
                  "<span>" + it.qty + "</span>" +
                  '<button type="button" data-inc aria-label="Increase quantity">+</button>' +
                "</div>" +
                '<button class="bag-remove" type="button" data-remove>Remove</button>' +
              "</div>"
            : '<p class="bag-var">&times; ' + it.qty + "</p>") +
        "</div>" +
        '<p class="bag-price">' + Bag.money(it.price * it.qty) + "</p>" +
      "</div>";
  }

  var coItems = $("coItems");
  var coEmpty = $("coEmpty");
  var bagActions = $("bagActions");

  function renderBag() {
    var items = Bag.items();
    coItems.innerHTML = items.map(function (it) { return itemRow(it, true); }).join("");
    coEmpty.hidden = items.length > 0;
    bagActions.hidden = items.length === 0;
    $("sumSub").textContent = Bag.money(Bag.total());
    $("sumTotal").textContent = Bag.money(Bag.total());
    if (window.I18N) window.I18N.apply();
  }

  coItems.addEventListener("click", function (e) {
    var row = e.target.closest(".bag-item");
    if (!row) return;
    var k = row.getAttribute("data-key");
    var it = Bag.items().filter(function (x) { return x.key === k; })[0];
    if (!it) return;
    if (e.target.closest("[data-inc]")) Bag.setQty(k, it.qty + 1);
    else if (e.target.closest("[data-dec]")) Bag.setQty(k, it.qty - 1);
    else if (e.target.closest("[data-remove]")) Bag.remove(k);
  });

  /* the drawer and this page share the same bag; keep them in step */
  document.addEventListener("bag:change", function () {
    if (!done) renderBag();
  });

  /* ---------- steps --------------------------------------------------------- */

  var panes = { 1: $("paneBag"), 2: $("paneDetails"), 3: $("paneConfirm"), done: $("paneDone") };
  var steps = [].slice.call($("coSteps").children);
  var done = false;

  function go(n) {
    Object.keys(panes).forEach(function (k) { panes[k].hidden = String(k) !== String(n); });
    steps.forEach(function (li) {
      var s = +li.getAttribute("data-step");
      var at = n === "done" ? 4 : n;
      li.classList.toggle("is-on", s === at);
      li.classList.toggle("is-done", s < at);
    });
    var main = $("checkout");
    var top = main.getBoundingClientRect().top + window.pageYOffset - 24;
    if (window.pageYOffset > top) window.scrollTo({ top: top, behavior: "smooth" });
  }

  $("toDetails").addEventListener("click", function () {
    if (Bag.count()) go(2);
  });

  [].forEach.call(document.querySelectorAll("[data-back]"), function (b) {
    b.addEventListener("click", function () { go(+b.getAttribute("data-back")); });
  });

  /* ---------- details ------------------------------------------------------- */

  var form = $("paneDetails");
  var details = null;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    var fd = new FormData(form);
    details = {
      name: (fd.get("name") || "").trim(),
      phone: (fd.get("phone") || "").trim(),
      city: (fd.get("city") || "").trim(),
      address: (fd.get("address") || "").trim(),
      notes: (fd.get("notes") || "").trim()
    };
    fillRecap($("coRecap"), details, null);
    $("coItemsRecap").innerHTML = Bag.items().map(function (it) { return itemRow(it, false); }).join("");
    if (window.I18N) window.I18N.apply();
    go(3);
  });

  function fillRecap(dl, d, order) {
    var rows = [];
    if (order) rows.push(["Order", order.id]);
    rows.push(["Full name", d.name], ["Phone", d.phone], ["City", d.city], ["Delivery address", d.address]);
    if (d.notes) rows.push(["Notes", d.notes]);
    if (order) rows.push(["Total", Bag.money(order.total)]);
    dl.innerHTML = rows.map(function (r) {
      return "<div><dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd></div>";
    }).join("");
  }

  /* ---------- place the order ---------------------------------------------- */

  function orderId() {
    return "AZ-" + Date.now().toString(36).toUpperCase().slice(-6);
  }

  function summary(order) {
    var lines = [t("New order") + " " + order.id, ""];
    order.items.forEach(function (it) {
      var variant = [it.color, it.size].filter(Boolean).join(" · ");
      lines.push("• " + it.name + (variant ? " · " + variant : "") + " × " + it.qty + " — " + Bag.money(it.price * it.qty));
    });
    lines.push("", t("Total") + ": " + Bag.money(order.total) + " (" + t("Cash on delivery") + ")", "");
    lines.push(t("Full name") + ": " + order.customer.name);
    lines.push(t("Phone") + ": " + order.customer.phone);
    lines.push(t("City") + ": " + order.customer.city);
    lines.push(t("Delivery address") + ": " + order.customer.address);
    if (order.customer.notes) lines.push(t("Notes") + ": " + order.customer.notes);
    return lines.join("\n");
  }

  function keep(order) {
    try {
      var all = JSON.parse(localStorage.getItem(ORDERS) || "[]");
      all.push(order);
      localStorage.setItem(ORDERS, JSON.stringify(all));
    } catch (e) {}
  }

  function send(order) {
    if (!SHOP.endpoint) return;
    try {
      fetch(SHOP.endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(order)
      }).catch(function () {});
    } catch (e) {}
  }

  $("placeOrder").addEventListener("click", function () {
    if (!details || !Bag.count()) return;

    var order = {
      id: orderId(),
      at: new Date().toISOString(),
      items: Bag.items(),
      total: Bag.total(),
      customer: details,
      payment: "cash-on-delivery",
      lang: window.I18N ? window.I18N.lang() : "fr"
    };

    keep(order);
    send(order);

    var text = summary(order);
    if (SHOP.whatsapp) {
      var url = "https://wa.me/" + SHOP.whatsapp + "?text=" + encodeURIComponent(text);
      var wa = $("waLink");
      wa.href = url;
      wa.hidden = false;
      $("waHint").hidden = false;
      /* same tap as the confirm, so the browser lets it through */
      window.open(url, "_blank", "noopener");
    }

    fillRecap($("doneRecap"), details, order);
    done = true;
    Bag.clear();
    $("coSummary").hidden = true;
    if (window.I18N) window.I18N.apply();
    go("done");
  });

  /* ---------- boot ---------------------------------------------------------- */

  renderBag();

  /* reveals + mobile menu — same vocabulary as the other pages */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealables = [].slice.call(document.querySelectorAll("[data-reveal]"));

  if (reduced || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });
    revealables.forEach(function (el) { io.observe(el); });
  }

  var burger = $("burger");
  var menu   = $("mobileMenu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
  }
})();
