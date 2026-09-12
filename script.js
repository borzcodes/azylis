/* ============================================================
   Azylis — motion
   One scroll value drives the whole hero → clarity transition.
   Every number worth touching lives in TUNE.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- tuning ---------------------------------------------------- */

  var TUNE = {
    /* Where each beat sits on the 0..1 stage progress. The stage is 320vh,
       so one unit of progress is 2.2 screens of scrolling.
         .00-.28  hero copy leaves
         .16-.75  the photo row gathers into the deck
         .47-.80  clarity copy arrives
         .80-1.0  both hold — this is the composed frame the stage ends on
    */
    heroOut:     [0.00, 0.28],
    clarityIn:   [0.47, 0.80],
    deckIn:      [0.16, 0.75],
    deckScale:   1.26,        // relative to the 14.5vw frame the stack was tuned on

    smoothing: 0.14       // 0 = frozen, 1 = no smoothing
  };

  /* Six cards, two arrangements each.
       hero — the photo row the page opens on: five columns along the
              bottom, the outer two bleeding off the edges, tops staggered
              but all clear of the wordmark and its caption. The sixth
              waits off the right edge.
       deck — the stack that fills the section's empty right half
     hero.col counts columns from the centre and hero.top is the card's top
     edge in vh (row 1 sits a card below). deck x/y are viewport
     percentages so the composition survives any window size, z is px of
     depth, r* are degrees. Progress interpolates hero → deck, so one set
     of cards carries the whole sequence instead of two sets cross-fading. */
  var DECK_X = 25;   // vw right of centre: the stack's centre

  var CARDS = [
    { hero:{ col:-2, top:40 }, deck:{ x:24.5, y:-8, z:-260, rz:-12, ry:15 } },
    { hero:{ col:-1, top:70 }, deck:{ x:26.5, y: 3, z:-150, rz:  7, ry:12 } },
    { hero:{ col: 0, top:62 }, deck:{ x:27.5, y:-2, z: -40, rz: -4, ry: 9 } },
    { hero:{ col: 1, top:70 }, deck:{ x:28.5, y: 6, z:  70, rz: 10, ry: 6 } },
    { hero:{ col: 2, top:40 }, deck:{ x:30.0, y:-5, z: 180, rz: -8, ry: 3 } },
    { hero:{ col: 3, top:70 }, deck:{ x:26.0, y: 1, z: 290, rz:  5, ry: 0 } }
  ];

  /* under 900px the row is three across with a second row under the fold */
  var HERO_NARROW = [
    { col:-1, top:60 }, { col:0, top:67 }, { col:1, top:60 },
    { col:-1, top:60, row:1 }, { col:0, top:67, row:1 }, { col:1, top:60, row:1 }
  ];


  /* ---------- helpers --------------------------------------------------- */

  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var norm  = function (v, a, b) { return b === a ? 0 : clamp((v - a) / (b - a), 0, 1); };
  var mix   = function (a, b, t) { return a + (b - a) * t; };

  var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };

  var $ = function (id) { return document.getElementById(id); };

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- elements -------------------------------------------------- */

  var stage    = $("stage");
  var header   = $("siteHeader");
  var hero     = $("layerHero");
  var strip    = $("featureStrip");
  var clarity  = $("layerClarity");
  var cue      = $("scrollCue");
  var reelTrack = $("reelTrack");

  var cardEls = reelTrack ? [].slice.call(reelTrack.querySelectorAll(".reel-card")) : [];

  var clarityCopy = clarity ? clarity.querySelector(".clarity-copy") : null;

  /* ---------- state ----------------------------------------------------- */

  var target = 0;   // raw scroll progress 0..1
  var eased  = 0;   // smoothed progress actually rendered
  var vw = window.innerWidth;
  var vh = window.innerHeight;
  var stageTop = 0;
  var stageRange = 1;

  /* the card's CSS size (the hero row) and how far the deck has to scale
     it down to land on the 14.5vw frame it was tuned against */
  var cardW = 1;
  var cardH = 1;
  var cardK = 1;


  function measure() {
    vw = window.innerWidth;
    vh = window.innerHeight;

    if (!stage) return;
    var rect = stage.getBoundingClientRect();
    stageTop = rect.top + window.pageYOffset;
    stageRange = Math.max(1, stage.offsetHeight - vh);

    if (cardEls.length) {
      cardW = cardEls[0].offsetWidth || 1;
      cardH = cardEls[0].offsetHeight || 1;
      cardK = clamp(vw * 0.145, 132, 214) / cardW;
    }
  }

  function readScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    target = clamp((y - stageTop) / stageRange, 0, 1);
    header.classList.toggle("is-stuck", y > 24);
  }

  /* ---------- render ---------------------------------------------------- */

  function render(p) {
    /* --- hero copy out ------------------------------------------------- */
    var ho = easeOut(norm(p, TUNE.heroOut[0], TUNE.heroOut[1]));
    hero.style.opacity = (1 - ho).toFixed(3);
    hero.style.transform = "translate3d(0," + (-ho * 12).toFixed(2) + "vh,0)";
    hero.style.visibility = ho >= 1 ? "hidden" : "visible";

    strip.style.opacity = (1 - ho).toFixed(3);
    strip.style.transform = "translate3d(0," + (ho * 5).toFixed(2) + "vh,0)";

    if (cue) cue.style.opacity = (1 - Math.min(1, ho * 1.6)).toFixed(3);

    /* --- clarity in ------------------------------------------------------ */
    var ci = easeOut(norm(p, TUNE.clarityIn[0], TUNE.clarityIn[1]));
    clarity.style.opacity = ci.toFixed(3);
    clarity.style.visibility = ci <= 0.001 ? "hidden" : "visible";
    clarity.setAttribute("aria-hidden", ci < 0.5 ? "true" : "false");

    if (clarityCopy) {
      clarityCopy.style.transform =
        "translate3d(" + ((1 - ci) * -46).toFixed(2) + "px,0,0)";
    }

    /* --- the cards: hero row into the deck ------------------------------- */
    if (cardEls.length) {
      /* Under 900px the clarity copy runs full width, so the stack cannot sit
         beside it — it moves to the centre and lifts above the copy. */
      var narrow = vw < 900;
      var sx = narrow ? -DECK_X : 0;
      var sy = narrow ? -17 : 0;
      /* the stack has to clear the copy below it, and a phone has far less
         height to spend on it than a desktop has width */
      var ds = (narrow ? 0.92 : TUNE.deckScale) * cardK;

      /* the hero row's grid, in the vw/vh the transforms speak: columns a
         card wide plus a gutter, rows a card tall plus the same gutter */
      var gap = cardW * 0.052;
      var pitchVw = (cardW + gap) / vw * 100;
      var cardHvh = cardH / vh * 100;
      var rowVh = cardHvh + gap / vh * 100;

      /* each card starts a little after the one before it */
      var d0 = TUNE.deckIn[0];
      var dSpan = TUNE.deckIn[1] - d0;
      var step = dSpan * 0.1;
      var run  = dSpan * 0.5;

      for (var i = 0; i < cardEls.length; i++) {
        var c = CARDS[i];
        var h = narrow ? HERO_NARROW[i] : c.hero;
        var da = easeOut(norm(p, d0 + i * step, d0 + i * step + run));

        var hx = h.col * pitchVw;
        var hy = h.top + (h.row || 0) * rowVh + cardHvh / 2 - 50;

        var x  = mix(hx, c.deck.x + sx, da);
        var y  = mix(hy, c.deck.y + sy, da);
        var z  = mix(0,  c.deck.z,      da);
        var rz = mix(0,  c.deck.rz,     da);
        var ry = mix(0,  c.deck.ry,     da);
        var sc = mix(1,  ds,            da);

        /* flat in the row, shadowed once it lifts into the stack */
        cardEls[i].style.setProperty("--sh", da.toFixed(3));
        cardEls[i].style.transform =
          "translate(-50%,-50%)" +
          " translate3d(" + x.toFixed(2) + "vw," + y.toFixed(2) + "vh,0)" +
          " translateZ(" + z.toFixed(1) + "px)" +
          " rotateY(" + ry.toFixed(2) + "deg)" +
          " rotateZ(" + rz.toFixed(2) + "deg)" +
          " scale(" + sc.toFixed(3) + ")";
      }
    }
  }

  /* ---------- loop ------------------------------------------------------ */

  var running = false;

  function tick() {
    var d = target - eased;
    if (Math.abs(d) < 0.0002) {
      eased = target;
      render(eased);
      running = false;
      return;
    }
    eased += d * TUNE.smoothing;
    render(eased);
    requestAnimationFrame(tick);
  }

  function kick() {
    if (running) return;
    running = true;
    requestAnimationFrame(tick);
  }

  function onScroll() {
    readScroll();
    if (reduced) { eased = target; render(eased); return; }
    kick();
  }

  /* ---------- mobile menu ----------------------------------------------- */

  var burger = $("burger");
  var menu   = $("mobileMenu");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName !== "A") return;
      menu.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  }

  /* ---------- scroll reveals -------------------------------------------- */

  var revealables = [].slice.call(document.querySelectorAll("[data-reveal]"));

  if (revealables.length) {
    if (reduced || !("IntersectionObserver" in window)) {
      revealables.forEach(function (el) { el.classList.add("is-in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);          // reveals fire once, never on the way back up
        });
      }, { threshold: 0.16, rootMargin: "0px 0px -6% 0px" });
      revealables.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- clips ------------------------------------------------------
     Muted loops that only run while they are on screen. */

  var clips = [].slice.call(document.querySelectorAll("video[data-autoplay]"));

  if (clips.length) {
    var playClip = function (v) {
      v.muted = true;
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    };
    if ("IntersectionObserver" in window) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) playClip(e.target); else e.target.pause();
        });
      }, { threshold: 0.2 });
      clips.forEach(function (v) { cio.observe(v); });
    } else {
      clips.forEach(playClip);
    }
  }

  /* ---------- scroll-linked assembly -------------------------------------
     A [data-seq] section turns its own scroll position into 0..1, and each
     [data-seq-part] inside it declares the slice of that it cares about, e.g.
     data-seq-part=".28 .56". The part gets --in, 0 to 1; CSS decides what the
     number means. Sections finish assembling by the time their top reaches
     the upper third of the screen, so nothing is still moving once you are
     reading it. A section is marked .is-built at the end. */

  var seqs = [].slice.call(document.querySelectorAll("[data-seq]"));

  seqs.forEach(function (s) {
    s._parts = [].slice.call(s.querySelectorAll("[data-seq-part]")).map(function (el) {
      var r = (el.getAttribute("data-seq-part") || "0 1").split(/\s+/);
      return { el: el, a: parseFloat(r[0]) || 0, b: parseFloat(r[1]) || 1 };
    });
  });

  function seqRender() {
    for (var i = 0; i < seqs.length; i++) {
      var s = seqs[i];
      var box = s.getBoundingClientRect();
      if (box.bottom < -200 || box.top > vh + 200) continue;

      /* 0 when the section's top edge is a screen down, 1 once it has risen
         to the top eighth — one screen of scrolling buys the whole assembly */
      var p = clamp((vh - box.top) / (vh * 0.88), 0, 1);

      for (var k = 0; k < s._parts.length; k++) {
        var q = s._parts[k];
        q.el.style.setProperty("--in", easeOut(norm(p, q.a, q.b)).toFixed(3));
      }
      s.classList.toggle("is-built", p > 0.985);
    }
  }

  if (reduced) {
    seqs.forEach(function (s) {
      s.classList.add("is-built");
      s._parts.forEach(function (q) { q.el.style.setProperty("--in", "1"); });
    });
  } else {
    window.addEventListener("scroll", seqRender, { passive: true });
    window.addEventListener("resize", seqRender);
    seqRender();
  }

  /* ---------- parallax --------------------------------------------------
     Elements drift against the page as they cross the viewport, so the
     editorial band keeps the same sense of depth the pinned stage has. */

  var parallaxers = [].slice.call(document.querySelectorAll("[data-parallax]"));

  function parallax() {
    if (reduced || !parallaxers.length) return;
    var h = window.innerHeight;
    for (var i = 0; i < parallaxers.length; i++) {
      var el = parallaxers[i];
      var box = el.getBoundingClientRect();
      if (box.bottom < -200 || box.top > h + 200) continue;
      /* -1 when the element sits a screen high, +1 a screen low */
      var mid = (box.top + box.height / 2 - h / 2) / (h / 2);
      var amt = parseFloat(el.getAttribute("data-parallax")) || 0.1;
      el.style.transform = "translate3d(0," + (mid * amt * -100).toFixed(2) + "px,0)";
    }
  }

  window.addEventListener("scroll", parallax, { passive: true });
  window.addEventListener("resize", parallax);
  parallax();

  /* ---------- category rails ----------------------------------------------
     Every [data-rail] section wires its own arrows, so shelves can be added
     or removed without touching this. */

  [].forEach.call(document.querySelectorAll("[data-rail]"), function (shelf) {
    var rail = shelf.querySelector(".rail");
    var prev = shelf.querySelector("[data-rail-prev]");
    var next = shelf.querySelector("[data-rail-next]");
    if (!rail || !prev || !next) return;

    var step = function () {
      var card = rail.firstElementChild;
      if (!card) return rail.clientWidth;
      var gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
      return card.getBoundingClientRect().width + gap;
    };
    var sync = function () {
      var max = rail.scrollWidth - rail.clientWidth - 1;
      prev.disabled = rail.scrollLeft <= 1;
      next.disabled = rail.scrollLeft >= max;
    };

    /* optional page dots: one per viewport-width page of the rail */
    var dotBox = shelf.querySelector("[data-rail-dots]");
    var pages = 0;

    function buildDots() {
      if (!dotBox) return;
      var n = Math.max(1, Math.round(rail.scrollWidth / rail.clientWidth));
      if (n === pages) return;          // only rebuild when the count changes
      pages = n;
      dotBox.innerHTML = "";
      for (var i = 0; i < n; i++) {
        var d = document.createElement("button");
        d.type = "button";
        d.className = "dot";
        d.setAttribute("role", "tab");
        d.setAttribute("aria-label", "Page " + (i + 1) + " of " + n);
        d.dataset.page = i;
        dotBox.appendChild(d);
      }
      dotBox.hidden = n < 2;
    }

    function markDots() {
      if (!dotBox || !dotBox.children.length) return;
      var at = Math.round(rail.scrollLeft / rail.clientWidth);
      [].forEach.call(dotBox.children, function (d, i) {
        var on = i === at;
        d.classList.toggle("is-on", on);
        d.setAttribute("aria-selected", on ? "true" : "false");
      });
    }

    if (dotBox) {
      dotBox.addEventListener("click", function (e) {
        var d = e.target.closest(".dot");
        if (!d) return;
        rail.scrollTo({ left: rail.clientWidth * (+d.dataset.page), behavior: "smooth" });
      });
    }

    function refresh() { sync(); buildDots(); markDots(); }

    /* a rail with dots pages by the full viewport so arrows and dots agree;
       one without them steps a single card at a time */
    function advance() { return dotBox ? rail.clientWidth : step(); }

    prev.addEventListener("click", function () { rail.scrollBy({ left: -advance(), behavior: "smooth" }); });
    next.addEventListener("click", function () { rail.scrollBy({ left:  advance(), behavior: "smooth" }); });
    rail.addEventListener("scroll", function () { sync(); markDots(); }, { passive: true });
    window.addEventListener("resize", refresh);
    window.addEventListener("load", refresh);
    refresh();
  });

  /* ---------- faq --------------------------------------------------------- */

  var faqList = document.querySelector(".faq-list");
  if (faqList) {
    faqList.addEventListener("click", function (e) {
      var q = e.target.closest(".faq-q");
      if (!q) return;
      var item = q.parentNode;
      var open = item.classList.toggle("is-open");
      q.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- boot ------------------------------------------------------ */

  if (!stage) return;

  measure();
  readScroll();
  eased = target;
  render(eased);

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () {
    measure();
    readScroll();
    render(eased);
  });
  window.addEventListener("load", function () { measure(); readScroll(); render(eased); });

  /* Webfont swap changes the hero text height, which changes the gap the frame
     is fitted into — re-measure once the real faces are in. */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { measure(); readScroll(); render(eased); });
  }

  /* expose the knobs so the stage can be tuned live from the console */
  window.Azylis = { TUNE: TUNE, render: function () { render(eased); } };
})();
