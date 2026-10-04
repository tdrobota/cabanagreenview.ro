/* =====================================================================
   Green View Rarau - interactions (v18)
   "Mist" redesign
   ===================================================================== */
(function () {
  "use strict";

  /* -- i18n ---------------------------------------------------------------------- */
  // Each language has its own page: / (Romanian, default) and /en/. The page says which.
  var LANG = document.documentElement.lang === "en" ? "en" : "ro";
  var T = {
    ro: {
      nav_about:       "Cabana",
      nav_facilities:  "Facilități",
      nav_gallery:     "Galerie",
      nav_seasons:     "Anotimpuri",
      nav_map:         "Împrejurimi",
      nav_reviews:     "Recenzii",
      nav_contact:     "Rezervare",
      bar_tagline:     "Cabană A-Frame · Rarău, Bucovina",
      hero_eyebrow:    "Rarău · Bucovina",
      hero_title:      "O cabană <span class=\"nw\">A-Frame</span><br><em>la poalele</em><br>Rarăului",
      hero_sub:        "Între brazi, în Bucovina. Liniște, șemineu și pădurea la câțiva pași.",
      hero_cta:        "Verifică disponibilitatea",
      lab_about:       "01 · Cabana",
      about_title:     "O casă în pădure",
      about_p1:        "Green View Rarău este o cabană A-Frame modernă, construită cu materiale naturale. Pădurea e la câțiva pași, iar vârful Rarău la circa 10 km.",
      about_h2:        "Interiorul",
      about_p2:        "Forma triunghiulară, fereastra panoramică de la mansardă, mult lemn la interior. Stilul e între minimalism scandinav și rustic montan românesc.",
      about_h3:        "Liniște",
      about_p3:        "De la cabană nu se vede niciun vecin și nu se aude oraș. Seara rămân vântul prin brazi, focul din șemineu și cerul înstelat.",
      lab_facilities:  "02 · Facilități",
      fac_title:       "Ce găsești în cabană",
      fac_sub:         "Bucătărie completă, căldură, internet.",
      lab_gallery:     "03 · Galerie",
      gal_title:       "Cabana în imagini",
      gal_hint:        "Trage pentru a răsfoi · apasă pentru a mări",
      lab_seasons:     "04 · Anotimpuri",
      seasons_title:   "Cele patru anotimpuri",
      seasons_sub:     "Arată altfel în fiecare anotimp.",
      lab_map:         "05 · Împrejurimi",
      map_title:       "Ce e prin apropiere",
      map_sub:         "Repere din zonă, la câțiva kilometri de cabană.",
      map_legend:      "Cabana este punctul alb. Reperele din jur sunt marcate cu auriu.",
      map_phint:       "Distanțe și timpi aproximativi, cu mașina, de la cabană.",
      lab_reviews:     "06 · Recenzii",
      rev_title:       "Ce spun oaspeții",
      contact_p:       "Scrie-ne sau deschide calendarul ca să vezi datele libere. Răspundem în maximum 2 ore.",
      contact_cta:     "Verifică disponibilitatea",
      footer_nav_label: "Secțiuni",
      footer_copy:     "Cabană A-Frame, Rarău, Bucovina",
      modal_fallback:  "Dacă WhatsApp nu s-a deschis, trimite mesajul de aici:"
    },
    en: {
      nav_about:       "Cabin",
      nav_facilities:  "Amenities",
      nav_gallery:     "Gallery",
      nav_seasons:     "Seasons",
      nav_map:         "Surroundings",
      nav_reviews:     "Reviews",
      nav_contact:     "Book",
      bar_tagline:     "A-Frame cabin · Rarău, Bucovina",
      hero_eyebrow:    "Rarău · Bucovina",
      hero_title:      "An <span class=\"nw\">A-Frame</span> cabin<br><em>at the foot</em><br>of Rarău",
      hero_sub:        "Among the firs, in Bucovina. Quiet, a fireplace, and the forest a few steps away.",
      hero_cta:        "Check availability",
      lab_about:       "01 · Cabin",
      about_title:     "A house in the forest",
      about_p1:        "Green View Rarău is a modern A-Frame cabin, built with natural materials. The forest is a few steps away; Rarău peak is about 10 km away.",
      about_h2:        "Inside",
      about_p2:        "The triangular shape, the panoramic skylight, a lot of wood inside. The style sits between Scandinavian minimalism and Romanian mountain rustic.",
      about_h3:        "Quiet",
      about_p3:        "You can't see a single neighbour from the cabin, and you can't hear a town. In the evening what's left is the wind through the firs, the fire in the stove, and the stars.",
      lab_facilities:  "02 · Amenities",
      fac_title:       "What's in the cabin",
      fac_sub:         "Full kitchen, heating, internet.",
      lab_gallery:     "03 · Gallery",
      gal_title:       "The cabin in photos",
      gal_hint:        "Drag to browse · tap to enlarge",
      lab_seasons:     "04 · Seasons",
      seasons_title:   "The four seasons",
      seasons_sub:     "It looks different in each season.",
      lab_map:         "05 · Surroundings",
      map_title:       "What's nearby",
      map_sub:         "Local landmarks, a few kilometres from the cabin.",
      map_legend:      "The cabin is the white marker. Nearby landmarks are marked in gold.",
      map_phint:       "Approximate distances and times, by car, from the cabin.",
      lab_reviews:     "06 · Reviews",
      rev_title:       "What guests say",
      contact_p:       "Write to us, or open the calendar to see which dates are free. We reply within 2 hours.",
      contact_cta:     "Check availability",
      footer_nav_label: "Sections",
      footer_copy:     "A-Frame cabin, Rarău, Bucovina",
      modal_fallback:  "If WhatsApp didn't open, send the message from here:"
    }
  };

  function t(k) { return (T[LANG] && T[LANG][k]) || (T.ro[k]) || k; }

  var LANG_KEY = "gv-lang";

  function applyLang() {
    var langAttr = LANG === "en" ? "data-i18n-en" : "data-i18n-ro";
    document.querySelectorAll("[data-i18n], [data-i18n-ro]").forEach(function(el) {
      var k = el.getAttribute("data-i18n");
      // Inline bilingual text (both languages live in the HTML) wins over the
      // dictionary — this is what keeps content crawlable in both languages.
      if (el.hasAttribute(langAttr)) {
        if (k === "hero_title") el.innerHTML = el.getAttribute(langAttr);
        else el.textContent = el.getAttribute(langAttr);
        return;
      }
      if (!k) return;
      var val = t(k);
      if (k === "hero_title") el.innerHTML = val;
      else el.textContent = val;
    });
    document.getElementById("langToggle").textContent = LANG === "ro" ? "EN" : "RO";
    document.documentElement.lang = LANG;
    renderCal();
    updateMapLang();
  }

  // Romanian is the default for everyone (owner decision). A visitor who explicitly picked
  // English with the toggle is taken to /en/ on later visits; crawlers never are.
  try {
    if (LANG === "ro" && localStorage.getItem(LANG_KEY) === "en") location.replace("/en/" + location.hash);
  } catch (e) {}

  document.getElementById("langToggle").addEventListener("click", function() {
    var next = LANG === "ro" ? "en" : "ro";
    try { localStorage.setItem(LANG_KEY, next); } catch (e) {}
    location.href = (next === "en" ? "/en/" : "/") + location.hash;
  });

  // Footer year
  var footerYear = document.getElementById("footerYear");
  if (footerYear) footerYear.textContent = String(new Date().getFullYear());

  /* -- Analytics hook -------------------------------------------------------------------
     No-op until a provider is loaded (see the commented snippet in index.html).
     Works with Plausible or Umami; Cloudflare Web Analytics needs no event calls. */
  function track(name, props) {
    try {
      if (typeof window.plausible === "function") {
        window.plausible(name, props ? { props: props } : undefined);
      } else if (window.umami && typeof window.umami.track === "function") {
        window.umami.track(name, props);
      }
    } catch (e) {}
  }

  var PREFERS_REDUCED = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -- Nav state: transparent inside the hero frame, solid glass once scrolled -------- */
  var nav = document.getElementById("nav");
  var scrollTicking = false;

  function onScrollFrame() {
    scrollTicking = false;
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", function () {
    if (!scrollTicking) { scrollTicking = true; requestAnimationFrame(onScrollFrame); }
  }, { passive: true });
  onScrollFrame();

  /* -- Burger menu ---------------------------------------------------------------------- */
  var burger = document.getElementById("navBurger");
  var navLinks = document.getElementById("navLinks");
  function setMenu(open) {
    navLinks.classList.toggle("open", open);
    nav.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  }
  burger.addEventListener("click", function() {
    setMenu(!navLinks.classList.contains("open"));
  });
  navLinks.querySelectorAll("a").forEach(function(a) {
    a.addEventListener("click", function() { setMenu(false); });
  });
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
      setMenu(false);
      burger.focus();
    }
  });

  /* -- Facilities ---------------------------------------------------------------------- */
  /* Facility cards are static HTML now (crawlable in both languages); applyLang()
     swaps the label via data-i18n-ro / data-i18n-en. Nothing to build here. */

  /* -- Gallery ---------------------------------------------------------------------- */
  // The photos are in the HTML (crawlable); read them back for the lightbox and the loop.
  var GALLERY = Array.prototype.map.call(document.querySelectorAll("#gStrip .g-shot img"), function (img) {
    return { src: img.getAttribute("src"), l: img.getAttribute("alt") };
  });

  /* On touch devices the hint says "swipe" rather than "drag". */
  var isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  var galHintEl = document.querySelector('.gal-hint');
  if (isTouchDevice && galHintEl) {
    galHintEl.setAttribute('data-i18n-ro', 'Glisează pentru a răsfoi · apasă pentru a mări');
    galHintEl.setAttribute('data-i18n-en', 'Swipe to browse · tap to enlarge');
  }


  var gStrip = document.getElementById("gStrip");
  var originals = Array.prototype.slice.call(gStrip.children);
  originals.forEach(function (shot, i) {
    shot.addEventListener("click", function () { openLightbox(i); });
  });
  // A second copy makes the auto-scroll loop seamless; it is visual only.
  originals.forEach(function (shot, i) {
    var copy = shot.cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    copy.addEventListener("click", function () { openLightbox(i); });
    gStrip.appendChild(copy);
  });

  /* Gallery motion: gentle auto-scroll that any interaction pauses, plus
     pointer drag-to-scroll on desktop. The strip holds two copies of the
     list, so wrapping at the halfway mark is seamless. */
  var gStripWrap = document.querySelector('.g-strip-wrap');
  (function initGalleryScroll() {
    if (!gStripWrap || !gStrip) return;
    var reduceMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var paused = reduceMotion;
    var hovering = false, focused = false, dragging = false, visible = true;
    var SPEED = 30; // px per second

    // Exact distance between copy 1 and copy 2 of the list (independent of the
    // current scroll offset). Recomputed on resize.
    var loopWidth = 0;
    function measure() {
      var kids = gStrip.children;
      if (kids.length < GALLERY.length + 1) return;
      loopWidth = kids[GALLERY.length].getBoundingClientRect().left -
                  kids[0].getBoundingClientRect().left;
    }
    measure();
    window.addEventListener('resize', measure, { passive: true });

    // Track position as a float; scrollLeft can't hold sub-pixel steps, so
    // accumulating straight into it would never advance at 0.5px/frame.
    var pos = gStripWrap.scrollLeft;
    function normalize() {
      if (loopWidth <= 0) return;
      if (pos >= loopWidth) pos -= loopWidth;
      else if (pos < 0) pos += loopWidth;
      gStripWrap.scrollLeft = pos;
    }
    // A manual scroll (touch, scrollbar, drag) is the source of truth — sync
    // pos back from it unless we're mid-frame writing it ourselves.
    var writingScroll = false;
    gStripWrap.addEventListener('scroll', function () {
      if (!writingScroll) pos = gStripWrap.scrollLeft;
    }, { passive: true });

    var lastT = 0;
    function tick(now) {
      var dt = lastT ? Math.min(50, now - lastT) : 16;
      lastT = now;
      if (!paused && !hovering && !focused && !dragging && visible) {
        pos += SPEED * dt / 1000;
        writingScroll = true;
        normalize();
        writingScroll = false;
      }
      raf = requestAnimationFrame(tick);
    }
    var raf = requestAnimationFrame(tick);

    // Visible pause / play control (WCAG 2.2.2).
    var pauseBtn = document.getElementById('gPause');
    function syncPauseBtn() {
      if (!pauseBtn) return;
      pauseBtn.setAttribute('aria-pressed', paused ? 'true' : 'false');
      var ro = paused ? 'Pornește derularea' : 'Oprește derularea';
      var en = paused ? 'Resume scrolling' : 'Pause scrolling';
      pauseBtn.setAttribute('data-i18n-ro', ro);
      pauseBtn.setAttribute('data-i18n-en', en);
      pauseBtn.textContent = document.documentElement.lang === 'en' ? en : ro;
    }
    if (pauseBtn) {
      if (reduceMotion) pauseBtn.hidden = true;
      pauseBtn.addEventListener('click', function () { paused = !paused; syncPauseBtn(); });
      syncPauseBtn();
    }

    gStripWrap.addEventListener('mouseenter', function () { hovering = true; });
    gStripWrap.addEventListener('mouseleave', function () { hovering = false; });
    gStripWrap.addEventListener('focusin', function () { focused = true; });
    gStripWrap.addEventListener('focusout', function () { focused = false; });
    document.addEventListener('visibilitychange', function () {
      visible = !document.hidden;
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting && !document.hidden;
      }).observe(gStripWrap);
    }

    // Horizontal trackpad / shift-wheel is handled natively by overflow-x;
    // vertical wheel is left alone so the page still scrolls over the strip.

    // Pointer drag-to-scroll. A move past the threshold marks the gesture as a
    // drag so the trailing click doesn't open the lightbox.
    var startX = 0, startScroll = 0, moved = false, pointerId = null;
    gStripWrap.addEventListener('pointerdown', function (e) {
      if (e.button !== 0 || e.pointerType === 'touch') return;
      pointerId = e.pointerId;
      dragging = true;
      moved = false;
      startX = e.clientX;
      startScroll = pos;
      // Capture only once the gesture becomes a drag: capturing on pointerdown
      // retargets the click to the strip, and the photo never opens.
    });
    gStripWrap.addEventListener('pointermove', function (e) {
      if (!dragging || e.pointerId !== pointerId) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 5 && !moved) {
        moved = true;
        gStripWrap.classList.add('is-dragging');
        try { gStripWrap.setPointerCapture(pointerId); } catch (err) {}
      }
      pos = startScroll - dx;
      writingScroll = true;
      normalize();
      writingScroll = false;
    });
    function endDrag(e) {
      if (e.pointerId !== pointerId) return;
      dragging = false;
      try { gStripWrap.releasePointerCapture(pointerId); } catch (err) {}
      pointerId = null;
      // Drop the drag class after this event loop so the click handler below
      // still sees it.
      setTimeout(function () { gStripWrap.classList.remove('is-dragging'); }, 0);
    }
    gStripWrap.addEventListener('pointerup', endDrag);
    gStripWrap.addEventListener('pointercancel', endDrag);
    gStripWrap.addEventListener('click', function (e) {
      if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; }
    }, true);
  })();

  /* -- Seasons tabs (WAI-ARIA tabs pattern over static panels) ------------------------- */
  (function initSeasonTabs() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll(".seasons-tabs .stab"));
    var panels = tabs.map(function (tab) {
      return document.getElementById(tab.getAttribute("aria-controls"));
    });
    if (!tabs.length) return;

    function select(idx, focusTab) {
      tabs.forEach(function (tab, i) {
        var on = i === idx;
        tab.classList.toggle("active", on);
        tab.setAttribute("aria-selected", on ? "true" : "false");
        tab.tabIndex = on ? 0 : -1;
        if (panels[i]) {
          panels[i].classList.toggle("active", on);
          panels[i].hidden = !on;
        }
      });
      if (focusTab) tabs[idx].focus();
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { select(i); });
      tab.addEventListener("keydown", function (e) {
        var next = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % tabs.length;
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + tabs.length) % tabs.length;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = tabs.length - 1;
        if (next !== null) { e.preventDefault(); select(next, true); }
      });
    });
    select(0);
  })();

  /* -- Surroundings map (reads the static POI list; enhances it) ---------------------- */
  var poiItems = Array.prototype.slice.call(document.querySelectorAll("#poiList .poi-item"));
  var activePoi = 0;

  function poiText(item, cls) {
    var el = item.querySelector("." + cls);
    return el ? el.textContent.trim() : "";
  }
  var poiFeature = document.getElementById("poiFeature");
  var featureClosed = false;
  // Closing the preview frees the lower part of the map; picking any place reopens it.
  function closeFeature() {
    featureClosed = true;
    poiFeature.hidden = true;
    var pin = document.querySelector('.map-canvas .poi[data-i="' + activePoi + '"]');
    if (pin) pin.focus();
  }
  document.getElementById("poiClose").addEventListener("click", closeFeature);

  function openPanel(i, quiet) {
    var item = poiItems[i];
    if (!item) return;
    activePoi = i;
    if (!quiet) { featureClosed = false; poiFeature.hidden = false; }
    poiItems.forEach(function (el, idx) { el.classList.toggle("active", idx === i); });
    document.querySelectorAll(".map-canvas .poi").forEach(function (el) {
      el.classList.toggle("active", +el.getAttribute("data-i") === i);
    });
    var img = document.getElementById("pImg");
    if (img) {
      img.style.backgroundImage = "url('" + item.getAttribute("data-img").replace(/'/g, "%27") + "')";
      img.classList.add("has");
    }
    document.getElementById("pCat").textContent = poiText(item, "poi-item-cat");
    document.getElementById("pTitle").textContent = poiText(item, "poi-item-name");
    document.getElementById("pDist").textContent = poiText(item, "poi-item-dist");
    document.getElementById("pDesc").textContent = poiText(item, "poi-item-desc");

    var credit = document.getElementById("pCredit");
    if (credit) {
      var ct = item.getAttribute("data-credit");
      var cu = item.getAttribute("data-credit-url");
      credit.hidden = !ct;
      if (ct) {
        credit.textContent = "";
        if (cu) {
          var a = document.createElement("a");
          a.href = cu; a.target = "_blank"; a.rel = "noopener noreferrer"; a.textContent = ct;
          credit.appendChild(a);
        } else {
          credit.textContent = ct;
        }
      }
    }
    placeFeature(i);
  }

  /* Desktop: the place card floats over the map. Park it in the corner that hides the fewest
     other pins and never the selected one (phones show it below the map instead). */
  var CORNERS = ["bl", "tr", "br", "tl"];
  function placeFeature(i) {
    var canvas = document.getElementById("mapCanvas");
    if (!canvas || poiFeature.hidden || getComputedStyle(poiFeature).position !== "absolute") return;
    var W = canvas.offsetWidth, H = canvas.offsetHeight;
    var cw = (poiFeature.offsetWidth + 16) / W * 100, ch = (poiFeature.offsetHeight + 16) / H * 100;
    var pad = 3;   // pin radius plus breathing room, in % of the map
    var best = null;
    CORNERS.forEach(function (c) {
      var x0 = c[1] === "l" ? 0 : 100 - cw, y0 = c[0] === "t" ? 0 : 100 - ch;
      function covers(el) {
        var x = +el.getAttribute("data-x"), y = +el.getAttribute("data-y");
        return x > x0 - pad && x < x0 + cw + pad && y > y0 - pad && y < y0 + ch + pad;
      }
      if (covers(poiItems[i])) return;
      var n = poiItems.filter(function (el, k) { return k !== i && covers(el); }).length;
      if (!best || n < best.n) best = { c: c, n: n };
    });
    CORNERS.forEach(function (c) { poiFeature.classList.toggle("at-" + c, !!best && best.c === c); });
  }
  window.addEventListener("resize", function () { placeFeature(activePoi); }, { passive: true });
  /* The map is drawn in the same 0–100 % space as the pins (north up, real positions around
     the cabin; see the data-x / data-y notes in index.html). */
  var HOME = poiItems.filter(function (el) { return el.hasAttribute("data-home"); })[0];
  var HX = HOME ? +HOME.getAttribute("data-x") * 10 : 500, HY = HOME ? +HOME.getAttribute("data-y") * 7 : 350;
  function contours() {
    return [60, 125, 200, 290].map(function (r, i) {
      return '<ellipse cx="' + HX + '" cy="' + HY + '" rx="' + r + '" ry="' + Math.round(r * 0.8) + '" fill="none" stroke="#8fb0b7" stroke-width="1" vector-effect="non-scaling-stroke" opacity="' + (0.34 - i * 0.06) + '"/>';
    }).join("");
  }
  function trees() {
    var s = "", seed = 7;
    function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    for (var i = 0; i < 92; i++) {
      var x = rnd() * 1000, y = rnd() * 700;
      if (Math.hypot(x - HX, y - HY) < 92) continue;
      s += '<path d="M' + x.toFixed(0) + ' ' + y.toFixed(0) + ' l-3 6 h6 z" fill="#8fb0b7" opacity="' + (0.10 + rnd() * 0.16).toFixed(2) + '"/>';
    }
    return s;
  }
  function buildMap() {
    var c = document.getElementById("mapCanvas");
    if (!c || !poiItems.length) return;
    c.innerHTML = '<svg viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">' +
      '<defs><radialGradient id="mg" cx="55%" cy="50%" r="72%"><stop offset="0%" stop-color="#2a434a"/><stop offset="62%" stop-color="#172a30"/><stop offset="100%" stop-color="#0d1a1e"/></radialGradient></defs>' +
      '<rect width="1000" height="700" fill="url(#mg)"/>' + contours() +
      // the Moldova river, west to east through Pojorâta and Câmpulung Moldovenesc (north of the cabin)
      '<path d="M-10 172 C 80 166, 120 160, 156 158 S 330 136, 506 127 S 820 118, 1010 110" fill="none" stroke="#5f838c" stroke-width="5" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.45"/>' +
      trees() +
      // north marker
      '<g opacity="0.7"><path d="M27 52 l9 -24 l9 24 l-9 -6 z" fill="#c9d8da"/></g>' +
      '</svg>' +
      '<span class="map-north" aria-hidden="true">N</span>';
    poiItems.forEach(function (item, i) {
      var el = document.createElement("button");
      el.type = "button";
      el.className = "poi" + (item.hasAttribute("data-home") ? " home" : "");
      var px = +item.getAttribute("data-x");
      if (px > 70) el.className += " edge-r";      // labels near the frame edges open inward
      else if (px < 25) el.className += " edge-l";
      if (item.getAttribute("data-label") === "below") el.className += " label-below";   // crowded spot: label under the pin
      el.style.left = item.getAttribute("data-x") + "%";
      el.style.top = item.getAttribute("data-y") + "%";
      el.setAttribute("data-i", i);
      el.setAttribute("aria-label", poiText(item, "poi-item-name"));
      el.innerHTML = '<span class="pulse"></span><span class="pin"></span><span class="plabel"></span>';
      el.querySelector(".plabel").textContent = poiText(item, "poi-item-name");
      el.addEventListener("click", function () { openPanel(i); });
      c.appendChild(el);
    });
  }
  function updateMapLang() {
    if (!poiItems.length) return;
    document.querySelectorAll(".map-canvas .poi").forEach(function (el) {
      var item = poiItems[+el.getAttribute("data-i")];
      if (!item) return;
      var name = poiText(item, "poi-item-name");
      el.setAttribute("aria-label", name);
      var label = el.querySelector(".plabel");
      if (label) label.textContent = name;
    });
    openPanel(activePoi, featureClosed);
  }

  poiItems.forEach(function (item, i) {
    item.addEventListener("click", function () { openPanel(i); });
  });
  buildMap();
  openPanel(0);

  /* -- Reviews: static cards; clone once for a seamless marquee ---------------------- */
  (function initReviews() {
    var revTrack = document.getElementById("revTrack");
    if (!revTrack) return;
    var reduceMotion = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return; // static, scrollable list is enough
    var originals = Array.prototype.slice.call(revTrack.children);
    originals.forEach(function (card) {
      // The copy only makes the loop seamless: hide it from screen readers.
      var copy = card.cloneNode(true);
      copy.setAttribute("aria-hidden", "true");
      copy.querySelectorAll("a, button").forEach(function (el) { el.tabIndex = -1; });
      revTrack.appendChild(copy);
    });
    revTrack.classList.add("is-looping");
  })();

  /* -- Lightbox ---------------------------------------------------------------------- */
  var lightbox  = document.getElementById("lightbox");
  var lbImg     = document.getElementById("lbImg");
  var lbCaption = document.getElementById("lbCaption");
  var lbIndex   = 0;

  var lbRelease = null;

  function showLbImage() {
    var g = GALLERY[lbIndex];
    lbImg.src = g.src.replace(/\.jpg$/, ".webp");
    lbImg.alt = g.l;
    lbCaption.textContent = g.l;
  }
  function openLightbox(i) {
    lbIndex = i;
    showLbImage();
    lightbox.classList.add("open");
    lbRelease = trapFocus(lightbox, {
      initialFocus: document.getElementById("lbClose"),
      onEscape: closeLightbox
    });
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
    if (lbRelease) { lbRelease(); lbRelease = null; }
  }
  function moveLightbox(dir) {
    lbIndex = (lbIndex + dir + GALLERY.length) % GALLERY.length;
    showLbImage();
  }

  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", function() { moveLightbox(-1); });
  document.getElementById("lbNext").addEventListener("click", function() { moveLightbox(1); });
  lightbox.addEventListener("click", function(e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", function(e) {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "ArrowLeft")   moveLightbox(-1);
    if (e.key === "ArrowRight")  moveLightbox(1);
  });

  /* -- Focus trap (lightbox) ---------------------------------------------------------------------- */
  var FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),' +
    'select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

  function trapFocus(container, opts) {
    opts = opts || {};
    var restoreTo = document.activeElement;

    function visibleFocusable() {
      return Array.prototype.filter.call(
        container.querySelectorAll(FOCUSABLE),
        function (el) { return el.offsetParent !== null || el === document.activeElement; }
      );
    }
    function onKey(e) {
      if (e.key === "Escape") { e.preventDefault(); var cb = opts.onEscape; release(); if (cb) cb(); return; }
      if (e.key !== "Tab") return;
      var items = visibleFocusable();
      if (!items.length) return;
      var first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", onKey, true);

    var initial = opts.initialFocus || visibleFocusable()[0];
    if (initial) requestAnimationFrame(function () { initial.focus(); });

    var released = false;
    function release() {
      if (released) return;
      released = true;
      document.removeEventListener("keydown", onKey, true);
      if (restoreTo && restoreTo.focus) restoreTo.focus();
    }
    return release;
  }

  /* -- Booking card: date picker, stay summary, WhatsApp hand-off ------------------------
     The card is the whole booking flow: pick arrival + departure in the picker, read the
     stay back in the summary, and the button opens WhatsApp with the request filled in. */
  var calPop       = document.getElementById("calPop");
  var calGrid      = document.getElementById("calGrid");
  var sendBtn      = document.getElementById("sendBtn");
  var bookFallback = document.getElementById("bookFallback");
  var bookFallbackLink = document.getElementById("bookFallbackLink");
  var calTriggers  = Array.prototype.slice.call(document.querySelectorAll("[data-cal-open]"));

  var MS = 86400000, MIN_NIGHTS = 2, MIN_GUESTS = 8, MAX_GUESTS = 16;
  var checkIn = null, checkOut = null, guests = MIN_GUESTS;
  var calYear, calMonth, calOpen = false, calReturnFocus = null;
  var inModal = false;   // the card is shown inside the booking modal (calendar always open)

  var MONTHS_RO = ["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"];
  var MONTHS_EN = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var MON_RO    = ["ian.","feb.","mar.","apr.","mai","iun.","iul.","aug.","sept.","oct.","nov.","dec."];
  var MON_EN    = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var DAYS_RO   = ["Lu","Ma","Mi","Jo","Vi","Sâ","Du"];
  var DAYS_EN   = ["Mo","Tu","We","Th","Fr","Sa","Su"];
  var WD_RO     = ["dum.","lun.","mar.","mie.","joi","vin.","sâm."];
  var WD_EN     = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  function en() { return LANG === "en"; }
  function today0() { var d = new Date(); d.setHours(0, 0, 0, 0); return d; }
  function addDays(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  function nightsBetween(a, b) { return Math.round((b - a) / MS); }
  function sameDay(a, b) { return !!a && !!b && a.getTime() === b.getTime(); }

  // "joi, 10 nov." / "Thu, 10 Nov"; the year only when it isn't this year
  function fmtShort(d) {
    var y = d.getFullYear() !== new Date().getFullYear() ? " " + d.getFullYear() : "";
    return en()
      ? WD_EN[d.getDay()] + ", " + d.getDate() + " " + MON_EN[d.getMonth()] + y
      : WD_RO[d.getDay()] + ", " + d.getDate() + " " + MON_RO[d.getMonth()] + y;
  }
  // "10 noiembrie 2026": the WhatsApp message and the day buttons' labels
  function fmtLong(d) {
    return en()
      ? d.getDate() + " " + MONTHS_EN[d.getMonth()] + " " + d.getFullYear()
      : d.getDate() + " " + MONTHS_RO[d.getMonth()] + " " + d.getFullYear();
  }
  // Romanian counts of 20+ (unless the last two digits are 1–19) take "de"
  function roDe(n) { var r = n % 100; return n >= 20 && (r === 0 || r >= 20) ? " de " : " "; }
  function nightsLabel(n) { return en() ? n + (n === 1 ? " night" : " nights") : n + roDe(n) + "nopți"; }
  function guestsLabel(n) { return en() ? n + " guests" : n + roDe(n) + "persoane"; }

  function renderCal() {
    if (!calGrid) return;
    var t0 = today0();
    var choosingOut = !!checkIn && !checkOut;
    document.getElementById("calStep").textContent = choosingOut
      ? (en() ? "Now pick your departure date" : "Acum alege data plecării")
      : (en() ? "Pick your arrival date" : "Alege data sosirii");
    var monthName = (en() ? MONTHS_EN : MONTHS_RO)[calMonth];
    document.getElementById("calMonthLabel").textContent =
      monthName.charAt(0).toUpperCase() + monthName.slice(1) + " " + calYear;
    document.getElementById("calPrev").disabled =
      calYear < t0.getFullYear() || (calYear === t0.getFullYear() && calMonth <= t0.getMonth());

    calGrid.innerHTML = "";
    (en() ? DAYS_EN : DAYS_RO).forEach(function (d) {
      var s = document.createElement("span");
      s.className = "day-label"; s.textContent = d; s.setAttribute("aria-hidden", "true");
      calGrid.appendChild(s);
    });
    var offset = (new Date(calYear, calMonth, 1).getDay() + 6) % 7;
    for (var i = 0; i < offset; i++) {
      var empty = document.createElement("span");
      empty.className = "cal-day empty";
      calGrid.appendChild(empty);
    }
    var daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    for (var d = 1; d <= daysInMonth; d++) {
      var dt = new Date(calYear, calMonth, d);
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cal-day";
      btn.textContent = d;
      btn.setAttribute("data-t", dt.getTime());
      btn.tabIndex = -1;
      var label = fmtLong(dt);
      var tooShort = choosingOut && dt > checkIn && nightsBetween(checkIn, dt) < MIN_NIGHTS;
      if (dt < t0 || tooShort) {
        btn.disabled = true;
        btn.classList.add(dt < t0 ? "past" : "too-short");
      }
      if (sameDay(dt, t0)) btn.classList.add("today");
      if (sameDay(dt, checkIn))  { btn.classList.add("selected-in");  label += en() ? ", arrival" : ", sosire"; }
      if (sameDay(dt, checkOut)) { btn.classList.add("selected-out"); label += en() ? ", departure" : ", plecare"; }
      if (checkIn && checkOut && dt > checkIn && dt < checkOut) btn.classList.add("in-range");
      btn.setAttribute("aria-label", label);
      btn.setAttribute("aria-pressed", sameDay(dt, checkIn) || sameDay(dt, checkOut) ? "true" : "false");
      calGrid.appendChild(btn);
    }
    // Roving tabindex: one day sits in the tab order (the next sensible pick)
    var days = Array.prototype.slice.call(calGrid.querySelectorAll("button.cal-day:not([disabled])"));
    var rover = choosingOut
      ? days.filter(function (b) { return +b.getAttribute("data-t") > checkIn.getTime(); })[0]
      : (calGrid.querySelector(".selected-in:not([disabled])") || calGrid.querySelector(".today:not([disabled])"));
    rover = rover || days[0];
    if (rover) rover.tabIndex = 0;
    updateSummary();
  }

  function focusDay(time) {
    var b = calGrid.querySelector('[data-t="' + time + '"]');
    if (!b || b.disabled) return false;
    calGrid.querySelectorAll("button.cal-day").forEach(function (x) { x.tabIndex = -1; });
    b.tabIndex = 0;
    b.focus();
    return true;
  }
  function focusRover() {
    var b = calGrid.querySelector('button.cal-day[tabindex="0"]');
    if (b) b.focus();
  }
  function showMonthOf(d) { calYear = d.getFullYear(); calMonth = d.getMonth(); }

  function pickDay(dt) {
    if (dt < today0()) return;
    if (!checkIn || checkOut || dt <= checkIn) {
      checkIn = dt; checkOut = null;
    } else if (nightsBetween(checkIn, dt) >= MIN_NIGHTS) {
      checkOut = dt;
    } else {
      return;
    }
    if (bookFallback) bookFallback.hidden = true;
    renderCal();
    if (checkOut) {
      track("dates_selected", { nights: nightsBetween(checkIn, checkOut) });
      // Let the range paint for a beat, then hand over to the summary and the button.
      if (inModal) sendBtn.focus();
      else setTimeout(function () { closeCal(false); sendBtn.focus(); }, PREFERS_REDUCED ? 0 : 320);
    } else {
      focusRover();
    }
  }

  // Range preview while the departure date is being chosen
  function previewTo(time) {
    calGrid.querySelectorAll(".cal-day.preview").forEach(function (b) { b.classList.remove("preview"); });
    if (!checkIn || checkOut || !time) return;
    calGrid.querySelectorAll("button.cal-day").forEach(function (b) {
      var t = +b.getAttribute("data-t");
      if (t > checkIn.getTime() && t <= time) b.classList.add("preview");
    });
  }

  function isSheet() { return window.matchMedia("(max-width: 900px)").matches; }

  function openCal(which) {
    showMonthOf(which === "out" && checkOut ? checkOut : (checkIn || today0()));
    calReturnFocus = document.activeElement;
    calPop.hidden = false;
    calOpen = true;
    document.documentElement.classList.toggle("cal-sheet-open", isSheet());
    calTriggers.forEach(function (b) { if (b.hasAttribute("aria-expanded")) b.setAttribute("aria-expanded", "true"); });
    renderCal();
    requestAnimationFrame(function () {
      calPop.classList.add("open");
      focusRover();
    });
    track("calendar_open");
  }

  function closeCal(restoreFocus) {
    if (!calOpen) return;
    calOpen = false;
    calPop.classList.remove("open");
    calPop.hidden = true;
    previewTo(null);
    document.documentElement.classList.remove("cal-sheet-open");
    calTriggers.forEach(function (b) { if (b.hasAttribute("aria-expanded")) b.setAttribute("aria-expanded", "false"); });
    if (restoreFocus && calReturnFocus && calReturnFocus.focus) calReturnFocus.focus();
  }

  function syncCardField(id, date) {
    var el = document.getElementById(id);
    if (!el) return;
    el.textContent = date ? fmtShort(date) : (el.getAttribute(en() ? "data-i18n-en" : "data-i18n-ro") || "");
    el.classList.toggle("is-set", !!date);
  }

  function updateSummary() {
    syncCardField("cardIn", checkIn);
    syncCardField("cardOut", checkOut);
    var done = !!(checkIn && checkOut);
    document.getElementById("sumRules").hidden = done;
    document.getElementById("sumStay").hidden = !done;
    document.getElementById("bookSummary").classList.toggle("is-set", done);
    if (done) {
      document.getElementById("sumNights").textContent =
        nightsLabel(nightsBetween(checkIn, checkOut)) + " · " + guestsLabel(guests);
      document.getElementById("sumRange").textContent = fmtShort(checkIn) + " → " + fmtShort(checkOut);
    }
  }

  function setGuests(value) {
    guests = Math.max(MIN_GUESTS, Math.min(MAX_GUESTS, parseInt(value, 10) || MIN_GUESTS));
    document.getElementById("guestCount").value = guests;
    document.getElementById("guestMinus").disabled = guests <= MIN_GUESTS;
    document.getElementById("guestPlus").disabled = guests >= MAX_GUESTS;
    updateSummary();
  }

  // Triggers, month navigation, day picks, keyboard
  calTriggers.forEach(function (b) {
    b.addEventListener("click", function () {
      if (inModal) { focusRover(); return; }
      if (calOpen) closeCal(false);
      else openCal(b.getAttribute("data-cal-open"));
    });
  });
  document.getElementById("calClose").addEventListener("click", function () { closeCal(true); });
  document.getElementById("calPrev").addEventListener("click", function () {
    calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; } renderCal();
  });
  document.getElementById("calNext").addEventListener("click", function () {
    calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; } renderCal();
  });
  calGrid.addEventListener("click", function (e) {
    var b = e.target.closest("button.cal-day");
    if (b && !b.disabled) pickDay(new Date(+b.getAttribute("data-t")));
  });
  calGrid.addEventListener("mouseover", function (e) {
    var b = e.target.closest("button.cal-day");
    previewTo(b && !b.disabled ? +b.getAttribute("data-t") : null);
  });
  calGrid.addEventListener("mouseleave", function () { previewTo(null); });
  calGrid.addEventListener("keydown", function (e) {
    var b = e.target.closest("button.cal-day");
    if (!b) return;
    var cur = new Date(+b.getAttribute("data-t"));
    var dow = (cur.getDay() + 6) % 7;
    var step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7, Home: -dow, End: 6 - dow }[e.key];
    if (step === undefined) return;
    e.preventDefault();
    var target = addDays(cur, step);
    if (target < today0()) return;
    if (target.getMonth() !== calMonth || target.getFullYear() !== calYear) { showMonthOf(target); renderCal(); }
    focusDay(target.getTime());
    previewTo(target.getTime());
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && calOpen && !inModal) { e.preventDefault(); closeCal(true); }
  });
  document.addEventListener("pointerdown", function (e) {
    if (calOpen && !inModal && !calPop.contains(e.target) && !e.target.closest("[data-cal-open]")) closeCal(false);
  });
  calPop.addEventListener("focusout", function (e) {
    var to = e.relatedTarget;
    if (calOpen && !inModal && to && !calPop.contains(to) && !to.closest("[data-cal-open]")) closeCal(false);
  });
  window.addEventListener("resize", function () {
    if (calOpen && !inModal) document.documentElement.classList.toggle("cal-sheet-open", isSheet());
  }, { passive: true });

  document.getElementById("guestMinus").addEventListener("click", function () { setGuests(guests - 1); });
  document.getElementById("guestPlus").addEventListener("click", function () { setGuests(guests + 1); });
  document.getElementById("guestCount").addEventListener("change", function (e) { setGuests(e.target.value); });

  /* Booking modal: once the visitor is past the hero, the "book" buttons (nav, footer)
     open the same card in a dialog, calendar shown inline. The card is moved, not copied,
     so dates, guests and every handler stay the one booking state. */
  var bookCard  = document.getElementById("booking");
  var bookModal = document.getElementById("bookModal");
  var bookBody  = document.getElementById("bookModalBody");
  var cardHome  = document.createComment("booking card home");
  var modalRelease = null;

  function pastHero() {
    return document.getElementById("hero").getBoundingClientRect().bottom < 120;
  }

  function openBookingModal() {
    if (inModal) return;
    if (calOpen) closeCal(false);
    bookCard.parentNode.insertBefore(cardHome, bookCard);
    bookBody.appendChild(bookCard);
    bookCard.classList.add("is-modal");
    inModal = true;
    showMonthOf(checkIn || today0());
    calPop.hidden = false;
    calPop.classList.add("open");
    calOpen = true;
    renderCal();
    bookModal.hidden = false;
    document.documentElement.classList.add("modal-open");
    requestAnimationFrame(function () { bookModal.classList.add("open"); });
    modalRelease = trapFocus(bookModal, { initialFocus: calGrid.querySelector('button.cal-day[tabindex="0"]') || sendBtn, onEscape: closeBookingModal });
    track("booking_modal_open");
  }

  function closeBookingModal() {
    if (!inModal) return;
    bookModal.classList.remove("open");
    bookModal.hidden = true;
    document.documentElement.classList.remove("modal-open");
    calPop.classList.remove("open");
    calPop.hidden = true;
    calOpen = false;
    inModal = false;
    bookCard.classList.remove("is-modal");
    cardHome.parentNode.insertBefore(bookCard, cardHome);
    cardHome.parentNode.removeChild(cardHome);
    previewTo(null);
    if (modalRelease) { var r = modalRelease; modalRelease = null; r(); }
  }

  document.getElementById("bookModalClose").addEventListener("click", closeBookingModal);
  bookModal.addEventListener("click", function (e) { if (e.target === bookModal) closeBookingModal(); });

  document.querySelectorAll("[data-book]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (pastHero()) { openBookingModal(); return; }
      // hero still on screen: bring the card fully into view and open its picker
      var r = bookCard.getBoundingClientRect();
      var inView = r.top >= 0 && r.bottom <= window.innerHeight;
      if (!inView) bookCard.scrollIntoView({ behavior: PREFERS_REDUCED ? "auto" : "smooth", block: "center" });
      setTimeout(function () { openCal("in"); }, inView || PREFERS_REDUCED ? 0 : 550);
    });
  });

  /* -- Send the request via WhatsApp ---------------------------------------------------- */
  var WA_NUMBER = "40756651582";

  function sendRequest() {
    if (!checkIn || !checkOut) {   // no dates yet: the button leads into the picker
      if (inModal) focusRover(); else openCal(checkIn ? "out" : "in");
      return;
    }
    var n = nightsBetween(checkIn, checkOut);
    var msg = en()
      ? "Hello! I'd like to book Green View Rarău.\n\nCheck-in: " + fmtLong(checkIn) + "\nCheck-out: " + fmtLong(checkOut) +
        " (" + nightsLabel(n) + ")\nGuests: " + guests + "\n\nIs the cabin available? Thank you!"
      : "Bună ziua! Aș dori să rezerv cabana Green View Rarău.\n\nSosire: " + fmtLong(checkIn) + "\nPlecare: " + fmtLong(checkOut) +
        " (" + nightsLabel(n) + ")\nPersoane: " + guests + "\n\nEste disponibilă? Vă mulțumesc!";
    var url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
    if (bookFallbackLink) bookFallbackLink.href = url;
    track("booking_request", { guests: guests, nights: n, lang: LANG });
    // No "noopener" feature string: with it window.open always returns null, which made
    // every request look blocked. Cut the opener link by hand instead.
    var win = window.open(url, "_blank");
    if (win) { try { win.opener = null; } catch (err) {} }
    else if (bookFallback) bookFallback.hidden = false;   // popup blocked: keep the request one tap away
  }

  sendBtn.addEventListener("click", sendRequest);
  setGuests(MIN_GUESTS);
  showMonthOf(today0());

  /* -- Init ---------------------------------------------------------------------- */
  applyLang();
  renderCal();

})();
