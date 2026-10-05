/**
 * Generate the English page and llms-full.txt from the Romanian source page.
 *
 *   cd tools && node build-pages.mjs
 *
 * index.html (Romanian) is the single source of truth. Its bilingual attributes
 * (data-i18n-en) and the English dictionary in app.js produce:
 *   ../en/index.html   - static English page (own URL, hreflang pair with /)
 *   ../llms-full.txt   - full site content as Markdown for AI systems
 * Re-run after every change to index.html or to the English strings in app.js.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const ORIGIN = (await readFile(join(HERE, 'site-origin.txt'), 'utf8')).trim();
const html = await readFile(join(ROOT, 'index.html'), 'utf8');
const appJs = await readFile(join(ROOT, 'app.js'), 'utf8');

// English dictionary from app.js ("var T = { ro: {...}, en: {...} };")
const tStart = appJs.indexOf('var T = {');
const tEnd = appJs.indexOf('\n  };', tStart);
if (tStart < 0 || tEnd < 0) throw new Error('could not find the T dictionary in app.js');
const T = new Function('return ' + appJs.slice(tStart + 'var T = '.length, tEnd + 4))();

// Attribute text that has no data-i18n-en counterpart (alt / aria-label / titles)
const EN_ATTR = {
  'Cabana A-Frame Green View Rarău, cu fațada de sticlă și lemn luminată cald, sub dealurile împădurite ale Rarăului, la amurg':
    'Green View Rarău A-Frame cabin, its glass and timber front lit warm, under the forested hills of Rarău at dusk',
  'Interiorul cabanei A-Frame Green View Rarău: lemn cald și fereastră panoramică':
    'Inside the Green View Rarău A-Frame cabin: warm wood and a panoramic window',
  'Cabana A-Frame iarna, cu zăpadă pe acoperiș': 'The A-Frame cabin in winter, snow on the roof',
  'Fațada cabanei într-o seară de furtună': 'The cabin facade on a stormy evening',
  'Cabana luminată noaptea, în zăpadă': 'The cabin lit up at night, in the snow',
  'Fațada A-Frame cu peretele de sticlă': 'The A-Frame facade with its glass wall',
  'Livingul A-Frame cu mansarda': 'The A-Frame living room and mezzanine',
  'Livingul văzut de la mansardă': 'The living room seen from the mezzanine',
  'Dormitor la mansardă, cu fereastră spre pădure': 'Mezzanine bedroom with a window to the forest',
  'Fereastra triunghiulară din dormitor': 'The triangular bedroom window',
  'Zăpada văzută prin geamul dormitorului': 'Snow seen through the bedroom window',
  'Hamacul din grădină, cu panoramă spre munți': 'The garden hammock, with a view of the mountains',
  'Cafeaua de dimineață, cu vedere la munte': 'Morning coffee with a mountain view',
  'Dealurile Rarăului văzute prin luminator': 'The Rarău hills seen through the skylight',
  'Bucătăria complet utilată': 'The fully equipped kitchen',
  'Vatra de foc din curte': 'The fire pit in the yard',
  'Șemineul pe lemne din living': 'The wood-burning fireplace in the living room',
  'Indicatorul de la intrarea în domeniu': 'The sign at the entrance to the property',
  '5 din 5 stele': '5 out of 5 stars',
  'Închide': 'Close',
  'Închide detaliile locului': 'Close place details',
  'Închide calendarul': 'Close calendar',
  'Secțiuni site': 'Site sections',
  'English version': 'Versiunea în română',
  'Principal': 'Main',
  'Meniu': 'Menu',
  'Mai puține persoane': 'Fewer guests',
  'Mai multe persoane': 'More guests',
  'Luna următoare': 'Next month',
  'Luna anterioară': 'Previous month',
  'Hartă stilizată a zonei Rarău cu reperele din jurul cabanei': 'Stylised map of the Rarău area with landmarks around the cabin',
  'Galerie foto': 'Photo gallery',
  'Fotografie mărită': 'Enlarged photo',
  'Fotografia următoare': 'Next photo',
  'Fotografia anterioară': 'Previous photo',
  'Anotimpuri': 'Seasons',
};
const EN_META = {
  title: 'Green View Rarău – A-Frame cabin for rent at the foot of Rarău mountain, Bucovina',
  description: 'Green View Rarău is a modern A-Frame cabin for rent at the foot of Rarău mountain in Bucovina, Romania. Wood-burning fireplace, panoramic terrace, direct forest access. Groups of 8–16 guests, minimum 2 nights.',
  ogTitle: 'Green View Rarău – A-Frame cabin near Rarău mountain',
  ogDescription: 'A modern A-Frame cabin at the foot of Rarău mountain, Bucovina. Fireplace, panoramic terrace, direct forest access. Check availability.',
  twDescription: 'A modern A-Frame cabin at the foot of Rarău mountain, Bucovina, Romania.',
  ogAlt: 'Green View Rarău A-Frame cabin at dusk, warm light in the glass gable',
};

const $ = cheerio.load(html, { decodeEntities: false });
const textOf = el => $(el).text().replace(/\s+/g, ' ').trim();
const enOf = el => $(el).attr('data-i18n-en') ?? (T.en[$(el).attr('data-i18n')] ?? null);
// Read the Romanian/English content first (llms-full.txt uses both)
const ro = cheerio.load(html, { decodeEntities: false });

/* ------------------------------------------------------------ English page */
$('html').attr('lang', 'en');
let missing = [];
$('[data-i18n], [data-i18n-en]').each((_, el) => {
  const key = $(el).attr('data-i18n');
  const val = enOf(el);
  if (val == null) { missing.push(key); return; }
  if (key === 'hero_title') $(el).html(val); else $(el).text(val);
});
if (missing.length) throw new Error('no English text for: ' + [...new Set(missing)].join(', '));
$('[alt], [aria-label]').each((_, el) => {
  for (const a of ['alt', 'aria-label']) {
    const v = $(el).attr(a);
    if (v && EN_ATTR[v]) $(el).attr(a, EN_ATTR[v]);
  }
});
$('#langToggle').text('RO');

// Assets are referenced relative to / in the source; from /en/ they need a leading slash
const rel = v => !/^(\/|#|https?:|mailto:|tel:|data:)/.test(v);
for (const a of ['src', 'href', 'data-img']) {
  $(`[${a}]`).each((_, el) => { const v = $(el).attr(a); if (v && rel(v)) $(el).attr(a, '/' + v); });
}
for (const a of ['srcset', 'imagesrcset']) {
  $(`[${a}]`).each((_, el) => {
    $(el).attr(a, $(el).attr(a).split(',').map(s => { const t = s.trim(); return rel(t) ? '/' + t : t; }).join(', '));
  });
}
$('[style]').each((_, el) => $(el).attr('style', $(el).attr('style').replace(/url\('(?!\/|https?:|data:)/g, "url('/")));

// Head: English metadata, own canonical, hreflang pair
$('title').text(EN_META.title);
$('meta[name="description"]').attr('content', EN_META.description);
$('link[rel="canonical"]').attr('href', `${ORIGIN}/en/`);
$('meta[property="og:url"]').attr('content', `${ORIGIN}/en/`);
$('meta[property="og:title"]').attr('content', EN_META.ogTitle);
$('meta[property="og:description"]').attr('content', EN_META.ogDescription);
$('meta[property="og:image:alt"]').attr('content', EN_META.ogAlt);
$('meta[property="og:locale"]').attr('content', 'en_US');
$('meta[property="og:locale:alternate"]').attr('content', 'ro_RO');
$('meta[name="twitter:title"]').attr('content', EN_META.ogTitle);
$('meta[name="twitter:description"]').attr('content', EN_META.twDescription);
if ($('link[hreflang]').length !== 3) throw new Error('index.html must carry the ro/en/x-default hreflang links');

// JSON-LD: English description, English FAQ (from the page), the same entity @ids
const ldEl = $('script[type="application/ld+json"]');
const ld = JSON.parse(ldEl.html());
const biz = ld['@graph'].find(n => n['@type'] === 'LodgingBusiness');
biz.description = 'Modern A-frame cabin rented whole at the foot of Rarău mountain in Bucovina, Romania, for groups of 8–16 guests. Wood-burning fireplace, panoramic terrace and direct forest access.';
const faqNode = ld['@graph'].find(n => n['@type'] === 'FAQPage');
faqNode['@id'] = `${ORIGIN}/en/#faq`;
faqNode.inLanguage = 'en';
faqNode.mainEntity = ro('.faq-item').map((_, d) => ({
  '@type': 'Question',
  name: ro(d).find('summary').attr('data-i18n-en'),
  acceptedAnswer: { '@type': 'Answer', text: ro(d).find('p').attr('data-i18n-en') },
})).get();
ldEl.text('\n  ' + JSON.stringify(ld, null, 2).replace(/\n/g, '\n  ') + '\n  ');

$('head').prepend('\n  <!-- GENERATED by tools/build-pages.mjs from /index.html. Do not edit by hand. -->');
await mkdir(join(ROOT, 'en'), { recursive: true });
await writeFile(join(ROOT, 'en', 'index.html'), $.html());

/* ------------------------------------------------------------ llms-full.txt */
const en = el => ro(el).attr('data-i18n-en') ?? T.en[ro(el).attr('data-i18n')] ?? textOf(el);
const lines = [];
const P = (...a) => lines.push(...a);
const MAPS = biz.hasMap;
const [, TURISTINFO, FACEBOOK] = biz.sameAs;

P('# Green View Rarău — full site content', '',
  '> A modern A-frame holiday cabin rented whole at the foot of Rarău mountain, near Pojorâta and',
  '> Câmpulung Moldovenesc, Bucovina, Suceava county, Romania. For groups of 8–16 guests.', '',
  `Romanian page: ${ORIGIN}/  ·  English page: ${ORIGIN}/en/  ·  Short version: ${ORIGIN}/llms.txt`,
  `Generated from the live page content by tools/build-pages.mjs.`, '');

P('## Key facts', '');
ro('.spec > div').each((_, d) => P(`- ${en(ro(d).find('dt'))}: ${ro(d).find('dd span').length ? en(ro(d).find('dd span').first()) : en(ro(d).find('dd'))}`));
P(`- Coordinates: ${biz.geo.latitude}, ${biz.geo.longitude} (Google Maps: ${MAPS})`, '');

P('## About the cabin', '');
P(`${en(ro('[data-i18n="about_title"]'))}. ${en(ro('[data-i18n="about_p1"]'))}`, '');
ro('.about-block').each((_, b) => P(`**${en(ro(b).find('h3'))}.** ${en(ro(b).find('p'))}`, ''));

P('## Amenities', '');
ro('.fac-item .fac-label').each((_, l) => P(`- ${en(l)} (${textOf(l)})`));
P('');

P('## Booking', '',
  '- Pick check-in and check-out dates in the calendar on the site (minimum 2 nights) and the number of guests (8–16).',
  '- The request opens in WhatsApp, pre-filled with the dates, nights and guests, to +40 756 651 582.',
  '- The hosts confirm availability within about 2 hours.',
  '- The nightly price is not published on the site; ask in the WhatsApp request.', '');

P('## Frequently asked questions', '');
ro('.faq-item').each((_, d) => {
  const s = ro(d).find('summary'), p = ro(d).find('p');
  P(`### ${s.attr('data-i18n-en')}`, `(RO: ${s.attr('data-i18n-ro')})`, '', p.attr('data-i18n-en'), '', `RO: ${p.attr('data-i18n-ro')}`, '');
});

P('## Nearby places', '', 'Distances are approximate, by road, from the Pojorâta / Câmpulung Moldovenesc area.', '');
ro('.poi-item').each((_, b) => {
  if (ro(b).is('[data-home]')) return;
  const g = c => en(ro(b).find(c));
  P(`- **${g('.poi-item-name')}** (${g('.poi-item-cat')}), ${g('.poi-item-dist')}: ${g('.poi-item-desc')}`);
});
P('');

P('## Seasons', '');
ro('.spanel').each((_, s) => {
  const id = ro(s).attr('id').replace('sp-', '');
  P(`- **${en(ro(`#stab-${id}`))}:** ${en(ro(s).find('.spanel-text'))}`);
});
P('');

P('## Guest reviews', '',
  `Ratings: 4.9/5 on Google (22 reviews, ${MAPS}); 10/10 on Turistinfo (13 reviews, ${TURISTINFO}).`,
  'Reviews shown on the site (original Romanian, with an English translation):', '');
ro('.rev-card').each((_, c) => {
  const q = ro(c).find('.rev-text');
  const src = ro(c).find('.rev-src').text().trim();
  const score = ro(c).find('.rev-score span').first().text().trim();
  const who = `${textOf(ro(c).find('.rev-author'))}, ${ro(c).find('.rev-date').attr('data-i18n-en')}`;
  P(`- ${who}${src ? ` — ${src} ${score}` : ''}`, `  - RO: “${q.attr('data-i18n-ro')}”`, `  - EN: “${q.attr('data-i18n-en')}”`);
});
P('');

P('## Contact', '',
  '- Phone / WhatsApp: +40 756 651 582 (https://wa.me/40756651582)',
  `- Facebook: ${FACEBOOK}`,
  `- Turistinfo listing: ${TURISTINFO}`,
  `- Google Maps: ${MAPS}`,
  '- There is no contact email.', '');

P('## Not published', '', '- Nightly price, exact street address, check-in / check-out times, cancellation and pet policies: ask the hosts on WhatsApp.', '');

await writeFile(join(ROOT, 'llms-full.txt'), lines.join('\n'));
console.log(`en/index.html and llms-full.txt written (${lines.length} lines) for ${ORIGIN}`);
