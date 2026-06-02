/* =====================================================================
   Green View RarÄƒu â€” interactions (v17)
   Alpine Dusk redesign
   ===================================================================== */
(function () {
  "use strict";

  /* â”€â”€ i18n â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  var LANG = "ro";
  var T = {
    ro: {
      nav_about:       "Cabana",
      nav_facilities:  "Facilitati",
      nav_gallery:     "Galerie",
      nav_seasons:     "Anotimpuri",
      nav_map:         "Imprejurimi",
      nav_reviews:     "Recenzii",
      nav_contact:     "Rezervare",
      bar_tagline:     "Cabana A-Frame - Rarau, Bucovina",
      bar_cta:         "Rezerva acum",
      hero_eyebrow:    "Rarau - Bucovina",
      hero_title:      "Unde padurea<br><em>te imbratiseaza</em>",
      hero_sub:        "O cabana A-Frame ascunsa intre brazi, la poalele muntelui Rarau",
      hero_cta:        "Verifica disponibilitatea",
      lab_about:       "01 - Cabana",
      about_title:     "O casa in inima padurii",
      about_p1:        "Green View Rarau este o cabana A-Frame moderna, construita cu materiale naturale si gandita pentru cei care vor sa se deconecteze cu adevarat. La cativa pasi de padure si la cateva minute de varful Rarau.",
      about_h2:        "Design intentionat",
      about_p2:        "Forma triunghiulara iconica, fereastra panoramica de la mansarda si lemnul cald din interior creeaza o atmosfera unica, intre minimalism scandinav si rusticul montan romanesc.",
      about_h3:        "Liniste garantata",
      about_p3:        "Fara vecini in camp vizual, fara zgomot de fond urban. Doar vantul prin brazi, focul din semineu si cerul instelat deasupra ta.",
      lab_facilities:  "02 - Facilitati",
      fac_title:       "Tot ce ai nevoie",
      fac_sub:         "Confort modern in mijlocul naturii salbatice",
      lab_gallery:     "03 - Galerie",
      gal_title:       "Priveste, exploreaza",
      gal_hint:        "Trage pentru a rasfoi - Apasa pentru a mari",
      lab_seasons:     "04 - Anotimpuri",
      seasons_title:   "Frumos in orice anotimp",
      seasons_sub:     "Raraul se transforma odata cu anotimpurile",
      season_spring:   "Primavara",
      season_summer:   "Vara",
      season_autumn:   "Toamna",
      season_winter:   "Iarna",
      season_spring_desc: "Zapezile se topesc, brandusele apar printre pini, iar aerul miroase a rasina proaspata. Cel mai bun moment pentru drumetii lungi.",
      season_summer_desc: "Zilele lungi si verdeata exploziva fac din Rarau un paradis verde. Hamacul, cafeaua si linistea completa.",
      season_autumn_desc: "Padurile se aprind in rosu si auriu. Ceata diminetii atarna intre varfuri, iar serile la semineu capata un farmec aparte.",
      season_winter_desc: "Zapada inmoaie orice zgomot. Cabana straluceste in alb, iar focul din interior e tot ce ai nevoie.",
      lab_map:         "05 - Imprejurimi",
      map_title:       "Ce te asteapta in jur",
      map_sub:         "Atractii naturale si culturale la cativa kilometri distanta",
      map_legend:      "Cabana este punctul alb. Reperele din jur sunt marcate cu auriu.",
      map_phint:       "Distantele sunt aproximative, pe sosea, din zona Pojorata / Campulung Moldovenesc.",
      lab_reviews:     "06 - Recenzii",
      rev_title:       "Ce spun oaspetii",
      lab_contact:     "07 - Rezervare",
      contact_title:   "Planifica escapada ta",
      contact_p:       "Scrie-ne sau apasa butonul pentru a verifica disponibilitatea. Raspundem in maximum 2 ore.",
      contact_cta:     "Verifica disponibilitatea",
      footer_copy:     "2025 - Cabana A-Frame, Rarau, Bucovina",
      modal_title:     "Verifica disponibilitatea",
      modal_sub:       "Selecteaza datele dorite (minimum 2 nopti)",
      guest_label:     "Numar persoane",
      guest_hint:      "Minim 8, maxim 16 persoane",
      modal_note:      "Minim 2 nopti - Confirmare in max. 2 ore",
      modal_send:      "Trimite cererea"
    },
    en: {
      nav_about:       "Cabin",
      nav_facilities:  "Amenities",
      nav_gallery:     "Gallery",
      nav_seasons:     "Seasons",
      nav_map:         "Surroundings",
      nav_reviews:     "Reviews",
      nav_contact:     "Book",
      bar_tagline:     "A-Frame Cabin - Rarau, Bucovina",
      bar_cta:         "Book now",
      hero_eyebrow:    "Rarau - Bucovina",
      hero_title:      "Where the forest<br><em>embraces you</em>",
      hero_sub:        "An A-Frame cabin nestled among firs, at the foot of Rarau mountain",
      hero_cta:        "Check availability",
      lab_about:       "01 - Cabin",
      about_title:     "A home in the heart of the forest",
      about_p1:        "Green View Rarau is a modern A-Frame cabin, built with natural materials and designed for those who truly want to disconnect. Steps from the forest and minutes from Rarau peak.",
      about_h2:        "Intentional design",
      about_p2:        "The iconic triangular shape, the panoramic skylight, and warm wood inside create a unique atmosphere between Scandinavian minimalism and Romanian mountain rustic.",
      about_h3:        "Guaranteed silence",
      about_p3:        "No neighbours in sight, no urban background noise. Just the wind through the firs, the fireplace, and the starry sky above.",
      lab_facilities:  "02 - Amenities",
      fac_title:       "Everything you need",
      fac_sub:         "Modern comfort in the midst of wild nature",
      lab_gallery:     "03 - Gallery",
      gal_title:       "Look, explore",
      gal_hint:        "Drag to browse - Tap to enlarge",
      lab_seasons:     "04 - Seasons",
      seasons_title:   "Beautiful in every season",
      seasons_sub:     "Rarau transforms with the seasons",
      season_spring:   "Spring",
      season_summer:   "Summer",
      season_autumn:   "Autumn",
      season_winter:   "Winter",
      season_spring_desc: "Snow melts, crocuses appear among the pines, and the air smells of fresh resin. The best time for long hikes.",
      season_summer_desc: "Long days and explosive greenery make Rarau a green paradise. Hammock, coffee, and complete silence.",
      season_autumn_desc: "Forests ignite in red and gold. Morning mist hangs between peaks, and evenings by the fireplace have a special charm.",
      season_winter_desc: "Snow muffles every sound. The cabin glows white, and the fire inside is all you need.",
      lab_map:         "05 - Surroundings",
      map_title:       "What awaits nearby",
      map_sub:         "Natural and cultural attractions just a few kilometres away",
      map_legend:      "The cabin is the white marker. Nearby landmarks are marked in gold.",
      map_phint:       "Distances are approximate, by road, from the Pojorata / Campulung Moldovenesc area.",
      lab_reviews:     "06 - Reviews",
      rev_title:       "What guests say",
      lab_contact:     "07 - Book",
      contact_title:   "Plan your getaway",
      contact_p:       "Write to us or press the button to check availability. We reply within 2 hours.",
      contact_cta:     "Check availability",
      footer_copy:     "2025 - A-Frame Cabin, Rarau, Bucovina",
      modal_title:     "Check availability",
      modal_sub:       "Select your dates (minimum 2 nights)",
      guest_label:     "Number of guests",
      guest_hint:      "Minimum 8, maximum 16 guests",
      modal_note:      "Min. 2 nights - Confirmation within 2 hours",
      modal_send:      "Send request"
    }
  };

  function t(k) { return (T[LANG] && T[LANG][k]) || (T.ro[k]) || k; }

  function applyLang() {
    document.querySelectorAll("[data-i18n]").forEach(function(el) {
      var k = el.getAttribute("data-i18n");
      // If this element has touch-specific overrides, use those instead
      var touchKey = LANG === 'en' ? 'data-i18n-en' : 'data-i18n-ro';
      if (el.hasAttribute(touchKey)) {
        el.textContent = el.getAttribute(touchKey);
        return;
      }
      var val = t(k);
      if (k === "hero_title") { el.innerHTML = val; }
      else { el.textContent = val; }
    });
    document.getElementById("langToggle").textContent = LANG === "ro" ? "EN" : "RO";
    document.documentElement.lang = LANG;
    renderCal();
    updateFacLang();
    updateMapLang();
    renderReviews();
  }

  document.getElementById("langToggle").addEventListener("click", function() {
    LANG = LANG === "ro" ? "en" : "ro";
    applyLang();
  });

  /* â”€â”€ Scroll progress bar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  var progressBar = document.getElementById("scrollProgress");
  function updateProgress() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var pct = h > 0 ? (window.scrollY / h) * 100 : 0;
    progressBar.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });

  /* â”€â”€ Nav scrolled state â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  var nav = document.getElementById("nav");
  window.addEventListener("scroll", function() {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  }, { passive: true });

  /* â”€â”€ Burger menu â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  var burger = document.getElementById("navBurger");
  var navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", function() {
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach(function(a) {
    a.addEventListener("click", function() { navLinks.classList.remove("open"); });
  });

  /* â”€â”€ Sticky bar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  var stickyBar = document.getElementById("stickyBar");
  var heroEl = document.getElementById("hero");
  var stickyObserver = new IntersectionObserver(function(entries) {
    stickyBar.classList.toggle("show", !entries[0].isIntersecting);
  }, { threshold: 0 });
  stickyObserver.observe(heroEl);

  /* â”€â”€ Hero parallax â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  var heroImg = document.getElementById("heroImg");
  window.addEventListener("scroll", function() {
    if (window.scrollY < window.innerHeight * 1.5) {
      heroImg.style.transform = "translateY(" + (window.scrollY * 0.3) + "px)";
    }
  }, { passive: true });

  /* â”€â”€ Magnetic buttons â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  function initMagnetic() {
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

  /* â”€â”€ Facilities â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  var ICONS = {
    bed:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v6"/><path d="M14 8h5a2 2 0 0 1 2 2v8"/><path d="M3 18v-7h18v7"/><path d="M3 21v-3m18 3v-3"/></svg>',
    fire:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5Z"/></svg>',
    bath:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/><path d="M7 12V6a2 2 0 0 1 4 0"/><path d="M9 3v.5"/></svg>',
    kitchen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11h16l-1.2 9a1 1 0 0 1-1 .9H6.2a1 1 0 0 1-1-.9L4 11Z"/><path d="M12 11V7a3 3 0 0 1 6 0"/></svg>',
    wifi:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5a11 11 0 0 1 14 0"/><path d="M1.5 9a16 16 0 0 1 21 0"/><path d="M8.5 16a6 6 0 0 1 7 0"/><path d="M12 20h.01"/></svg>',
    deck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>',
    wood:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17h12a4 4 0 0 0 0-8H4a4 4 0 0 0 0 8Z"/><circle cx="6" cy="13" r="2"/><path d="M16 9c-2 2-2 4 0 8"/></svg>',
    car:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17h14l-1.4-5.2A2.5 2.5 0 0 0 15.2 10H8.8a2.5 2.5 0 0 0-2.4 1.8L5 17Z"/><circle cx="7" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/><path d="M5 14h14"/></svg>',
    coffee:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z"/><path d="M16 10h1a3 3 0 0 1 0 6h-1"/><path d="M6 2v2m4-2v2m4-2v2"/></svg>',
    hammock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5v17M20 5v17"/><path d="M4 9c4 5 12 5 16 0"/><path d="M7 12c3 2 7 2 10 0"/></svg>',
    trees:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21v-4"/><path d="M3 17h8L7 3 3 17Z"/><path d="M17 21v-5"/><path d="M12 16h10L17 4l-5 12Z"/></svg>',
    heat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15c0-2 2-2 2-4s-2-2-2-4"/><path d="M12 15c0-2 2-2 2-4s-2-2-2-4"/><path d="M18 15c0-2 2-2 2-4s-2-2-2-4"/><path d="M4 20h18"/></svg>'
  };
  var FACILITIES = [
    { icon: ICONS.bed,     ro: "2 dormitoare confortabile", en: "2 comfortable bedrooms" },
    { icon: ICONS.fire,    ro: "Semineu din piatra",        en: "Stone fireplace" },
    { icon: ICONS.bath,    ro: "Baie cu cada",              en: "Bathroom with bathtub" },
    { icon: ICONS.kitchen, ro: "Bucatarie complet utilata", en: "Fully equipped kitchen" },
    { icon: ICONS.wifi,    ro: "Wi-Fi rapid",               en: "High-speed Wi-Fi" },
    { icon: ICONS.deck,    ro: "Terasa panoramica",         en: "Panoramic terrace" },
    { icon: ICONS.wood,    ro: "Lemne de foc incluse",      en: "Firewood included" },
    { icon: ICONS.car,     ro: "Parcare privata",           en: "Private parking" },
    { icon: ICONS.coffee,  ro: "Espressor & ceaiuri",       en: "Espresso machine & teas" },
    { icon: ICONS.hammock, ro: "Hamac in gradina",          en: "Garden hammock" },
    { icon: ICONS.trees,   ro: "Acces direct la padure",    en: "Direct forest access" },
    { icon: ICONS.heat,    ro: "Centrala termica",          en: "Central heating" }
  ];

  var facGrid = document.getElementById("facGrid");
  FACILITIES.forEach(function(f) {
    var card = document.createElement("div");
    card.className = "fac-card";
    card.innerHTML = '<div class="fac-icon">' + f.icon + '</div>'
      + '<div class="fac-label" data-fac-ro="' + f.ro + '" data-fac-en="' + f.en + '">' + f.ro + '</div>';
    facGrid.appendChild(card);
  });

  function updateFacLang() {
    document.querySelectorAll("[data-fac-ro]").forEach(function(el) {
      el.textContent = LANG === "en" ? el.getAttribute("data-fac-en") : el.getAttribute("data-fac-ro");
    });
  }

  /* â”€â”€ Gallery â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  var GALLERY = [
    { src: "images/p14.jpg", l: "Cabana iarna",          wide: true  },
    { src: "images/p34.jpg", l: "Seara de furtuna",      wide: false },
    { src: "images/p49.jpg", l: "Noaptea in zapada",     wide: true  },
    { src: "images/p30.jpg", l: "Fatada A-Frame",        wide: true  },
    { src: "images/p03.jpg", l: "Living A-Frame",        wide: true  },
    { src: "images/p47.jpg", l: "Vedere de sus",         wide: true  },
    { src: "images/p55.jpg", l: "Dormitor cu vedere",    wide: false },
    { src: "images/p05.jpg", l: "Fereastra triunghi",    wide: false },
    { src: "images/p12.jpg", l: "Zapada prin geam",      wide: false },
    { src: "images/p19.jpg", l: "Hamac cu panorama",     wide: false },
    { src: "images/p39.jpg", l: "Cafea la munte",        wide: true  },
    { src: "images/p04.jpg", l: "Vederi prin luminator", wide: false },
    { src: "images/p23.jpg", l: "Bucataria",             wide: true  },
    { src: "images/p44.jpg", l: "Foc in curte",          wide: false },
    { src: "images/p46.jpg", l: "Semineu",               wide: false },
    { src: "images/p36.jpg", l: "Intrarea in domeniu",   wide: false }
  ];

  /* Update gallery hint for touch devices */
  var isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  var galHintEl = document.querySelector('.gal-hint');
  if (isTouchDevice && galHintEl) {
    if (LANG === 'ro') galHintEl.textContent = 'Gliseaza pentru a rasfoi - Apasa pentru a mari';
    else galHintEl.textContent = 'Swipe to browse - Tap to enlarge';
    // Re-read the i18n key override on lang switch by storing new values
    galHintEl.setAttribute('data-i18n-ro', 'Gliseaza pentru a rasfoi - Apasa pentru a mari');
    galHintEl.setAttribute('data-i18n-en', 'Swipe to browse - Tap to enlarge');
  }

  var gStrip = document.getElementById("gStrip");
  GALLERY.concat(GALLERY).forEach(function(g, i) {
    var shot = document.createElement("div");
    shot.className = "g-shot " + (g.wide ? "wide" : "tall");
    var realIndex = i % GALLERY.length;
    shot.setAttribute("data-index", realIndex);
    shot.innerHTML = '<img src="' + g.src + '" alt="' + g.l + '" loading="lazy">'
      + '<div class="g-shot-caption">' + g.l + '</div>';
    shot.addEventListener("click", function() { openLightbox(realIndex); });
    gStrip.appendChild(shot);
  });

  /* Touch pause for gallery */
  var gStripWrap = document.querySelector('.g-strip-wrap');
  if (gStripWrap) {
    gStripWrap.addEventListener('touchstart', function() {
      gStrip.style.animationPlayState = 'paused';
    }, { passive: true });
    gStripWrap.addEventListener('touchend', function() {
      setTimeout(function() { gStrip.style.animationPlayState = 'running'; }, 1200);
    }, { passive: true });
  }

  /* â”€â”€ Seasons tabs â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  document.querySelectorAll(".stab").forEach(function(tab) {
    tab.addEventListener("click", function() {
      var season = tab.getAttribute("data-season");
      document.querySelectorAll(".stab").forEach(function(t) {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      document.querySelectorAll(".spanel").forEach(function(p) { p.classList.remove("active"); });
      var panel = document.getElementById("sp-" + season);
      if (panel) panel.classList.add("active");
    });
  });

  /* Branded local map */
  var POI_IMAGES = {
    pietrele: "https://commons.wikimedia.org/wiki/Special:FilePath/RO%20SV%20Pietrele%20Doamnei%20%282%29.JPG?width=1200",
    transrarau: "https://commons.wikimedia.org/wiki/Special:FilePath/Rar%C4%83u%20-%20panoramio%20%281%29.jpg?width=1200",
    cheile: "https://www.campulungmoldovenesc.ro/files/actualitateImagini/obiective-cheile-moara-dracului-01.jpg",
    museum: "https://commons.wikimedia.org/wiki/Special:FilePath/Muzeul%20Arta%20Lemnului%20C%C3%A2mpulung%20Moldovenesc%202022.jpg?width=1200",
    ski: "https://campulungmoldovenesc.ro/files/actualitateImagini/obiective-partia-de-ski-rarau-01.jpg",
    mocanita: "https://commons.wikimedia.org/wiki/Special:FilePath/Mocanita%20Hutulca%20-%20Moldovita%20-%20panoramio.jpg?width=1200"
  };
  var POIS = [
    {home:true,x:50,y:56,src:"images/p24.jpg",cat:{ro:"Cazarea ta",en:"Your stay"},name:{ro:"Green View Rarau",en:"Green View Rarau"},dist:{ro:"Esti aici",en:"You are here"},desc:{ro:"Cabana A-Frame cu fatada de sticla, punctul de plecare pentru toate traseele din zona.",en:"The glass-fronted A-Frame cabin, your starting point for every trail nearby."}},
    {x:64,y:30,src:POI_IMAGES.pietrele,cat:{ro:"Reper natural",en:"Landmark"},name:{ro:"Pietrele Doamnei",en:"Pietrele Doamnei"},dist:{ro:"~ 9 km - 25 min",en:"~ 9 km - 25 min"},desc:{ro:"Stancile emblematice ale masivului Rarau, cu trasee scurte si panorame largi peste Bucovina.",en:"The emblematic rock towers of the Rarau massif, with short trails and wide Bucovina views."}},
    {x:75,y:38,src:POI_IMAGES.transrarau,cat:{ro:"Drum panoramic",en:"Scenic road"},name:{ro:"Transrarau",en:"Transrarau Road"},dist:{ro:"~ 12 km - 30 min",en:"~ 12 km - 30 min"},desc:{ro:"Una dintre cele mai spectaculoase urcari din Bucovina, potrivita pentru belvederi si plimbari foto.",en:"One of Bucovina's most scenic mountain drives, ideal for viewpoints and photo stops."}},
    {x:58,y:50,src:POI_IMAGES.cheile,cat:{ro:"Chei",en:"Gorge"},name:{ro:"Cheile Moara Dracului",en:"Moara Dracului Gorge"},dist:{ro:"~ 18 km - 35 min",en:"~ 18 km - 35 min"},desc:{ro:"Rezervatie geologica scurta si spectaculoasa, cu pereti verticali si poteca racoroasa.",en:"A short, dramatic geological reserve with vertical walls and a cool forest trail."}},
    {x:34,y:36,src:"images/p40.jpg",cat:{ro:"UNESCO",en:"UNESCO"},name:{ro:"Codrul Secular Slatioara",en:"Slatioara Old-Growth Forest"},dist:{ro:"~ 22 km - 45 min",en:"~ 22 km - 45 min"},desc:{ro:"Padure seculara inclusa in patrimoniul UNESCO, cunoscuta pentru arbori multiseculari si ecosisteme rare.",en:"A UNESCO-listed old-growth forest known for ancient trees and rare mountain ecosystems."}},
    {x:32,y:78,src:POI_IMAGES.museum,cat:{ro:"Muzeu",en:"Museum"},name:{ro:"Muzeul Arta Lemnului",en:"Wood Art Museum"},dist:{ro:"~ 18 km - 25 min",en:"~ 18 km - 25 min"},desc:{ro:"Muzeu unic in Romania, dedicat civilizatiei lemnului si mestesugurilor din zona Campulungului.",en:"A museum dedicated to wood culture and traditional craft from the Campulung area."}},
    {x:80,y:70,src:POI_IMAGES.ski,cat:{ro:"Iarna",en:"Winter"},name:{ro:"Partia Rarau",en:"Rarau Ski Slope"},dist:{ro:"~ 12 km - 28 min",en:"~ 12 km - 28 min"},desc:{ro:"Partie usoara spre medie, cu traseu lung prin zona impadurita de pe versantul nordic al Raraului.",en:"An easy-to-medium slope running through the forested northern side of Rarau."}},
    {x:23,y:72,src:"images/p56.jpg",cat:{ro:"Sat",en:"Village"},name:{ro:"Pojorata",en:"Pojorata"},dist:{ro:"~ 6 km - 12 min",en:"~ 6 km - 12 min"},desc:{ro:"Satul cel mai apropiat, bun pentru provizii rapide si acces spre traseele locale.",en:"The nearest village, useful for quick supplies and access to local trails."}},
    {x:86,y:26,src:POI_IMAGES.mocanita,cat:{ro:"Experienta",en:"Experience"},name:{ro:"Mocanita Moldovita",en:"Moldovita Narrow-Gauge Train"},dist:{ro:"~ 42 km - 60 min",en:"~ 42 km - 60 min"},desc:{ro:"Tren turistic cu ecartament ingust, o iesire buna de jumatate de zi prin peisaje bucovinene.",en:"A narrow-gauge tourist train, ideal for a half-day outing through Bucovina scenery."}}
  ];

  var activePoi = null;
  function renderPoiList() {
    var list = document.getElementById("poiList");
    if (!list) return;
    list.innerHTML = "";
    POIS.forEach(function(p, i) {
      var item = document.createElement("button");
      item.type = "button";
      item.className = "poi-item" + (i === activePoi ? " active" : "");
      item.setAttribute("data-i", i);
      item.innerHTML = '<span class="poi-item-cat">' + p.cat[LANG] + '</span>'
        + '<strong>' + p.name[LANG] + '</strong>'
        + '<span>' + p.dist[LANG] + '</span>';
      item.addEventListener("click", function() { openPanel(i); });
      list.appendChild(item);
    });
  }
  function buildMap() {
    var c = document.getElementById("mapCanvas");
    if (!c) return;
    c.innerHTML = '<svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice"><defs><radialGradient id="mg" cx="50%" cy="46%" r="72%"><stop offset="0%" stop-color="#243415"/><stop offset="62%" stop-color="#141E0A"/><stop offset="100%" stop-color="#0d1307"/></radialGradient></defs><rect width="1000" height="700" fill="url(#mg)"/>' + contours() + '<path d="M-20 470 C 180 430, 300 520, 460 470 S 760 400, 1020 450" fill="none" stroke="#4a6741" stroke-width="5" opacity="0.42"/><path d="M120 700 C 260 560, 360 560, 500 392 S 760 240, 900 90" fill="none" stroke="#B07828" stroke-width="2.2" stroke-dasharray="2 7" opacity="0.62" stroke-linecap="round"/><path d="M0 560 C 250 540, 420 470, 500 392" fill="none" stroke="#B07828" stroke-width="1.8" stroke-dasharray="2 7" opacity="0.36" stroke-linecap="round"/>' + trees() + '</svg>';
    POIS.forEach(function (p, i) {
      var el = document.createElement("button");
      el.type = "button";
      el.className = "poi" + (p.home ? " home" : "");
      el.style.left = p.x + "%";
      el.style.top = p.y + "%";
      el.setAttribute("data-i", i);
      el.innerHTML = '<span class="pulse"></span><span class="pin"></span><span class="plabel">' + p.name[LANG] + '</span>';
      el.addEventListener("click", function () { openPanel(i); });
      c.appendChild(el);
    });
    openPanel(0);
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
  function openPanel(i) {
    activePoi = i;
    var p = POIS[i];
    document.querySelectorAll(".poi").forEach(function (el) { el.classList.toggle("active", +el.getAttribute("data-i") === i); });
    document.querySelectorAll(".poi-item").forEach(function (el) { el.classList.toggle("active", +el.getAttribute("data-i") === i); });
    var img = document.getElementById("pImg");
    img.style.backgroundImage = "url('" + p.src.replace(/'/g, "%27") + "')";
    img.classList.add("has");
    document.getElementById("pCat").textContent = p.cat[LANG];
    document.getElementById("pTitle").textContent = p.name[LANG];
    document.getElementById("pDist").textContent = p.dist[LANG];
    document.getElementById("pDesc").textContent = p.desc[LANG];
  }
  function closePanel() {
    document.querySelectorAll(".poi").forEach(function(el){ el.classList.remove("active"); });
    document.querySelectorAll(".poi-item").forEach(function(el){ el.classList.remove("active"); });
    activePoi = null;
  }
  function updateMapLang() {
    if (typeof POIS === "undefined") return;
    renderPoiList();
    document.querySelectorAll(".poi").forEach(function(el) {
      var p = POIS[+el.getAttribute("data-i")];
      var label = el.querySelector(".plabel");
      if (p && label) label.textContent = p.name[LANG];
    });
    if (activePoi !== null && activePoi !== undefined) openPanel(activePoi);
  }
  buildMap();
  renderPoiList();

  /* Reviews */
  var REVIEWS = [
    {
      stars: "★★★★★",
      text: {
        ro: "Cabana arata exact ca in poze, poate chiar mai bine. Liniste, priveliste si un interior foarte cald.",
        en: "The cabin looks exactly like the photos, maybe even better. Quiet, views, and a very warm interior."
      },
      author: "Andreea",
      date: { ro: "Decembrie 2025", en: "December 2025" }
    },
    {
      stars: "★★★★★",
      text: {
        ro: "Am stat un weekend si ne-am simtit complet rupti de oras. Semineul si fereastra mare fac tot farmecul.",
        en: "We stayed for a weekend and felt completely away from the city. The fireplace and huge window make the whole charm."
      },
      author: "Mihai",
      date: { ro: "Noiembrie 2025", en: "November 2025" }
    },
    {
      stars: "★★★★★",
      text: {
        ro: "Foarte curat, bine echipat si cu acces rapid spre trasee. Terasa este perfecta pentru cafeaua de dimineata.",
        en: "Very clean, well equipped, and close to the trails. The terrace is perfect for morning coffee."
      },
      author: "Ioana",
      date: { ro: "Octombrie 2025", en: "October 2025" }
    },
    {
      stars: "★★★★★",
      text: {
        ro: "Locul ideal pentru doua zile de pauza. Totul este gandit simplu, frumos si practic.",
        en: "The ideal place for a two-day reset. Everything is simple, beautiful, and practical."
      },
      author: "Radu",
      date: { ro: "Septembrie 2025", en: "September 2025" }
    },
    {
      stars: "★★★★★",
      text: {
        ro: "Priveliste superba si gazde foarte prompte. Recomand mai ales pentru iarna.",
        en: "Beautiful view and very responsive hosts. Especially recommended in winter."
      },
      author: "Elena",
      date: { ro: "Ianuarie 2026", en: "January 2026" }
    }
  ];

  var revTrack = document.getElementById("revTrack");
  function renderReviews() {
    if (!revTrack) return;
    revTrack.innerHTML = "";
    REVIEWS.concat(REVIEWS).forEach(function(r) {
      var card = document.createElement("article");
      card.className = "rev-card";
      card.innerHTML = '<div class="rev-stars" aria-label="5 stele">' + r.stars + '</div>'
        + '<p class="rev-text">' + r.text[LANG] + '</p>'
        + '<p class="rev-author">' + r.author + '</p>'
        + '<p class="rev-date">' + r.date[LANG] + '</p>';
      revTrack.appendChild(card);
    });
  }

  /* â”€â”€ Lightbox â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  var lightbox  = document.getElementById("lightbox");
  var lbImg     = document.getElementById("lbImg");
  var lbCaption = document.getElementById("lbCaption");
  var lbIndex   = 0;

  function openLightbox(i) {
    lbIndex = i;
    lbImg.src = GALLERY[i].src;
    lbCaption.textContent = GALLERY[i].l;
    lightbox.classList.add("open");
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
  }
  function moveLightbox(dir) {
    lbIndex = (lbIndex + dir + GALLERY.length) % GALLERY.length;
    lbImg.src = GALLERY[lbIndex].src;
    lbCaption.textContent = GALLERY[lbIndex].l;
  }

  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", function() { moveLightbox(-1); });
  document.getElementById("lbNext").addEventListener("click", function() { moveLightbox(1); });
  lightbox.addEventListener("click", function(e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", function(e) {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape")      closeLightbox();
    if (e.key === "ArrowLeft")   moveLightbox(-1);
    if (e.key === "ArrowRight")  moveLightbox(1);
  });

  /* â”€â”€ Modal â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  window.openModal = function() {
    var scrim = document.getElementById("scrim");
    scrim.style.display = "flex";
    requestAnimationFrame(function() {
      requestAnimationFrame(function() { scrim.style.opacity = "1"; });
    });
  };

  window.closeModal = function() {
    var scrim = document.getElementById("scrim");
    scrim.style.opacity = "0";
    setTimeout(function() { scrim.style.display = "none"; }, 300);
  };

  document.getElementById("scrim").addEventListener("click", function(e) {
    if (e.target === this) window.closeModal();
  });

  /* â”€â”€ Calendar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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
    renderCal();
  }

  function updateDateDisplay() {
    var el = document.getElementById("dateDisplay");
    if (!el) return;
    if (checkIn && checkOut) {
      var nights = Math.round((checkOut - checkIn) / MS);
      el.textContent = fmt(checkIn) + " - " + fmt(checkOut) + " (" + nights + (LANG === "en" ? " nights" : " nopti") + ")";
    } else if (checkIn) {
      el.textContent = fmt(checkIn) + (LANG === "en" ? " - select check-out" : " - selecteaza check-out");
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

  /* â”€â”€ Send request via WhatsApp â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  var WA_NUMBER = "40756651582";

  window.sendRequest = function() {
    if (!checkIn || !checkOut) {
      alert(LANG === "en"
        ? "Please select check-in and check-out dates (min. 2 nights)."
        : "Te rugam sa selectezi datele de check-in si check-out (min. 2 nopti).");
      return;
    }
    var msg = LANG === "en"
      ? "Hello! I would like to book Green View Rarau cabin.\n\nCheck-in: " + fmt(checkIn) + "\nCheck-out: " + fmt(checkOut) + "\nGuests: " + guests + "\n\nThank you!"
      : "Buna ziua! As dori sa rezerv cabana Green View Rarau.\n\nCheck-in: " + fmt(checkIn) + "\nCheck-out: " + fmt(checkOut) + "\nPersoane: " + guests + "\n\nVa multumesc!";
    window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg), "_blank");
  };

  /* â”€â”€ Init â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  applyLang();
  renderCal();

})();
