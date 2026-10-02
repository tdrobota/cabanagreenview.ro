# Raport audit GEO: Green View Rarău

**Data auditului:** 2 octombrie 2026
**URL:** https://cabanagreenview.teodro11.workers.dev
**Tip de afacere:** Afacere locală (o singură cabană A-frame, închiriată integral)
**Pagini analizate:** 1 (site cu o singură pagină), plus robots.txt, sitemap.xml, llms.txt și 404
**Metodă:** skill-ul `geo-audit` (geo-seo-claude). Am colectat eu datele, apoi le-au analizat cinci agenți specializați (vizibilitate AI, platforme, tehnic, conținut, schema). Verificările live sunt marcate ca atare.

---

## Rezumat

**Scor GEO general: 50/100 (Slab)**

Pagina în sine e bine construită. Conținutul e randat pe server (1.274 de cuvinte), toți crawlerii AI au acces, există `llms.txt`, schema LodgingBusiness și un FAQ de 6 întrebări. Cel mai mult trage scorul în jos faptul că **toate semnalele de identitate indică spre domenii care nu există** (cabanagreenview.ro, greenviewrarau.ro). Pe lângă asta, brandul are o prezență externă foarte mică, iar sursele externe se contrazic între ele: adresă, email, distanțe, preț.

### Scoruri pe categorii

| Categorie | Scor | Pondere | Scor ponderat |
|---|---|---|---|
| Citabilitate AI | 58/100 | 25% | 14,5 |
| Autoritatea brandului | 20/100 | 20% | 4,0 |
| Conținut E-E-A-T | 58/100 | 20% | 11,6 |
| GEO tehnic | 72/100 | 15% | 10,8 |
| Schema și date structurate | 56/100 | 10% | 5,6 |
| Optimizare pe platforme | 31/100 | 10% | 3,1 |
| **Scor GEO general** | | | **50/100** |

---

## Probleme critice (de rezolvat imediat)

1. **Identitatea site-ului indică spre un domeniu inexistent** (verificat live: NXDOMAIN).
   - **Unde:** canonical, `og:url`, `og:image`, `twitter:image`, `@id`/`url`/`image`/`logo` din JSON-LD, linia `Sitemap:` din robots.txt, `<loc>` din sitemap.xml și linia „Website” din llms.txt indică toate spre `https://cabanagreenview.ro`.
   - **Efect:** Google tratează canonicalul ca invalid, sitemap-ul nu poate fi citit, iar linkurile trimise pe WhatsApp/Facebook apar fără imagine.
   - **Soluție A (recomandată):** înregistrezi domeniul și îl conectezi la Worker ca Custom Domain.
   - **Soluție B (imediată):** până atunci, toate aceste referințe trec pe URL-ul workers.dev.

2. **Emailul publicat nu funcționează.**
   - `contact@greenviewrarau.ro` e pe un domeniu care nu există, deci mesajele trimise acolo se pierd. Adresa apare pe pagină, în schema Organization și în llms.txt.
   - **Soluție:** fie o adresă de email care funcționează, fie scoaterea emailului și păstrarea doar a WhatsApp-ului și a telefonului.

3. **Sursele externe se contrazic** (verificat live). AI-urile preiau orice versiune găsesc.
   - Un mini-site eatbu.com, generat automat din profilul Google, arată:
     - o adresă în **Suceava (Alee Dumbravii 22)**
     - un **email Yahoo personal**
     - mențiunea „pet-friendly”
     - un program 9–21
   - **Distanțe:** Turistinfo spune „la 700 m sub pârtia Rarău”, dar site-ul spune „~12 km”. Pe site, textul de prezentare spune „vârful Rarău la câteva minute”, iar FAQ-ul spune „circa 9 km”.
   - **Soluție:** stabilești un singur set de date (adresă, email, distanțe, politica pentru animale) și îl aplici pe Google Business Profile, Turistinfo, eatbu (preiei controlul sau ceri ștergerea), site și llms.txt.

## Prioritate mare

4. **Site-ul nu apare la căutarea propriului nume** (verificat live). La „Green View Rarău” apar Facebook, Turistinfo și eatbu, dar nu site-ul.
   - **Soluție:** adaugi URL-ul site-ului în Google Business Profile, pe pagina de Facebook și în anunțul Turistinfo, apoi trimiți site-ul în Google Search Console și Bing Webmaster Tools.

5. **Headerul HTTP `Content-Type: text/html` nu are charset** (verificat live).
   - **Efect:** crawlerii bazați pe Python `requests` citesc titlul ca „RarÄ\x83u”, adică diacriticele ies stricate pentru o parte din uneltele AI.
   - **Soluție:** adaugi `Content-Type: text/html; charset=utf-8` în `_headers`, pentru `/`, `/index.html` și `/404.html`, plus `charset=utf-8` pentru `llms.txt` și `robots.txt`.

6. **Paginile inexistente întorc 404 cu răspuns gol** (verificat live: 0 bytes), deși `404.html` există.
   - **Soluție:** adaugi `"not_found_handling": "404-page"` în `assets` din `wrangler.jsonc`.

7. **Cinci recenzii nu au sursă** (Elena, Andreea, Mihai, Ioana, Radu).
   - Au un singur rând fiecare, doar prenume, și stau înaintea celor 12 recenzii reale de pe Turistinfo. Fac secțiunea mai puțin credibilă.
   - **Soluție:** le atribui sursei reale (de exemplu Google, cu link) sau le scoți.

8. **`sameAs` conține doar Google Maps.**
   - **Soluție:** adaugi anunțul Turistinfo și pagina de Facebook (https://www.facebook.com/GreenViewRarau/). Pagina de Facebook se poate lega și din footer.

9. **Lipsesc răspunsurile la întrebările pe care oaspeții le pun înainte de rezervare** (au nevoie de proprietar):
   - ore de check-in și check-out
   - politica de anulare și avansul
   - animale de companie
   - accesul pe drum iarna
   - regulile casei
   - lenjerie și prosoape

   Recenziile mai pomenesc un loc de joacă, jucării și un foișor cu grătar, care nu apar în lista de facilități.

## Prioritate medie

10. **Engleza nu are un URL propriu.** Conținutul EN există doar ca atribute schimbate prin JavaScript (136 de atribute `data-i18n-en`), fără hreflang. Pentru căutări în engleză („A-frame cabin Bucovina”) site-ul nu există.
    - **Soluție:** o pagină statică `/en/` cu `hreflang` ro/en/x-default, inclusă în sitemap.
11. **Galeria de 16 fotografii e construită din JavaScript**, deci imaginile și textele alt nu sunt în HTML.
    - **Soluție:** pozele scrise direct în `index.html`, cu JS-ul folosit doar pentru lightbox.
12. **Schema:**
    - LodgingBusiness și Organization descriu aceeași entitate de două ori. Ar trebui păstrat un singur nod, cu `logo`.
    - Lipsesc trei facilități care apar pe pagină (lemne de foc, espressor, hamac).
    - Textul „Parcare privată **gratuită**” face o afirmație pe care pagina nu o face.
    - Imaginea principală din hero, p24, nu apare în `image`.
    - Cabana poate fi descrisă ca `containsPlace` de tip `House`, cu ocupare 8–16, 6 dormitoare și 4 băi.
    - Se poate adăuga un `ReserveAction` către WhatsApp.
13. **Pasaje greu de citat de un AI:** „Interiorul”, „Liniște” și textele anotimpurilor sunt descriptive, dar nu conțin fapte. Mai jos sunt propuneri de rescriere.
14. **Nu există IndexNow** și nici verificare Bing. Ar ajuta la indexarea rapidă în Bing/Copilot.

## Prioritate mică

15. **`decoding="async"` pe imaginea din hero** concurează cu `fetchpriority="high"`; atributul ar trebui scos.
16. **Două imagini din galerie au peste 300 KB** (`p44.webp`, `p52.webp`).
17. **Antetul `Cache-Control` e dublat** pe imagini, pentru că două reguli din `_headers` se suprapun.
18. **Antetul HSTS lipsește.** Contează când site-ul trece pe domeniul propriu.
19. **Lipsesc** o linie Content-Signal în robots.txt, un `llms-full.txt` și o dată vizibilă „Actualizat la …”.
20. **Repo-ul de pe GitHub e public și indexat.** La căutări poate concura cu site-ul, așa că ar fi bine să fie privat.
21. **Nu există o notă de confidențialitate.** Pagina trimite vizitatorii spre WhatsApp.

---

## Analiză pe categorii

### Citabilitate AI (58/100)
- **Cele mai bune pasaje** (de păstrat):
  - FAQ „Câte persoane încap…” (8–16 persoane, 6 dormitoare, 4 băi)
  - FAQ „Cum rezerv…” (confirmare în 2 ore)
  - lista de repere, de exemplu „Codrul Secular Slătioara, ~22 km, 45 min, UNESCO”
- **Pasajele slabe și rescrierea propusă** (aceleași fapte, formulate ca să poată fi citate):
  - *Liniște:* „Cabana Green View Rarău este izolată: din jurul ei nu se vede nicio altă casă, iar Pojorâta, cel mai apropiat sat, e la circa 6 km.”
  - *Interiorul:* „Green View Rarău este o cabană A-Frame cu 6 dormitoare, 4 băi, fereastră panoramică la mansardă și interior din lemn, în stil scandinav-rustic.”
  - *Vara:* „Vara, cabana oferă terasă panoramică, hamac în grădină și acces la traseele din masivul Rarău (Pietrele Doamnei, ~9 km).”

### Autoritatea brandului (20/100)
- **Găsite** (verificat live):
  - Google Maps „GreenViewRarau”: 4,9 din 22 de recenzii, după datele proprietarului. Nu am putut verifica live din cauza ecranului de consimțământ.
  - Turistinfo: 10/10 din 13 recenzii.
  - pagina de Facebook GreenViewRarau
  - eatbu.com, cu date greșite
  - categoria de cabane A-frame din Suceava pe Turistinfo
- **Negăsite:** Booking.com, Airbnb, Reddit, YouTube, bloguri de călătorie, Wikipedia (există doar articolul despre Masivul Rarău). Mini-site-ul eatbu pomenește conturi de Instagram și TikTok, dar nu le-am găsit.

### Conținut E-E-A-T (58/100)
| Componentă | Scor | Ce contează |
|---|---|---|
| Experiență | 15/25 | fotografii reale și detalii despre zonă |
| Expertiză | 14/25 | cunoașterea zonei, cu distanțe și anotimpuri |
| Autoritate | 13/25 | 12 recenzii reale și ratingurile afișate |
| Încredere | 9/25 | scorul cel mai mic |

- **Încrederea e cea mai slabă:**
  - nu se știe cine sunt gazdele (deși recenziile le laudă constant)
  - emailul publicat nu funcționează
  - nu există adresă
  - nu există politică de anulare
  - nu există pagini legale
- Cea mai puternică îmbunătățire ar fi un bloc „Gazdele”: prenumele, o fotografie și două fraze despre cabană.

### GEO tehnic (72/100)
- **Bine:**
  - randare pe server
  - toți crawlerii AI au acces explicit
  - antete de securitate (CSP, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy)
  - imaginea din hero e preîncărcată (72 KB în varianta mobilă)
  - viewport și `lang="ro"` setate corect
  - fișierele interne (wrangler.jsonc, _headers, .md) nu sunt servite
- **De rezolvat:** domeniul inexistent, charset-ul, răspunsul 404 gol, lipsa unui URL pentru engleză și galeria construită din JavaScript.

### Schema și date structurate (56/100)
- **Bine:** JSON-ul e valid, cu un `@graph` de 4 noduri legate prin `@id`, inclus direct în HTML.
- **Recomandare importantă:** ratingurile Google (4,9/22) și Turistinfo (10/13) **nu** trebuie adăugate în schema ca `aggregateRating`. Regulile Google interzic agregarea recenziilor de pe alte site-uri, iar recenziile publicate de o afacere locală despre ea însăși nu primesc oricum stele în rezultate. Calea corectă e ce există deja:
  - linkuri `sameAs` spre ambele platforme
  - ratingul afișat vizibil pe pagină
  - `llms.txt`
- Un fragment JSON-LD corectat e gata de aplicat, cu `{{DOMAIN}}` în locul domeniului.

### Optimizare pe platforme (31/100)
| Platformă | Scor | Observație |
|---|---|---|
| Google AI Overviews | 30 | structura e bună, dar canonicalul e invalid |
| ChatGPT | 30 | nu există entitate Wikipedia/Wikidata, iar Bing nu indexează site-ul |
| Perplexity | 35 | va cita Turistinfo și Facebook, nu site-ul |
| Gemini | 35 | profilul Google e punctul cel mai puternic, dar datele de pe eatbu îl contrazic |
| Bing Copilot | 25 | fără IndexNow și fără verificare |

---

## Rezolvări rapide (săptămâna aceasta)

1. **Mutarea identității pe workers.dev** (sau conectarea domeniului): canonical, OG, JSON-LD, robots.txt, sitemap.xml, llms.txt. *Impact: cel mai mare, fiindcă fără asta indexarea nu poate funcționa.*
2. **Repararea antetelor:** `charset=utf-8` în `_headers` și pagina 404 în `wrangler.jsonc`. *Două rânduri de configurare.*
3. **Emailul inexistent:** scos de pe site, din schema și din llms.txt, până când există unul care funcționează.
4. **`sameAs`:** adăugarea Turistinfo și Facebook, plus restul corecturilor de schema din fragmentul pregătit.
5. **Linkuri spre site** de pe Google Business Profile, Facebook și Turistinfo, apoi trimiterea site-ului în Search Console și Bing Webmaster Tools. *Sarcina proprietarului.*

## Plan pe 30 de zile

### Săptămâna 1: Identitate și indexare
- [ ] Domeniul înregistrat și conectat la Worker, sau toate referințele trecute pe workers.dev
- [ ] Charset, pagina 404 și emailul rezolvate
- [ ] Site-ul trimis în Google Search Console și Bing Webmaster Tools, cu sitemap

### Săptămâna 2: Date consecvente peste tot
- [ ] Un singur set de fapte (adresă, email, distanțe, animale), aplicat pe Google Business Profile, Turistinfo, Facebook, eatbu, site și llms.txt
- [ ] Recenziile fără sursă atribuite sau scoase
- [ ] Schema corectată (un singur nod de business, `sameAs`, facilități, `containsPlace`, `ReserveAction`)

### Săptămâna 3: Conținut care răspunde la întrebări
- [ ] Bloc „Gazdele” (cu informații de la proprietar)
- [ ] FAQ-uri noi: check-in/out, anulare, animale, acces iarna, regulile casei (cu informații de la proprietar)
- [ ] Rescrierea pasajelor slabe (Liniște, Interiorul, anotimpuri) cu fapte concrete
- [ ] Galeria scrisă direct în HTML, cu texte alt descriptive

### Săptămâna 4: Engleză și extindere
- [ ] Pagina statică `/en/` cu hreflang
- [ ] IndexNow, linie Content-Signal, `llms-full.txt`
- [ ] De luat în calcul: un anunț pe Booking.com sau Airbnb pentru vizitatorii străini

---

## Ce trebuie să furnizeze proprietarul (nu se inventează)

- **Domeniul:** pe care îl folosiți și când îl înregistrați
- **Email:** o adresă care funcționează
- **Adresa** reală sau indicații de acces
- **Ore de check-in și check-out**, politica de anulare și avansul
- **Animale de companie** acceptate sau nu, plus regulile casei
- **Accesul iarna:** starea drumului (asfalt sau drum forestier, lanțuri, 4×4)
- **Distanțele corecte:** spre pârtie și spre vârful Rarău
- **Gazdele:** prenume, o fotografie, povestea pe scurt
- **Cele 5 recenzii fără sursă:** de unde provin
- **Prețul:** proprietarul a decis să *nu* fie afișat pe site. Turistinfo afișează totuși „de la 1.800 RON/noapte”, deci AI-urile vor cita acea cifră.

---

## Anexă: pagini analizate

| URL | Rezultat | Probleme |
|---|---|---|
| / | 200, randat pe server, 1.274 de cuvinte în română | canonical/OG spre un domeniu inexistent, lipsă charset, engleză doar prin JS, galerie construită din JS |
| /robots.txt | 200 | linia Sitemap indică spre un domeniu inexistent |
| /sitemap.xml | 200 | `<loc>` spre un domeniu inexistent |
| /llms.txt | 200 | Website și email pe domenii inexistente; nu există llms-full.txt |
| /llms-full.txt, /sitemap_index.xml | 404 | — |
| /cale-inexistenta | 404 cu răspuns gol | pagina 404.html nu e folosită |
