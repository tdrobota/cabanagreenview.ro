# Product

**Green View Rarău** is a single, privately run A-frame cabin for rent at the foot of
Rarău mountain, in Câmpulung Moldovenesc (Izvorul Alb area, on the road up to Rarău), Bucovina
(Suceava county, Romania). The website, cabanagreenview.ro, is its only direct booking channel.

## The offer (facts; do not embellish)

- Modern A-frame built with natural materials: glass gable, wood interior, stone/wood fireplace.
- 6 bedrooms, 4 bathrooms, for groups of 8–16 guests. Minimum stay 2 nights.
- Fully equipped kitchen, Wi-Fi, central heating, firewood included, espresso machine
  and teas, panoramic terrace, garden hammock, private parking, direct forest access.
- Nearby (by car, OSRM routes from the cabin, 2026-10-04): ski slope ~900 m (owner), Câmpulung centre ~7 km,
  Pietrele Doamnei ~10 km, Transrarău ~12 km, Moara Dracului ~11 km, Pojorâta ~15 km, Slătioara ~20 km, Mocănița ~38 km.
- Booking: pick dates in the on-site calendar, request goes over WhatsApp
  (+40 756 651 582); the owners confirm within 2 hours. No working email yet (contact@greenviewrarau.ro is on an unregistered domain and was removed 2026-10-02).
- Public profiles: Google Maps "GreenViewRarau" (4.9/22), Turistinfo (10/10, 13), Facebook facebook.com/GreenViewRarau.
- Unknown (owner TODO, never invent): nightly price, check-in/out times, exact address,
  pets / winter-access policy, aggregate rating, social links.

## Audience

Romanian groups first (friends, extended families, small company retreats) planning a
weekend or a few days in the mountains, usually on a phone, often comparing with
Booking/Airbnb listings. Secondary: foreign visitors touring Bucovina (EN version).

## Surface

One-page marketing site, mode **Persuade**: the visitor must believe the cabin is real,
beautiful and right for their group, then open the calendar and send a WhatsApp request.

## Constraints

- Static HTML/CSS/vanilla JS, no build step; the repo root deploys to Cloudflare Workers. Domain:
  https://www.cabanagreenviewrarau.ro (live 2026-10-05); worker.js 301-redirects the bare domain, http and workers.dev to it.
- Bilingual RO/EN via `data-i18n-ro` / `data-i18n-en`; all content stays in static HTML
  for crawlers. JSON-LD, sitemap, llms.txt must stay in sync with visible facts.
- Strict CSP: self-hosted fonts and images only, no third-party scripts.
- Romanian diacritics (ă â î ș ț) everywhere.

## Brand commitments

- Visual direction pinned by the owner (2026-10-02): the Dribbble "WoodNest" cabin
  reference: misty teal photography, a large rounded inset frame over a full-bleed
  photo, big light grotesk headline with a muted middle line, dark glass booking card,
  white buttons, a small amber accent.
- Photography is the owner's own cabin. A colour grade is fine; staging that misrepresents the
  property is not. The owner approved (2026-10-02) warm interior lamplight in the hero's
  glass gable for an evening look; no objects are added or removed.
- Brand mark: a line-drawn A-frame with crossed rafters and one amber lit window
  (replaced a filled amber triangle that read as a warning sign).
