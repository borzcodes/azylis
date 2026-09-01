/* ============================================================
   Azylis — shop listing
   Renders the frame grid, filtered by ?c= (men | women | lenses).
   "lenses" means clear optical frames — no tint.
   ============================================================ */

(function () {
  "use strict";

  var SVG = {
    cat: '<svg class="pcard-svg" viewBox="0 0 320 132" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M26 46c1-7 7-10 17-11 33-3 74 5 99 18 6 3 7 10 3 16-13 19-44 30-72 27C42 93 24 76 26 46Z" fill="#1B1714"/><path d="M294 46c-1-7-7-10-17-11-33-3-74 5-99 18-6 3-7 10-3 16 13 19 44 30 72 27 31-3 49-20 47-50Z" fill="#1B1714"/><path d="M143 56c12-5 22-5 34 0" stroke="#1B1714" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M27 40 8 32M293 40l19-8" stroke="#1B1714" stroke-width="6" stroke-linecap="round"/></svg>',
    metal: '<svg class="pcard-svg" viewBox="0 0 320 132" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="90" cy="68" r="42" fill="none" stroke="#9A8F80" stroke-width="5"/><circle cx="230" cy="68" r="42" fill="none" stroke="#9A8F80" stroke-width="5"/><path d="M132 60c14-13 42-13 56 0" stroke="#9A8F80" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M48 48 14 38M272 48l34-10" stroke="#9A8F80" stroke-width="4.5" stroke-linecap="round"/></svg>',
    orbit: '<svg class="pcard-svg" viewBox="0 0 320 132" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="90" cy="68" r="42" fill="#3F4A42"/><circle cx="230" cy="68" r="42" fill="#3F4A42"/><circle cx="90" cy="68" r="42" fill="none" stroke="#1B1714" stroke-width="7"/><circle cx="230" cy="68" r="42" fill="none" stroke="#1B1714" stroke-width="7"/><path d="M132 60c14-13 42-13 56 0" stroke="#1B1714" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M48 48 14 38M272 48l34-10" stroke="#1B1714" stroke-width="6" stroke-linecap="round"/></svg>'
  };

  var TRYON = '<span class="tryon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M3.5 8V5.5A2 2 0 0 1 5.5 3.5H8M16 3.5h2.5a2 2 0 0 1 2 2V8M20.5 16v2.5a2 2 0 0 1-2 2H16M8 20.5H5.5a2 2 0 0 1-2-2V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="9.4" cy="12" r="2.3" stroke="currentColor" stroke-width="1.4"/><circle cx="14.6" cy="12" r="2.3" stroke="currentColor" stroke-width="1.4"/><path d="M11.7 11.8h.6" stroke="currentColor" stroke-width="1.4"/></svg></span>';

  /* cats: lenses = clear optical, sun = tinted */
  var ITEMS = [
    { slug: "havana-round",  sku: "VR-2548 Optics", name: "Havana Round",     variant: "Havana Tortoise", price: "$149.00", img: "assets/frame-front.png",    colours: 3, tag: "Best seller", cats: ["lenses-men", "lenses-women", "clip-on"] },
    { slug: "havana-round",  sku: "VR-2549 Optics", name: "Havana Round",     variant: "Midnight Black",  price: "$149.00", img: "assets/frame-midnight.png", colours: 3, tag: "Top pick",    cats: ["lenses-men", "clip-on"] },
    { slug: "havana-round",  sku: "VR-2551 Optics", name: "Havana Round",     variant: "Moss Tortoise",   price: "$149.00", img: "assets/frame-moss.png",     colours: 3, tag: "New",         cats: ["lenses-women", "clip-on"] },
    { slug: "round-metal",   sku: "VR-2790 Optics", name: "Filo Round Metal", variant: "Gunmetal",        price: "$159.00", svg: SVG.metal, colours: 2, tag: "Lightweight", cats: ["lenses-men", "lenses-women", "clip-on"] },
    { slug: "rim-round-sun", sku: "VR-3110 Sun",    name: "Orbit Rim-Round",  variant: "Midnight Black",  price: "$169.00", svg: SVG.orbit, colours: 2, tag: "Sun",         cats: ["sun-men"] },
    { slug: "cat-eye-sun",   sku: "VR-3042 Sun",    name: "Linea Cat-Eye",    variant: "Midnight Black",  price: "$139.00", svg: SVG.cat,   colours: 2, tag: "Top pick",    cats: ["sun-women"] }
  ];

  var CATS = {
    "sun-men":      { title: "Sunglasses men",   lede: "Tinted frames cut a little squarer and a little wider, for faces that need the room." },
    "sun-women":    { title: "Sunglasses women", lede: "Tinted frames with softer geometry, balanced to sit light on the bridge." },
    "lenses-men":   { title: "Lenses men",       lede: "Clear optical frames — no tint. Add your prescription, a blue-light filter or Transitions® at checkout." },
    "lenses-women": { title: "Lenses women",     lede: "Clear optical frames — no tint. Add your prescription, a blue-light filter or Transitions® at checkout." },
    "clip-on":      { title: "Clip-ons",         lede: "Optical frames that take a magnetic sun clip — one pair that works indoors and out." }
  };

  var $ = function (id) { return document.getElementById(id); };

  var key = new URLSearchParams(location.search).get("c");
  var cat = CATS[key] ? key : null;

  document.title = "Azylis — " + (cat ? CATS[cat].title : "Shop");
  $("shopTitle").textContent = cat ? CATS[cat].title : "All frames";
  $("shopLede").textContent  = cat ? CATS[cat].lede : "Every frame we make, hand-finished in Italian acetate.";
  $("crumbCat").textContent  = cat ? CATS[cat].title : "Shop";

  /* filter chips */
  $("chips").innerHTML = [["", "All"]]
    .concat(Object.keys(CATS).map(function (k) { return [k, CATS[k].title]; }))
    .map(function (c) {
      var on = (c[0] || null) === cat;
      return '<a class="chip-link' + (on ? " is-on" : "") + '" href="shop.html' +
        (c[0] ? "?c=" + c[0] : "") + '">' + c[1] + "</a>";
    }).join("");

  /* grid */
  var list = cat ? ITEMS.filter(function (i) { return i.cats.indexOf(cat) > -1; }) : ITEMS;

  $("shopGrid").innerHTML = list.map(function (p, i) {
    var media = p.img
      ? '<img src="' + p.img + '" alt="' + p.name + " in " + p.variant + '">'
      : p.svg;
    return '' +
      '<a class="pcard" href="product.html?p=' + p.slug + '" data-reveal="card" style="--d:.' + (i * 6) + 's">' +
        '<div class="pcard-shot">' +
          '<span class="tag">' + p.tag + "</span>" +
          '<span class="colours">' + p.colours + " colours</span>" +
          media +
        "</div>" +
        '<div class="pcard-foot">' +
          '<div class="pcard-meta">' +
            '<p class="pcard-sku">' + p.sku + "</p>" +
            '<h3 class="pcard-name">' + p.name + "</h3>" +
            '<p class="pcard-var">' + p.variant + "</p>" +
            '<p class="pcard-price">' + p.price + "</p>" +
          "</div>" + TRYON +
        "</div>" +
      "</a>";
  }).join("");

  if (!list.length) {
    $("shopGrid").innerHTML = '<p class="shop-empty">Nothing in this category yet.</p>';
  }

  /* this page builds its markup at runtime, so translate once it exists */
  if (window.I18N) window.I18N.apply();

  /* reveals — same vocabulary as the rest of the site */
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
