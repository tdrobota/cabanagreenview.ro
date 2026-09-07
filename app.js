/* =====================================================================
   Green View Rarau - interactions (v17)
   Alpine Dusk redesign
   ===================================================================== */
(function () {
  "use strict";

  /* -- i18n ---------------------------------------------------------------------- */
  var LANG = "ro";
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
      hero_title:      "Unde pădurea<br><em>te îmbrățișează</em>",
      hero_sub:        "O cabană A-Frame ascunsă între brazi, la poalele muntelui Rarău",
      hero_cta:        "Verifică disponibilitatea",
      lab_about:       "01 · Cabana",
      about_title:     "O casă în inima pădurii",
      about_p1:        "Green View Rarău este o cabană A-Frame modernă, construită cu materiale naturale și gândită pentru cei care vor să se deconecteze cu adevărat. La câțiva pași de pădure și la câteva minute de vârful Rarău.",
      about_h2:        "Design intenționat",
      about_p2:        "Forma triunghiulară iconică, fereastra panoramică de la mansardă și lemnul cald din interior creează o atmosferă unică, între minimalismul scandinav și rusticul montan românesc.",
      about_h3:        "Liniște garantată",
      about_p3:        "Fără vecini în câmp vizual, fără zgomot de fond urban. Doar vântul prin brazi, focul din șemineu și cerul înstelat deasupra ta.",
      lab_facilities:  "02 · Facilități",
      fac_title:       "Tot ce ai nevoie",
      fac_sub:         "Confort modern în mijlocul naturii sălbatice",
      lab_gallery:     "03 · Galerie",
      gal_title:       "Privește, explorează",
      gal_hint:        "Trage pentru a răsfoi · apasă pentru a mări",
      lab_seasons:     "04 · Anotimpuri",
      seasons_title:   "Frumos în orice anotimp",
      seasons_sub:     "Rarăul se transformă odată cu anotimpurile",
      lab_map:         "05 · Împrejurimi",
      map_title:       "Ce te așteaptă în jur",
      map_sub:         "Atracții naturale și culturale la câțiva kilometri distanță",
      map_legend:      "Cabana este punctul alb. Reperele din jur sunt marcate cu auriu.",
      map_phint:       "Distanțele sunt aproximative, pe șosea, din zona Pojorâta / Câmpulung Moldovenesc.",
      lab_reviews:     "06 · Recenzii",
      rev_title:       "Ce spun oaspeții",
      contact_p:       "Scrie-ne sau apasă butonul pentru a verifica disponibilitatea. Răspundem în maximum 2 ore.",
      contact_cta:     "Verifică disponibilitatea",
      footer_nav_label: "Secțiuni",
      footer_copy:     "Cabană A-Frame, Rarău, Bucovina",
      modal_title:     "Verifică disponibilitatea",
      modal_sub:       "Selectează datele dorite (minimum 2 nopți)",
      guest_label:     "Număr persoane",
      guest_hint:      "Minim 8, maxim 16 persoane",
      modal_note:      "Minim 2 nopți · confirmare în max. 2 ore",
      modal_send:      "Trimite cererea",
      modal_fallback:  "Dacă fereastra nu s-a deschis, trimite mesajul direct pe WhatsApp:"
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
      hero_title:      "Where the forest<br><em>embraces you</em>",
      hero_sub:        "An A-Frame cabin nestled among firs, at the foot of Rarău mountain",
      hero_cta:        "Check availability",
      lab_about:       "01 · Cabin",
      about_title:     "A home in the heart of the forest",
      about_p1:        "Green View Rarău is a modern A-Frame cabin, built with natural materials and designed for those who truly want to disconnect. Steps from the forest and minutes from Rarău peak.",
      about_h2:        "Intentional design",
      about_p2:        "The iconic triangular shape, the panoramic skylight, and warm wood inside create a unique atmosphere between Scandinavian minimalism and Romanian mountain rustic.",
      about_h3:        "Guaranteed silence",
      about_p3:        "No neighbours in sight, no urban background noise. Just the wind through the firs, the fireplace, and the starry sky above.",
      lab_facilities:  "02 · Amenities",
      fac_title:       "Everything you need",
      fac_sub:         "Modern comfort in the midst of wild nature",
      lab_gallery:     "03 · Gallery",
      gal_title:       "Look, explore",
      gal_hint:        "Drag to browse · tap to enlarge",
      lab_seasons:     "04 · Seasons",
      seasons_title:   "Beautiful in every season",
      seasons_sub:     "Rarău transforms with the seasons",
      lab_map:         "05 · Surroundings",
      map_title:       "What awaits nearby",
      map_sub:         "Natural and cultural attractions just a few kilometres away",
      map_legend:      "The cabin is the white marker. Nearby landmarks are marked in gold.",
      map_phint:       "Distances are approximate, by road, from the Pojorâta / Câmpulung Moldovenesc area.",
      lab_reviews:     "06 · Reviews",
      rev_title:       "What guests say",
      contact_p:       "Write to us or press the button to check availability. We reply within 2 hours.",
      contact_cta:     "Check availability",
      footer_nav_label: "Sections",
      footer_copy:     "A-Frame cabin, Rarău, Bucovina",
      modal_title:     "Check availability",
      modal_sub:       "Select your dates (minimum 2 nights)",
      guest_label:     "Number of guests",
      guest_hint:      "Minimum 8, maximum 16 guests",
      modal_note:      "Min. 2 nights · confirmation within 2 hours",
      modal_send:      "Send request",
      modal_fallback:  "If the window didn't open, send the message straight to WhatsApp:"
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
    try { localStorage.setItem(LANG_KEY, LANG); } catch (e) {}
    renderCal();
    updateMapLang();
  }

  // First visit: honour a stored choice, else the browser's language.
  try {
    var stored = localStorage.getItem(LANG_KEY);
    if (stored === "ro" || stored === "en") LANG = stored;
    else if ((navigator.language || "").toLowerCase().indexOf("ro") !== 0) LANG = "en";
  } catch (e) {}

  document.getElementById("langToggle").addEventListener("click", function() {
    LANG = LANG === "ro" ? "en" : "ro";
    applyLang();
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

  /* -- Scroll effects (one rAF-throttled handler for all three) ----------------------- */
  var progressBar = document.getElementById("scrollProgress");
  var nav = document.getElementById("nav");
  var heroImg = document.getElementById("heroImg");
  var scrollTicking = false;

  function onScrollFrame() {
    scrollTicking = false;
    var y = window.scrollY;
    var docH = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (docH > 0 ? (y / docH) * 100 : 0) + "%";
    nav.classList.toggle("scrolled", y > 60);
    if (!PREFERS_REDUCED && heroImg && y < window.innerHeight * 1.5) {
      heroImg.style.transform = "translateY(" + (y * 0.3) + "px)";
    }
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

  /* -- Magnetic buttons ---------------------------------------------------------------------- */
  function initMagnetic() {
    if (PREFERS_REDUCED) return;
    document.querySelectorAll(".mag").forEach(function(btn) {
      btn.addEventListener("mousemove", function(e) {
        var r = btn.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width  / 2);
        var dy = e.clientY - (r.top  + r.height / 2);
        btn.style.transform = "translate(" + dx * 0.25 + "px, " + dy * 0.25 + "px)";
      });
      btn.addEventListener("mouseleave", function() {
        btn.style.transform = "";
      });
    });
  }
  initMagnetic();

  /* -- Facilities ---------------------------------------------------------------------- */
  /* Facility cards are static HTML now (crawlable in both languages); applyLang()
     swaps the label via data-i18n-ro / data-i18n-en. Nothing to build here. */

  /* -- Gallery ---------------------------------------------------------------------- */
  var GALLERY = [
    { src: "images/p14.jpg", l: "Cabana iarna",          wide: true  },
    { src: "images/p34.jpg", l: "Seară de furtună",      wide: false },
    { src: "images/p49.jpg", l: "Noaptea în zăpadă",     wide: true  },
    { src: "images/p30.jpg", l: "Fațadă A-Frame",        wide: true  },
    { src: "images/p03.jpg", l: "Living A-Frame",        wide: true  },
    { src: "images/p47.jpg", l: "Vedere de sus",         wide: true  },
    { src: "images/p55.jpg", l: "Dormitor cu vedere",    wide: false },
    { src: "images/p05.jpg", l: "Fereastră triunghi",    wide: false },
    { src: "images/p12.jpg", l: "Zăpadă prin geam",      wide: false },
    { src: "images/p19.jpg", l: "Hamac cu panoramă",     wide: false },
    { src: "images/p39.jpg", l: "Cafea la munte",        wide: true  },
    { src: "images/p04.jpg", l: "Vederi prin luminator", wide: false },
    { src: "images/p23.jpg", l: "Bucătăria",             wide: true  },
    { src: "images/p44.jpg", l: "Foc în curte",          wide: false },
    { src: "images/p46.jpg", l: "Șemineu",               wide: false },
    { src: "images/p36.jpg", l: "Intrarea în domeniu",   wide: false }
  ];

  /* On touch devices the hint says "swipe" rather than "drag". */
  var isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  var galHintEl = document.querySelector('.gal-hint');
  if (isTouchDevice && galHintEl) {
    galHintEl.setAttribute('data-i18n-ro', 'Glisează pentru a răsfoi · apasă pentru a mări');
    galHintEl.setAttribute('data-i18n-en', 'Swipe to browse · tap to enlarge');
  }

  function stem(src) { return src.replace(/\.jpg$/, ""); }

  var gStrip = document.getElementById("gStrip");
  GALLERY.concat(GALLERY).forEach(function(g, i) {
    var shot = document.createElement("div");
    shot.className = "g-shot " + (g.wide ? "wide" : "tall");
    var realIndex = i % GALLERY.length;
    shot.setAttribute("data-index", realIndex);

    var pic = document.createElement("picture");
    var source = document.createElement("source");
    source.type = "image/webp";
    source.srcset = stem(g.src) + "-640.webp 640w, " + stem(g.src) + ".webp 1100w";
    source.sizes = g.wide ? "(max-width: 480px) 78vw, 50vw" : "(max-width: 480px) 50vw, 28vw";
    var img = document.createElement("img");
    img.src = g.src;
    img.alt = g.l;
    img.loading = "lazy";
    img.decoding = "async";
    pic.appendChild(source);
    pic.appendChild(img);

    var cap = document.createElement("div");
    cap.className = "g-shot-caption";
    cap.textContent = g.l;
    shot.appendChild(pic);
    shot.appendChild(cap);
    shot.addEventListener("click", function() { openLightbox(realIndex); });
    gStrip.appendChild(shot);
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
      try { gStripWrap.setPointerCapture(pointerId); } catch (err) {}
    });
    gStripWrap.addEventListener('pointermove', function (e) {
      if (!dragging || e.pointerId !== pointerId) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 5) {
        moved = true;
        gStripWrap.classList.add('is-dragging');
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
  function openPanel(i) {
    var item = poiItems[i];
    if (!item) return;
    activePoi = i;
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
  }
  function contours() {
    var rings = ["m -60 0 a 60 50 0 1 0 120 0 a 60 50 0 1 0 -120 0","m -120 0 a 120 95 0 1 0 240 0 a 120 95 0 1 0 -240 0","m -190 0 a 190 150 0 1 0 380 0 a 190 150 0 1 0 -380 0","m -270 0 a 270 210 0 1 0 540 0 a 270 210 0 1 0 -540 0"];
    return rings.map(function(d,i){ return '<path d="M500 392 '+d+'" fill="none" stroke="#6d5f3f" stroke-width="1" opacity="'+(0.45-i*0.07)+'"/>'; }).join("");
  }
  function trees() {
    var s="", seed=7;
    function rnd(){ seed=(seed*9301+49297)%233280; return seed/233280; }
    for(var i=0;i<92;i++){ var x=rnd()*1000,y=rnd()*700; if(Math.hypot(x-500,y-392)<92) continue; var op=(0.10+rnd()*0.16).toFixed(2); s+='<path d="M'+x.toFixed(0)+' '+y.toFixed(0)+' l-3 6 h6 z" fill="#5A6A4A" opacity="'+op+'"/>'; }
    return s;
  }
  function buildMap() {
    var c = document.getElementById("mapCanvas");
    if (!c || !poiItems.length) return;
    c.innerHTML = '<svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><radialGradient id="mg" cx="50%" cy="46%" r="72%"><stop offset="0%" stop-color="#243415"/><stop offset="62%" stop-color="#141E0A"/><stop offset="100%" stop-color="#0d1307"/></radialGradient></defs><rect width="1000" height="700" fill="url(#mg)"/>' + contours() + '<path d="M-20 470 C 180 430, 300 520, 460 470 S 760 400, 1020 450" fill="none" stroke="#4a6741" stroke-width="5" opacity="0.42"/><path d="M120 700 C 260 560, 360 560, 500 392 S 760 240, 900 90" fill="none" stroke="#B07828" stroke-width="2.2" stroke-dasharray="2 7" opacity="0.62" stroke-linecap="round"/><path d="M0 560 C 250 540, 420 470, 500 392" fill="none" stroke="#B07828" stroke-width="1.8" stroke-dasharray="2 7" opacity="0.36" stroke-linecap="round"/>' + trees() + '</svg>';
    poiItems.forEach(function (item, i) {
      var el = document.createElement("button");
      el.type = "button";
      el.className = "poi" + (item.hasAttribute("data-home") ? " home" : "");
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
    openPanel(activePoi);
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
      revTrack.appendChild(card.cloneNode(true));
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

  /* -- Focus trap (shared by modal + lightbox) ---------------------------------------------------------------------- */
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
      if (e.key === "Escape") { e.preventDefault(); release(); if (opts.onEscape) opts.onEscape(); return; }
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

    function release() {
      document.removeEventListener("keydown", onKey, true);
      if (restoreTo && restoreTo.focus) restoreTo.focus();
    }
    return release;
  }

  /* -- Modal ---------------------------------------------------------------------- */
  var scrimEl = document.getElementById("scrim");
  var modalError = document.getElementById("modalError");
  var modalFallback = document.getElementById("modalFallback");
  var modalReleaseFocus = null;
  var modalOpen = false;

  function clearModalMessages() {
    if (modalError) { modalError.hidden = true; modalError.textContent = ""; }
    if (modalFallback) modalFallback.hidden = true;
  }

  function openModal() {
    if (modalOpen) return;
    modalOpen = true;
    clearModalMessages();
    scrimEl.style.display = "flex";
    scrimEl.setAttribute("aria-hidden", "false");
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { scrimEl.style.opacity = "1"; });
    });
    modalReleaseFocus = trapFocus(scrimEl.querySelector(".modal"), { onEscape: closeModal });
    track("modal_open");
  }

  function closeModal() {
    if (!modalOpen) return;
    modalOpen = false;
    scrimEl.style.opacity = "0";
    scrimEl.setAttribute("aria-hidden", "true");
    setTimeout(function () { scrimEl.style.display = "none"; }, 300);
    if (modalReleaseFocus) { modalReleaseFocus(); modalReleaseFocus = null; }
  }

  document.querySelectorAll("[data-modal-open]").forEach(function (btn) {
    btn.addEventListener("click", openModal);
  });
  document.querySelectorAll("[data-modal-close]").forEach(function (btn) {
    btn.addEventListener("click", closeModal);
  });
  scrimEl.addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });

  /* -- Calendar ---------------------------------------------------------------------- */
  var calYear  = new Date().getFullYear();
  var calMonth = new Date().getMonth();
  var checkIn  = null;
  var checkOut = null;
  var MS       = 86400000;
  var guests   = 8;

  var MONTHS_RO = ["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"];
  var MONTHS_EN = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var DAYS_RO   = ["Lu","Ma","Mi","Jo","Vi","Sa","Du"];
  var DAYS_EN   = ["Mo","Tu","We","Th","Fr","Sa","Su"];

  function renderCal() {
    var grid  = document.getElementById("calGrid");
    var label = document.getElementById("calMonthLabel");
    if (!grid) return;
    grid.innerHTML = "";
    label.textContent = (LANG === "en" ? MONTHS_EN : MONTHS_RO)[calMonth] + " " + calYear;
    var days = LANG === "en" ? DAYS_EN : DAYS_RO;
    days.forEach(function(d) {
      var span = document.createElement("span");
      span.className = "day-label";
      span.textContent = d;
      grid.appendChild(span);
    });
    var first = new Date(calYear, calMonth, 1).getDay();
    var offset = (first + 6) % 7;
    for (var i = 0; i < offset; i++) {
      var empty = document.createElement("div");
      empty.className = "cal-day empty";
      grid.appendChild(empty);
    }
    var daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    var today = new Date(); today.setHours(0, 0, 0, 0);
    for (var d = 1; d <= daysInMonth; d++) {
      var dt = new Date(calYear, calMonth, d);
      var btn = document.createElement("button");
      btn.className = "cal-day";
      btn.textContent = d;
      if (dt < today) btn.classList.add("past");
      if (checkIn  && dt.getTime() === checkIn.getTime())  btn.classList.add("selected-in");
      if (checkOut && dt.getTime() === checkOut.getTime()) btn.classList.add("selected-out");
      if (checkIn && checkOut && dt > checkIn && dt < checkOut) btn.classList.add("in-range");
      (function(date) {
        btn.addEventListener("click", function() { pickDay(date); });
      }(dt));
      grid.appendChild(btn);
    }
    updateDateDisplay();
  }

  function pickDay(dt) {
    var today = new Date(); today.setHours(0, 0, 0, 0);
    if (dt < today) return;
    if (!checkIn || (checkIn && checkOut)) {
      checkIn = dt; checkOut = null;
    } else if (dt.getTime() === checkIn.getTime()) {
      checkIn = null;
    } else if (dt < checkIn) {
      checkIn = dt; checkOut = null;
    } else if (dt.getTime() - checkIn.getTime() >= 2 * MS) {
      checkOut = dt;
    } else {
      checkIn = dt; checkOut = null;
    }
    if (typeof clearModalMessages === "function") clearModalMessages();
    renderCal();
  }

  function updateDateDisplay() {
    var el = document.getElementById("dateDisplay");
    if (!el) return;
    if (checkIn && checkOut) {
      var nights = Math.round((checkOut - checkIn) / MS);
      el.textContent = fmt(checkIn) + " – " + fmt(checkOut) + " (" + nights + (LANG === "en" ? " nights" : " nopți") + ")";
    } else if (checkIn) {
      el.textContent = fmt(checkIn) + (LANG === "en" ? " – select check-out" : " – selectează check-out");
    } else {
      el.textContent = "";
    }
  }

  function fmt(d) {
    return d.getDate() + " " + (LANG === "en" ? MONTHS_EN : MONTHS_RO)[d.getMonth()].slice(0, 3) + " " + d.getFullYear();
  }

  function setGuests(value) {
    guests = Math.max(8, Math.min(16, parseInt(value, 10) || 8));
    var input = document.getElementById("guestCount");
    if (input) input.value = guests;
  }

  document.getElementById("calPrev").addEventListener("click", function() {
    calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; } renderCal();
  });
  document.getElementById("calNext").addEventListener("click", function() {
    calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; } renderCal();
  });
  document.getElementById("guestMinus").addEventListener("click", function() {
    setGuests(guests - 1);
  });
  document.getElementById("guestPlus").addEventListener("click", function() {
    setGuests(guests + 1);
  });
  document.getElementById("guestCount").addEventListener("change", function(e) {
    setGuests(e.target.value);
  });

  /* -- Send request via WhatsApp ---------------------------------------------------------------------- */
  var WA_NUMBER = "40756651582";
  var modalFallbackLink = document.getElementById("modalFallbackLink");

  function showModalError(msg) {
    if (!modalError) return;
    modalError.textContent = msg;
    modalError.hidden = false;
  }

  function sendRequest() {
    clearModalMessages();
    if (!checkIn || !checkOut) {
      showModalError(LANG === "en"
        ? "Please pick check-in and check-out dates (minimum 2 nights)."
        : "Alege datele de check-in și check-out (minimum 2 nopți).");
      return;
    }
    var msg = LANG === "en"
      ? "Hello! I would like to book the Green View Rarău cabin.\n\nCheck-in: " + fmt(checkIn) + "\nCheck-out: " + fmt(checkOut) + "\nGuests: " + guests + "\n\nThank you!"
      : "Bună ziua! Aș dori să rezerv cabana Green View Rarău.\n\nCheck-in: " + fmt(checkIn) + "\nCheck-out: " + fmt(checkOut) + "\nPersoane: " + guests + "\n\nVă mulțumesc!";
    var url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);

    if (modalFallbackLink) modalFallbackLink.href = url;
    track("booking_request", { guests: guests, lang: LANG });
    var win = window.open(url, "_blank", "noopener");
    if (!win || win.closed || typeof win.closed === "undefined") {
      // Popup blocked - surface the link so the request isn't lost.
      if (modalFallback) modalFallback.hidden = false;
    }
  }

  document.getElementById("sendBtn").addEventListener("click", sendRequest);

  /* -- Init ---------------------------------------------------------------------- */
  applyLang();
  renderCal();

})();
