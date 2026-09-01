/* ============================================================
   Azylis — product detail
   One catalogue object drives the page; the slug comes in on ?p=.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- catalogue -------------------------------------------------- */

  var SHARED_POINTS = [
    "Signature Azylis hand-finished frame",
    "Premium Italian acetate construction",
    "Free worldwide shipping"
  ];

  var CATALOGUE = {
    "havana-round": {
      name: "Havana Round",
      lede: "Havana Round reinterprets the classic panto for those who blend restraint with warmth. Its softened geometry makes eyewear a quiet statement.",
      price: "$149.00",
      category: "Glasses",
      life: "assets/wear-02.jpg",
      lifePos: "30%",
      angle: "assets/frame-angle.png",
      colors: [
        { id: "havana",   name: "Havana Tortoise", img: "assets/frame-front.png" },
        { id: "midnight", name: "Midnight Black",  img: "assets/frame-midnight.png" },
        { id: "moss",     name: "Moss Tortoise",   img: "assets/frame-moss.png" }
      ],
      details: "Havana Round is a modern reading of a classic panto silhouette, cut for people who move easily between the studio and the street. Defined by its rounded geometry, sculpted acetate frame and refined detailing, it turns everyday eyewear into a piece of character.",
      measurements: [
        ["Lens width", "47 mm"],
        ["Bridge", "21 mm"],
        ["Temple length", "145 mm"],
        ["Total width", "138 mm"],
        ["Weight", "18 g"]
      ]
    },

    "cat-eye-sun": {
      name: "Linea Cat-Eye",
      lede: "Linea sharpens the cat-eye into something architectural — an upswept line cut from a single block of acetate.",
      price: "$139.00",
      category: "Sunglasses",
      life: "assets/wear-01.jpg",
      lifePos: "44%",
      angle: null,
      colors: [
        { id: "midnight", name: "Midnight Black", img: null },
        { id: "havana",   name: "Havana Tortoise", img: null }
      ],
      details: "Linea takes the cat-eye out of the archive and gives it a harder edge. The upswept corners are cut rather than moulded, and the lenses carry a flat smoke tint that reads graphic in strong light.",
      measurements: [
        ["Lens width", "54 mm"],
        ["Bridge", "18 mm"],
        ["Temple length", "142 mm"],
        ["Total width", "144 mm"],
        ["Weight", "24 g"]
      ],
      svg: '<svg viewBox="0 0 320 132" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M26 46c1-7 7-10 17-11 33-3 74 5 99 18 6 3 7 10 3 16-13 19-44 30-72 27C42 93 24 76 26 46Z" fill="#1B1714"/><path d="M294 46c-1-7-7-10-17-11-33-3-74 5-99 18-6 3-7 10-3 16 13 19 44 30 72 27 31-3 49-20 47-50Z" fill="#1B1714"/><path d="M143 56c12-5 22-5 34 0" stroke="#1B1714" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M27 40 8 32M293 40l19-8" stroke="#1B1714" stroke-width="6" stroke-linecap="round"/></svg>'
    },

    "round-metal": {
      name: "Filo Round Metal",
      lede: "Filo strips the frame back to a wire outline — a whisper of gunmetal around the lens and nothing else.",
      price: "$159.00",
      category: "Glasses",
      life: "assets/wear-02.jpg",
      lifePos: "30%",
      angle: null,
      colors: [
        { id: "gunmetal", name: "Gunmetal", img: null },
        { id: "gold",     name: "Brushed Gold", img: null }
      ],
      details: "Filo is an exercise in removal. A 1.2 mm wire rim, a keyhole bridge and adjustable nose pads — nothing more. At 14 grams it is the lightest frame we make.",
      measurements: [
        ["Lens width", "46 mm"],
        ["Bridge", "22 mm"],
        ["Temple length", "145 mm"],
        ["Total width", "134 mm"],
        ["Weight", "14 g"]
      ],
      svg: '<svg viewBox="0 0 320 132" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="90" cy="68" r="42" fill="none" stroke="#9A8F80" stroke-width="5"/><circle cx="230" cy="68" r="42" fill="none" stroke="#9A8F80" stroke-width="5"/><path d="M132 60c14-13 42-13 56 0" stroke="#9A8F80" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M48 48 14 38M272 48l34-10" stroke="#9A8F80" stroke-width="4.5" stroke-linecap="round"/></svg>'
    },

    "rim-round-sun": {
      name: "Orbit Rim-Round",
      lede: "Orbit pairs a heavy acetate rim with a bottle-green lens — the most protective frame in the edit, and the least apologetic.",
      price: "$169.00",
      category: "Sunglasses",
      life: "assets/wear-01.jpg",
      lifePos: "44%",
      angle: null,
      colors: [
        { id: "midnight", name: "Midnight Black", img: null },
        { id: "moss",     name: "Moss Tortoise", img: null }
      ],
      details: "Orbit is built around a perfectly circular lens, held in a rim thick enough to read from across a room. The G15 mineral lens cuts glare without flattening colour.",
      measurements: [
        ["Lens width", "50 mm"],
        ["Bridge", "20 mm"],
        ["Temple length", "145 mm"],
        ["Total width", "142 mm"],
        ["Weight", "27 g"]
      ],
      svg: '<svg viewBox="0 0 320 132" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="90" cy="68" r="42" fill="#3F4A42"/><circle cx="230" cy="68" r="42" fill="#3F4A42"/><circle cx="90" cy="68" r="42" fill="none" stroke="#1B1714" stroke-width="7"/><circle cx="230" cy="68" r="42" fill="none" stroke="#1B1714" stroke-width="7"/><path d="M132 60c14-13 42-13 56 0" stroke="#1B1714" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M48 48 14 38M272 48l34-10" stroke="#1B1714" stroke-width="6" stroke-linecap="round"/></svg>'
    }
  };

  var SWATCH_PAINT = {
    havana:   "linear-gradient(135deg,#B07C3E,#4A2E17 55%,#8A5A2A)",
    midnight: "linear-gradient(135deg,#3A3A3A,#0C0C0C 60%,#262626)",
    moss:     "linear-gradient(135deg,#7E9147,#243015 55%,#5A6B32)",
    gunmetal: "linear-gradient(135deg,#B9B4AC,#6E685F 60%,#969086)",
    gold:     "linear-gradient(135deg,#E3C88B,#A98436 60%,#C9A75E)"
  };

  var $ = function (id) { return document.getElementById(id); };

  /* ---------- pick the product ------------------------------------------ */

  var slug = new URLSearchParams(location.search).get("p");
  var key = CATALOGUE[slug] ? slug : "havana-round";
  var product = CATALOGUE[key];

  document.title = "Azylis — " + product.name;
  $("pName").textContent = product.name;
  $("crumbName").textContent = product.name;
  $("pLede").textContent = product.lede;
  $("pPrice").textContent = product.price;

  $("pPoints").innerHTML = SHARED_POINTS
    .map(function (p) { return "<li>" + p + "</li>"; })
    .join("");

  /* ---------- media ------------------------------------------------------ */

  var shotMain  = $("shotMain");
  var lifeFig   = document.querySelector(".pdp-life");
  var angleFig  = document.querySelector(".pdp-shot--alt");
  var shotLife  = $("shotLife");
  var shotAngle = $("shotAngle");

  function paintMain(color) {
    if (color && color.img) {
      shotMain.hidden = false;
      shotMain.src = color.img;
      shotMain.alt = product.name + " in " + color.name;
      var drawn = shotMain.parentNode.querySelector(".shot-svg");
      if (drawn) drawn.remove();
      return;
    }
    /* products without photography fall back to their line drawing */
    shotMain.hidden = true;
    var host = shotMain.parentNode;
    var existing = host.querySelector(".shot-svg");
    if (existing) existing.remove();
    if (product.svg) {
      var wrap = document.createElement("div");
      wrap.className = "shot-svg";
      wrap.innerHTML = product.svg;
      host.appendChild(wrap);
    }
  }

  if (product.life) {
    shotLife.src = product.life;
    shotLife.alt = "Model wearing " + product.name;
    shotLife.style.setProperty("--life-pos", product.lifePos || "32%");
  }
  else { lifeFig.remove(); }

  if (product.angle) { shotAngle.src = product.angle; shotAngle.alt = product.name + ", three-quarter view"; }
  else { angleFig.remove(); }

  /* ---------- colour swatches -------------------------------------------- */

  var swatches  = $("swatches");
  var colorName = $("colorName");

  product.colors.forEach(function (color, i) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "swatch";
    b.setAttribute("role", "radio");
    b.setAttribute("aria-checked", i === 0 ? "true" : "false");
    b.setAttribute("aria-label", color.name);
    b.title = color.name;
    b.innerHTML = '<span class="swatch-chip" style="background:' +
      (SWATCH_PAINT[color.id] || "#999") + '"></span>';
    b.addEventListener("click", function () { choose(i); });
    swatches.appendChild(b);
  });

  function choose(i) {
    var color = product.colors[i];
    [].forEach.call(swatches.children, function (el, n) {
      el.setAttribute("aria-checked", n === i ? "true" : "false");
    });
    colorName.textContent = color.name;
    paintMain(color);
  }

  choose(0);

  /* ---------- size ------------------------------------------------------- */

  var sizeTrack = $("sizeTrack");
  sizeTrack.addEventListener("click", function (e) {
    var dot = e.target.closest(".size-dot");
    if (!dot) return;
    [].forEach.call(sizeTrack.querySelectorAll(".size-dot"), function (d) {
      d.setAttribute("aria-checked", d === dot ? "true" : "false");
    });
  });

  /* ---------- accordions -------------------------------------------------- */

  var measurementRows = product.measurements
    .map(function (r) { return "<div class='spec'><dt>" + r[0] + "</dt><dd>" + r[1] + "</dd></div>"; })
    .join("");

  var PANELS = [
    { t: "Details",          html: "<p>" + product.details + "</p>", open: true },
    { t: "Measurements",     html: "<dl class='specs'>" + measurementRows + "</dl>" },
    { t: "Lenses",           html: "<p>Every frame ships with anti-reflective, scratch-resistant lenses. Add a blue-light filter, a photochromic tint or your own prescription at the next step — all glazing is done in our own lab.</p>" },
    { t: "Shipping &amp; return", html: "<p>Free worldwide shipping, dispatched within two working days. Wear them for 30 days; if the fit is not right, return them free and we will remake or refund.</p>" }
  ];

  $("accordions").innerHTML = PANELS.map(function (p, i) {
    return '' +
      '<div class="acc' + (p.open ? " is-open" : "") + '">' +
        '<button class="acc-head" type="button" aria-expanded="' + (p.open ? "true" : "false") +
          '" aria-controls="acc-p' + i + '">' +
          '<span class="acc-sign" aria-hidden="true"></span>' +
          '<span class="acc-title">' + p.t + "</span>" +
        "</button>" +
        '<div class="acc-body" id="acc-p' + i + '">' +
          '<div class="acc-inner">' + p.html + "</div>" +
        "</div>" +
      "</div>";
  }).join("");

  $("accordions").addEventListener("click", function (e) {
    var head = e.target.closest(".acc-head");
    if (!head) return;
    var acc = head.parentNode;
    var open = acc.classList.toggle("is-open");
    head.setAttribute("aria-expanded", open ? "true" : "false");
  });

  /* ---------- add to cart -------------------------------------------------- */

  var bag = $("bagCount");
  var add = $("addToCart");
  var count = 0;
  var resetLabel;

  add.addEventListener("click", function () {
    count++;
    bag.hidden = false;
    bag.textContent = count;
    bag.classList.remove("pop");
    void bag.offsetWidth;              // restart the keyframe
    bag.classList.add("pop");

    var label = add.querySelector("span");
    label.textContent = "Added";
    add.classList.add("is-added");
    clearTimeout(resetLabel);
    resetLabel = setTimeout(function () {
      label.textContent = label.getAttribute("data-label");
      add.classList.remove("is-added");
    }, 1600);
  });

  $("selectLenses").addEventListener("click", function () {
    var lenses = document.querySelectorAll(".acc")[2];
    if (!lenses) return;
    lenses.classList.add("is-open");
    lenses.querySelector(".acc-head").setAttribute("aria-expanded", "true");
    lenses.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  /* ---------- you may also like ------------------------------------------
     Every other frame in the catalogue, drawn with the same card as the
     shelves. Rendered before the reveal observer runs so the cards are
     picked up with everything else. */

  var TRYON = '<span class="tryon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none">' +
    '<path d="M3.5 8V5.5A2 2 0 0 1 5.5 3.5H8M16 3.5h2.5a2 2 0 0 1 2 2V8M20.5 16v2.5a2 2 0 0 1-2 2H16M8 20.5H5.5a2 2 0 0 1-2-2V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    '<circle cx="9.4" cy="12" r="2.3" stroke="currentColor" stroke-width="1.4"/>' +
    '<circle cx="14.6" cy="12" r="2.3" stroke="currentColor" stroke-width="1.4"/>' +
    '<path d="M11.7 11.8h.6" stroke="currentColor" stroke-width="1.4"/></svg></span>';

  var alsoGrid = $("alsoGrid");
  if (alsoGrid) {
    var others = Object.keys(CATALOGUE).filter(function (s) { return s !== key; });

    alsoGrid.innerHTML = others.map(function (s, i) {
      var p = CATALOGUE[s];
      var lead = p.colors && p.colors[0];
      var media = lead && lead.img
        ? '<img src="' + lead.img + '" alt="' + p.name + '">'
        : (p.svg || "");
      return '' +
        '<a class="pcard" href="product.html?p=' + s + '" data-reveal="card" style="--d:.' + (i * 6) + 's">' +
          '<div class="pcard-shot">' +
            '<span class="tag">' + p.category + "</span>" +
            '<span class="colours">' + p.colors.length + " colours</span>" +
            media +
          "</div>" +
          '<div class="pcard-foot">' +
            '<div class="pcard-meta">' +
              '<h3 class="pcard-name">' + p.name + "</h3>" +
              '<p class="pcard-price">' + p.price + "</p>" +
            "</div>" + TRYON +
          "</div>" +
        "</a>";
    }).join("");
  }

  /* this page builds its markup at runtime, so translate once it exists */
  if (window.I18N) window.I18N.apply();

  /* ---------- reveals + mobile menu (same vocabulary as the home page) ----- */

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
