/* ============================================================
   Azylis — motion
   One scroll value drives the whole hero → clarity transition.
   Every number worth touching lives in TUNE.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- tuning ---------------------------------------------------- */

  var TUNE = {
    /* The film runs under all three beats and never shrinks — it turns in 3D
       and overscales so the rotated plane still reaches every edge. It also
       never stops: the loop is the constant the beats are cut against. */
    filmScale: [1, 1.24],
    filmY:     [0, -13],    // deg of yaw
    filmTilt:  [0, 6],      // deg of pitch
    filmVeil:  [0.52, 0.70],
    filmRun:   [0, 1],

    /* Where each beat sits on the 0..1 stage progress. The stage is 460vh,
       so one unit of progress is 3.6 screens of scrolling.
         .00-.17  hero leaves
         .29-.49  clarity copy arrives
         .33-.58  the deck builds beside it
         .49-.60  both hold — this is the composed frame
         .60-.97  the deck fans into the reel and travels
    */
    heroOut:     [0.00, 0.17],
    clarityIn:   [0.29, 0.49],
    clarityOut:  [0.60, 0.73],
    deckIn:      [0.33, 0.58],
    reelRun:     [0.60, 0.97],
    reelCopyIn:  [0.68, 0.82],
    reelTravel:  [22, -14],   // vw the rail drifts, right to left, and rests filling the frame
    deckScale:   1.26,        // the stack sits larger than the gallery it becomes

    smoothing: 0.14       // 0 = frozen, 1 = no smoothing
  };

  /* Six cards, three arrangements each.
       origin — a single point beside the clarity copy, where they grow from
       deck   — the stack that fills the section's empty right half
       reel   — the full-width gallery that closes the stage
     x/y are viewport percentages so the composition survives any window
     size, z is px of depth, r* are degrees. Progress interpolates
     origin → deck → reel, so one set of cards carries the whole sequence
     instead of three sets cross-fading. */
  var DECK_X = 25;   // vw right of centre: the stack's centre, and its origin

  var CARDS = [
    { deck:{ x:24.5, y:-8, z:-260, rz:-12, ry:15 }, reel:{ x:-53, y: 5, z:-140, rz:-3, ry: 11 } },
    { deck:{ x:26.5, y: 3, z:-150, rz:  7, ry:12 }, reel:{ x:-32, y:-6, z: -50, rz: 2, ry:  7 } },
    { deck:{ x:27.5, y:-2, z: -40, rz: -4, ry: 9 }, reel:{ x:-11, y: 4, z:  20, rz:-2, ry:  2 } },
    { deck:{ x:28.5, y: 6, z:  70, rz: 10, ry: 6 }, reel:{ x: 11, y:-5, z:  20, rz: 3, ry: -2 } },
    { deck:{ x:30.0, y:-5, z: 180, rz: -8, ry: 3 }, reel:{ x: 32, y: 5, z: -50, rz:-2, ry: -7 } },
    { deck:{ x:26.0, y: 1, z: 290, rz:  5, ry: 0 }, reel:{ x: 53, y:-4, z:-140, rz: 2, ry:-11 } }
  ];


  /* ---------- helpers --------------------------------------------------- */

  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var norm  = function (v, a, b) { return b === a ? 0 : clamp((v - a) / (b - a), 0, 1); };
  var mix   = function (a, b, t) { return a + (b - a) * t; };

  var easeInOut = function (t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };
  var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };
  var smoothstep = function (t) { return t * t * (3 - 2 * t); };

  var $ = function (id) { return document.getElementById(id); };

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- elements -------------------------------------------------- */

  var stage    = $("stage");
  var header   = $("siteHeader");
  var hero     = $("layerHero");
  var strip    = $("featureStrip");
  var clarity  = $("layerClarity");
  var film      = $("film");
  var filmPlane = $("filmPlane");
  var filmVeil  = $("filmVeil");
  var video     = $("heroVideo");
  var cue      = $("scrollCue");
  var reelTrack = $("reelTrack");
  var reelCopy  = $("reelCopy");

  var cardEls = reelTrack ? [].slice.call(reelTrack.querySelectorAll(".reel-card")) : [];

  var clarityCopy  = clarity ? clarity.querySelector(".clarity-copy")  : null;
  var clarityMedia = clarity ? clarity.querySelector(".clarity-media") : null;

  /* ---------- state ----------------------------------------------------- */

  var target = 0;   // raw scroll progress 0..1
  var eased  = 0;   // smoothed progress actually rendered
  var vw = window.innerWidth;
  var vh = window.innerHeight;
  var stageTop = 0;
  var stageRange = 1;


  function measure() {
    vw = window.innerWidth;
    vh = window.innerHeight;

    if (!stage) return;
    var rect = stage.getBoundingClientRect();
    stageTop = rect.top + window.pageYOffset;
    stageRange = Math.max(1, stage.offsetHeight - vh);
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
    strip.style.transform = "translate(-50%," + (ho * 5).toFixed(2) + "vh)";

    if (cue) cue.style.opacity = (1 - Math.min(1, ho * 1.6)).toFixed(3);

    /* --- film ---------------------------------------------------------- */
    if (filmPlane) {
      var fr = easeInOut(norm(p, TUNE.filmRun[0], TUNE.filmRun[1]));
      filmPlane.style.transform =
        "rotateY(" + mix(TUNE.filmY[0], TUNE.filmY[1], fr).toFixed(2) + "deg)" +
        " rotateX(" + mix(TUNE.filmTilt[0], TUNE.filmTilt[1], fr).toFixed(2) + "deg)" +
        " scale(" + mix(TUNE.filmScale[0], TUNE.filmScale[1], fr).toFixed(3) + ")";
      if (filmVeil) filmVeil.style.opacity = mix(TUNE.filmVeil[0], TUNE.filmVeil[1], fr).toFixed(3);
    }



    /* --- clarity in, then out under the reel ---------------------------- */
    var ci = easeOut(norm(p, TUNE.clarityIn[0], TUNE.clarityIn[1]));
    var co = easeInOut(norm(p, TUNE.clarityOut[0], TUNE.clarityOut[1]));
    var cv = ci * (1 - co);
    clarity.style.opacity = cv.toFixed(3);
    clarity.style.visibility = cv <= 0.001 ? "hidden" : "visible";
    clarity.setAttribute("aria-hidden", cv < 0.5 ? "true" : "false");

    if (clarityCopy) {
      clarityCopy.style.transform =
        "translate3d(" + ((1 - ci) * -46 - co * 70).toFixed(2) + "px,0,0)";
    }

    /* --- the reel ------------------------------------------------------- */
    if (cardEls.length) {
      /* Under 900px the clarity copy runs full width, so the stack cannot sit
         beside it — it moves to the centre and lifts above the copy, and the
         gallery pulls in so six cards still read on a narrow screen. */
      var narrow = vw < 900;
      var sx = narrow ? -DECK_X : 0;
      var sy = narrow ? -17 : 0;
      var rk = narrow ? 0.9 : 1;
      /* the stack has to clear the copy below it, and a phone has far less
         height to spend on it than a desktop has width */
      var ds = narrow ? 0.92 : TUNE.deckScale;

      var ra = easeInOut(norm(p, TUNE.reelRun[0], TUNE.reelRun[1]));

      /* The rail sweeps right-to-left as it forms. This rides on the reel
         target rather than the track, so at ra = 0 it contributes nothing and
         the deck is left exactly where it was placed. */
      var tv = mix(TUNE.reelTravel[0], TUNE.reelTravel[1], ra);

      /* each card starts a little after the one before it */
      var d0 = TUNE.deckIn[0];
      var dSpan = TUNE.deckIn[1] - d0;
      var step = dSpan * 0.1;
      var run  = dSpan * 0.5;

      for (var i = 0; i < cardEls.length; i++) {
        var c = CARDS[i];
        var da = easeOut(norm(p, d0 + i * step, d0 + i * step + run));

        var x  = mix(mix(DECK_X + sx, c.deck.x + sx, da), c.reel.x * rk + tv, ra);
        var y  = mix(mix(sy,          c.deck.y + sy, da), c.reel.y,      ra);
        var z  = mix(mix(0,           c.deck.z,      da), c.reel.z,      ra);
        var rz = mix(mix(0,           c.deck.rz,     da), c.reel.rz,     ra);
        var ry = mix(mix(0,           c.deck.ry,     da), c.reel.ry,     ra);
        var sc = mix(mix(0.06, ds, da), 1.06, ra);

        cardEls[i].style.opacity = da.toFixed(3);
        cardEls[i].style.transform =
          "translate(-50%,-50%)" +
          " translate3d(" + x.toFixed(2) + "vw," + y.toFixed(2) + "vh,0)" +
          " translateZ(" + z.toFixed(1) + "px)" +
          " rotateY(" + ry.toFixed(2) + "deg)" +
          " rotateZ(" + rz.toFixed(2) + "deg)" +
          " scale(" + sc.toFixed(3) + ")";
      }
    }

    if (reelCopy) {
      var rc = easeOut(norm(p, TUNE.reelCopyIn[0], TUNE.reelCopyIn[1]));
      reelCopy.style.opacity = rc.toFixed(3);
      reelCopy.style.transform = "translate3d(0," + ((1 - rc) * 26).toFixed(1) + "px,0)";
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

  /* The film simply plays and loops; scroll drives where it sits in space,
     never its playhead. */
  if (video) {
    video.muted = true;
    video.loop = true;
    video.setAttribute("autoplay", "");
    var go = video.play();
    if (go && go.catch) go.catch(function () {});
  }

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
