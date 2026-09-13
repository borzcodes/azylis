/* ============================================================
   Azylis — the bag
   One list in localStorage shared by every page, the badge in the
   header, and a drawer to review it. Placing the order is checkout.js.
   ============================================================ */

(function () {
  "use strict";

  var KEY = "azylis-bag";

  function read() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(v) ? v : [];
    } catch (e) { return []; }
  }
  function write(list) {
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {}
  }

  /* "349 MAD" -> 349 */
  function num(price) { return parseFloat(String(price).replace(/[^0-9.]/g, "")) || 0; }
  /* whole dirhams, thousands spaced the French way */
  function money(n) {
    var v = Math.round(n * 100) / 100;
    var s = Number.isInteger(v) ? String(v) : v.toFixed(2);
    return s.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " MAD";
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  var items = read();

  function keyOf(it) { return [it.slug, it.color || "", it.size || ""].join("|"); }
  function count() { return items.reduce(function (n, it) { return n + it.qty; }, 0); }
  function total() { return items.reduce(function (n, it) { return n + it.price * it.qty; }, 0); }

  function add(it) {
    var k = keyOf(it);
    var hit = items.filter(function (x) { return x.key === k; })[0];
    if (hit) hit.qty += it.qty || 1;
    else items.push({
      key: k, slug: it.slug, name: it.name,
      color: it.color || "", size: it.size || "",
      price: num(it.price), img: it.img || null,
      qty: it.qty || 1
    });
    write(items);
    render(true);
    open();
  }

  function setQty(k, q) {
    items = items.map(function (x) { if (x.key === k) x.qty = q; return x; })
                 .filter(function (x) { return x.qty > 0; });
    write(items);
    render();
  }

  function remove(k) { setQty(k, 0); }

  function clear() { items = []; write(items); render(); }

  /* ---------- badge ------------------------------------------------------ */

  function badge(bump) {
    var n = count();
    [].forEach.call(document.querySelectorAll(".bag-count"), function (b) {
      b.hidden = n === 0;
      b.textContent = n;
      if (bump) { b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop"); }
    });
  }

  /* ---------- drawer ----------------------------------------------------- */

  var veil = document.createElement("div");
  veil.className = "bag-veil";

  var drawer = document.createElement("aside");
  drawer.className = "bag";
  drawer.id = "bag";
  drawer.setAttribute("role", "dialog");
  drawer.setAttribute("aria-label", "Your bag");
  drawer.setAttribute("aria-hidden", "true");
  drawer.innerHTML =
    '<header class="bag-head">' +
      '<h2 class="bag-title">Your bag</h2>' +
      '<button class="bag-close icon-btn" type="button" aria-label="Close">' +
        '<svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>' +
      "</button>" +
    "</header>" +
    '<div class="bag-list" id="bagList"></div>' +
    '<footer class="bag-foot">' +
      '<p class="bag-row"><span>Subtotal</span><b id="bagTotal">0 MAD</b></p>' +
      '<p class="bag-cod">Cash on delivery — you pay when your frames arrive.</p>' +
      '<div class="bag-foot-actions">' +
        '<button class="btn-block bag-continue" id="bagContinue" type="button"><span>Continue shopping</span></button>' +
        '<a class="btn-block btn-block--solid bag-checkout" id="bagCheckout" href="checkout.html"><span>Order now</span></a>' +
      "</div>" +
    "</footer>";

  document.body.appendChild(veil);
  document.body.appendChild(drawer);

  var list = drawer.querySelector("#bagList");
  var totalEl = drawer.querySelector("#bagTotal");
  var checkout = drawer.querySelector("#bagCheckout");

  function thumb(it) {
    if (it.img) return '<img src="' + esc(it.img) + '" alt="">';
    var initials = it.name.split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2);
    return '<span class="bag-thumb-blank" aria-hidden="true">' + esc(initials) + "</span>";
  }

  function render(bump) {
    badge(bump);

    if (!items.length) {
      list.innerHTML =
        '<div class="bag-empty">' +
          "<p>Your bag is empty.</p>" +
          '<a class="bag-browse" href="shop.html">Browse the frames</a>' +
        "</div>";
      totalEl.textContent = money(0);
      checkout.classList.add("is-off");
      checkout.setAttribute("aria-disabled", "true");
    } else {
      list.innerHTML = items.map(function (it) {
        var variant = [it.color, it.size].filter(Boolean).join(" · ");
        return '' +
          '<div class="bag-item" data-key="' + esc(it.key) + '">' +
            '<a class="bag-thumb" href="product.html?p=' + esc(it.slug) + '">' + thumb(it) + "</a>" +
            '<div class="bag-info">' +
              '<p class="bag-name">' + esc(it.name) + "</p>" +
              (variant ? '<p class="bag-var">' + esc(variant) + "</p>" : "") +
              '<div class="bag-ctl">' +
                '<div class="qty" aria-label="Quantity">' +
                  '<button type="button" data-dec aria-label="Decrease quantity">&minus;</button>' +
                  "<span>" + it.qty + "</span>" +
                  '<button type="button" data-inc aria-label="Increase quantity">+</button>' +
                "</div>" +
                '<button class="bag-remove" type="button" data-remove>Remove</button>' +
              "</div>" +
            "</div>" +
            '<p class="bag-price">' + money(it.price * it.qty) + "</p>" +
          "</div>";
      }).join("");
      totalEl.textContent = money(total());
      checkout.classList.remove("is-off");
      checkout.removeAttribute("aria-disabled");
    }

    /* the drawer is built at runtime, so translate what was just drawn */
    if (window.I18N) window.I18N.apply();
    document.dispatchEvent(new CustomEvent("bag:change"));
  }

  list.addEventListener("click", function (e) {
    var row = e.target.closest(".bag-item");
    if (!row) return;
    var k = row.getAttribute("data-key");
    var it = items.filter(function (x) { return x.key === k; })[0];
    if (!it) return;
    if (e.target.closest("[data-inc]")) setQty(k, it.qty + 1);
    else if (e.target.closest("[data-dec]")) setQty(k, it.qty - 1);
    else if (e.target.closest("[data-remove]")) remove(k);
  });

  function open() {
    drawer.classList.add("is-open");
    veil.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("bag-open");
  }
  function close() {
    drawer.classList.remove("is-open");
    veil.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("bag-open");
  }

  veil.addEventListener("click", close);
  drawer.querySelector(".bag-close").addEventListener("click", close);
  drawer.querySelector("#bagContinue").addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  document.addEventListener("click", function (e) {
    if (e.target.closest(".bag-btn")) { e.preventDefault(); open(); }
  });

  /* another tab changed the bag */
  window.addEventListener("storage", function (e) {
    if (e.key !== KEY) return;
    items = read();
    render();
  });

  render();

  window.Bag = {
    add: add, setQty: setQty, remove: remove, clear: clear,
    items: function () { return items.slice(); },
    count: count, total: total, money: money,
    open: open, close: close
  };
})();
