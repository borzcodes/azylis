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
      price: 349,
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
      price: 299,
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
      price: 379,
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
      price: 349,
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
    gold:     "linear-gradient(135deg,#E3C88B,#A98436 60%,#C9A75E)",
    /* the colourway words used across the imported catalogue */
    black:     "linear-gradient(135deg,#3A3A3A,#0C0C0C 60%,#262626)",
    dark:      "linear-gradient(135deg,#4A4642,#15120F 60%,#2E2A26)",
    grey:      "linear-gradient(135deg,#B9B4AC,#6E685F 60%,#969086)",
    gray:      "linear-gradient(135deg,#B9B4AC,#6E685F 60%,#969086)",
    silver:    "linear-gradient(135deg,#E2E2E0,#9A9A98 60%,#C6C6C4)",
    white:     "linear-gradient(135deg,#FFFFFF,#D8D5D0 60%,#F1EFEB)",
    trans:     "linear-gradient(135deg,#F4F1EB,#CFC9BF 60%,#E6E1D8)",
    brown:     "linear-gradient(135deg,#A06A3B,#4A2E17 60%,#7A4E2A)",
    tigred:    "linear-gradient(135deg,#B07C3E,#4A2E17 55%,#8A5A2A)",
    sahara:    "linear-gradient(135deg,#D8B98A,#9C7A48 60%,#C2A06A)",
    beige:     "linear-gradient(135deg,#E6D6C0,#B39B7A 60%,#D2BFA2)",
    blue:      "linear-gradient(135deg,#5B7FB5,#1F3A66 60%,#3B5C93)",
    sky:       "linear-gradient(135deg,#9CC5E8,#5B8FBF 60%,#7FB0DA)",
    turquoise: "linear-gradient(135deg,#4FB3B0,#1F6F6D 60%,#3A9C99)",
    electro:   "linear-gradient(135deg,#3C6BFF,#1A2E99 60%,#2E4FD1)",
    green:     "linear-gradient(135deg,#7E9147,#243015 55%,#5A6B32)",
    verde:     "linear-gradient(135deg,#6E9E6A,#1F4A2C 60%,#4F7C4E)",
    olive:     "linear-gradient(135deg,#8A8A52,#3E3E1A 60%,#6B6B3B)",
    orange:    "linear-gradient(135deg,#E58A2F,#8A4A0F 60%,#C86F1F)",
    red:       "linear-gradient(135deg,#C8453B,#6E1B15 60%,#A6332A)",
    purple:    "linear-gradient(135deg,#8E6AB8,#3F2560 60%,#6C4B94)",
    pink:      "linear-gradient(135deg,#E9A7A0,#B86A62 60%,#D68A83)",
    saumon:    "linear-gradient(135deg,#F0B39E,#C27A62 60%,#DE9880)",
    yellow:    "linear-gradient(135deg,#E3C25B,#A88A1E 60%,#CBAA3E)",
    orne:      "linear-gradient(135deg,#E3C88B,#A98436 60%,#C9A75E)",
    solar:     "linear-gradient(135deg,#F2C14E,#B5741A 60%,#D99A2E)"
  };

  function paintFor(name) {
    var words = String(name || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().split(/\s+/);
    for (var i = words.length - 1; i >= 0; i--) if (SWATCH_PAINT[words[i]]) return SWATCH_PAINT[words[i]];
    return "linear-gradient(135deg,#D9D4CC,#9A948B 60%,#BDB7AE)";
  }

  var $ = function (id) { return document.getElementById(id); };
  var money = window.Bag ? window.Bag.money : function (n) { return n + " MAD"; };

  /* ---------- pick the product ------------------------------------------ */

  var REAL = window.AZYLIS_CATALOGUE || [];
  var slug = new URLSearchParams(location.search).get("p");

  /* an imported frame: the product is its family, the colourways its
     siblings, each one a page of its own */
  var real = REAL.filter(function (p) { return p.slug === slug; })[0];
  var product, key;

  if (real) {
    var siblings = REAL.filter(function (p) { return p.family === real.family; });
    key = real.slug;
    product = {
      imported: true,
      name: siblings.length > 1 ? real.family : real.name,
      lede: "Acetate frame with UV400 lenses, fitted and adjusted at our store in Casablanca.",
      price: real.price,
      oldPrice: real.oldPrice,
      category: "Sunglasses",
      life: null, angle: null,
      colors: siblings.map(function (s) {
        return { id: s.slug, slug: s.slug, name: s.color || s.name, img: s.img,
                 gallery: s.gallery || [s.img], price: s.price, oldPrice: s.oldPrice };
      }),
      details: "Every pair is checked and adjusted by hand before it leaves the store — hinges tightened, temples shaped to sit level. Cash on delivery across Morocco, and a free adjustment in store whenever you need one.",
      detailImages: real.details || [],
      measurements: null
    };
  } else if (CATALOGUE[slug]) {
    key = slug;
    product = CATALOGUE[key];
  } else {
    /* no such frame: never show a placeholder in its place */
    location.replace("shop.html");
    return;
  }

  function priceHtml(p) {
    return p.oldPrice
      ? "<s>" + money(p.oldPrice) + "</s> <b>" + money(p.price) + "</b>"
      : money(p.price);
  }

  document.title = "Azylis — " + product.name;
  $("pName").textContent = product.name;
  $("crumbName").textContent = product.name;
  $("pLede").textContent = product.lede;
  $("pPrice").innerHTML = priceHtml(product);

  $("pPoints").innerHTML = SHARED_POINTS
    .map(function (p) { return "<li>" + p + "</li>"; })
    .join("");

  /* ---------- media ------------------------------------------------------ */

  var shotMain  = $("shotMain");
  if (product.imported) shotMain.parentNode.classList.add("pdp-shot--photo");
  var lifeFig   = document.querySelector(".pdp-life");
  var angleFig  = document.querySelector(".pdp-shot--alt");
  var shotLife  = $("shotLife");
  var shotAngle = $("shotAngle");

  /* An imported frame brings the photos from its page on azylis.ma: the
     first sits in the main shot, the rest follow it down the column. */
  var mediaCol = document.querySelector(".pdp-media");
  var booted = false;

  /* An <img> keeps showing its old picture until the new one has decoded,
     so a straight src swap flashes the previous frame. Fetch the new one
     first and only then point the element at it. */
  function swap(img, src) {
    if (img.getAttribute("src") === src) return;
    img.dataset.pending = "1";
    var pre = new Image();
    pre.onload = pre.onerror = function () {
      delete img.dataset.pending;
      img.src = src;
    };
    pre.src = src;
  }

  function paintGallery(color) {
    var shots = color.gallery && color.gallery.length ? color.gallery : [color.img];
    shotMain.hidden = false;
    swap(shotMain, shots[0]);
    shotMain.alt = product.name + " in " + color.name;

    [].forEach.call(mediaCol.querySelectorAll(".pdp-extra"), function (el) { el.remove(); });
    shots.slice(1).forEach(function (src, k) {
      var f = document.createElement("figure");
      f.className = "pdp-shot pdp-shot--photo pdp-extra" + (booted ? " is-in" : "");
      f.setAttribute("data-reveal", "wipe");
      f.style.setProperty("--d", (0.08 * (k + 1)).toFixed(2) + "s");
      var img = document.createElement("img");
      img.src = src;
      img.alt = product.name + " in " + color.name + ", view " + (k + 2);
      img.loading = "lazy";
      f.appendChild(img);
      mediaCol.appendChild(f);
    });
  }

  function paintMain(color) {
    if (product.imported) return paintGallery(color);
    if (color && color.img) {
      shotMain.hidden = false;
      swap(shotMain, color.img);
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
      (SWATCH_PAINT[color.id] || paintFor(color.name)) + '"></span>';
    b.addEventListener("click", function () { choose(i); });
    swatches.appendChild(b);
  });

  var chosen = 0;

  function choose(i) {
    chosen = i;
    var color = product.colors[i];
    [].forEach.call(swatches.children, function (el, n) {
      el.setAttribute("aria-checked", n === i ? "true" : "false");
    });
    colorName.textContent = color.name;
    paintMain(color);

    /* an imported colourway is a product of its own: follow its price and address */
    if (product.imported) {
      $("pPrice").innerHTML = priceHtml(color);
      if (color.slug !== new URLSearchParams(location.search).get("p")) {
        history.replaceState(null, "", "product.html?p=" + color.slug);
      }
    }
  }

  choose(product.imported
    ? Math.max(0, product.colors.map(function (c) { return c.slug; }).indexOf(key))
    : 0);
  booted = true;   // figures drawn from here on are swapped in view, so they reveal at once

  /* ---------- accordions -------------------------------------------------- */

  var measurementRows = (product.measurements || [])
    .map(function (r) { return "<div class='spec'><dt>" + r[0] + "</dt><dd>" + r[1] + "</dd></div>"; })
    .join("");

  /* the infographic from the product's page on azylis.ma, when it has one */
  var detailFigures = (product.detailImages || []).map(function (src) {
    return '<figure class="pdp-detail"><img src="' + src + '" alt="" loading="lazy"></figure>';
  }).join("");

  var PANELS = [
    { t: "Details",          html: detailFigures + "<p>" + product.details + "</p>", open: true },
    product.measurements && { t: "Measurements", html: "<dl class='specs'>" + measurementRows + "</dl>" },
    { t: "Lenses",           html: "<p>Every frame ships with anti-reflective, scratch-resistant lenses. Add a blue-light filter, a photochromic tint or your own prescription at the next step — all glazing is done in our own lab.</p>" },
    { t: "Shipping &amp; return", html: "<p>Free delivery, dispatched within two working days. You have 7 days from delivery to request a return or an exchange — a faulty pair is exchanged free of charge.</p>" }
  ].filter(Boolean);

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

  /* ---------- add to bag --------------------------------------------------- */

  var add = $("addToCart");
  var resetLabel;

  add.addEventListener("click", function () {
    var color = product.colors[chosen];
    /* frames without photography still get a thumbnail from their lead colour */
    var thumb = color.img || (product.colors[0] && product.colors[0].img) || null;

    window.Bag.add({
      slug: color.slug || key, name: product.name,
      price: color.price != null ? color.price : product.price,
      color: color.name,
      img: thumb
    });

    var label = add.querySelector("span");
    label.textContent = window.I18N ? window.I18N.t("Added") : "Added";
    add.classList.add("is-added");
    clearTimeout(resetLabel);
    resetLabel = setTimeout(function () {
      label.textContent = window.I18N ? window.I18N.t(label.getAttribute("data-label")) : label.getAttribute("data-label");
      add.classList.remove("is-added");
    }, 1600);
  });

  $("selectLenses").addEventListener("click", function () {
    var lenses = document.querySelectorAll(".acc")[PANELS.map(function (p) { return p.t; }).indexOf("Lenses")];
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
    var cards;

    if (real) {
      /* other families from the same shelf, one card per family */
      var cat = real.cats[0];
      var seenFamily = {};
      seenFamily[real.family] = true;
      cards = REAL.filter(function (p) {
        if (seenFamily[p.family] || p.cats.indexOf(cat) < 0) return false;
        seenFamily[p.family] = true;
        return true;
      }).slice(0, 8).map(function (p) {
        return { slug: p.slug, name: p.family, tag: p.oldPrice ? "Sale" : "", colours: 0,
                 media: '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy">',
                 price: priceHtml(p) };
      });
    } else {
      cards = Object.keys(CATALOGUE).filter(function (s) { return s !== key; }).map(function (s) {
        var p = CATALOGUE[s];
        var lead = p.colors && p.colors[0];
        return { slug: s, name: p.name, tag: p.category, colours: p.colors.length,
                 media: lead && lead.img ? '<img src="' + lead.img + '" alt="' + p.name + '">' : (p.svg || ""),
                 price: priceHtml(p) };
      });
    }

    alsoGrid.innerHTML = cards.map(function (c, i) {
      return '' +
        '<a class="pcard' + (real ? " pcard--photo" : "") + '" href="product.html?p=' + c.slug + '" data-reveal="card" style="--d:' + (i * 0.06).toFixed(2) + 's">' +
          '<div class="pcard-shot">' +
            (c.tag ? '<span class="tag">' + c.tag + "</span>" : "") +
            (c.colours > 1 ? '<span class="colours">' + c.colours + " colours</span>" : "") +
            c.media +
          "</div>" +
          '<div class="pcard-foot">' +
            '<div class="pcard-meta">' +
              '<h3 class="pcard-name">' + c.name + "</h3>" +
              '<p class="pcard-price">' + c.price + "</p>" +
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

  /* A figure's wipe only starts once its photo is on screen: otherwise the
     curtain lifts on an empty box and the picture pops in afterwards. */
  function reveal(el) {
    var go = function () { el.classList.add("is-in"); };
    var img = el.querySelector("img");
    if (!img || img.hidden || !(img.dataset.pending || img.getAttribute("src"))) return go();
    if (!img.dataset.pending && img.complete && img.naturalWidth) return go();
    img.addEventListener("load", go, { once: true });
    img.addEventListener("error", go, { once: true });
    /* the curtain clips the image to nothing, and a fully clipped image never
       starts a native lazy load — it is in view now, so fetch it ourselves */
    if (img.loading === "lazy") img.loading = "eager";
  }

  if (reduced || !("IntersectionObserver" in window)) {
    revealables.forEach(reveal);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        reveal(e.target);
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
