# Image credits

Cabin photos (`images/p*.jpg` / `.webp`, `images/og.jpg`) are the property owner's own.

`images/hero/<photo>*` (p09, p14, p20, p24, p37) are the owner's photos (originals from the first
commit, e.g. `da8ac85:images/p37.jpg`) colour-graded to a dusk/mist look by `tools/mist.mjs`
(cool slate-teal split-tone that keeps the wood warm, plus height-weighted haze), plus
warm interior lamplight behind the glass gable (p14, p20, p24, p37) (`lamps()` in the same file; added at the
owner's request on 2026-10-02 for an evening look). The `-haze.webp` files are tiny blurred copies used as the misty surround. No objects added or removed; regenerate with the command in that file's header.

## Surroundings section (`images/poi/`)

All from Wikimedia Commons, resized and re-encoded to WebP for the site. Each is
credited in the page itself (the "Foto:" line in the map panel links to the source).

| File | Subject | Author | Licence | Source |
|------|---------|--------|---------|--------|
| `pietrele-doamnei.webp` | Pietrele Doamnei | Țetcu Mircea Rareș | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:RO_SV_Pietrele_Doamnei_(2).JPG |
| `transrarau.webp` | Transrarău road (DJ175B) | Țetcu Mircea Rareș | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:RO_SV_Transrarau_(9).JPG |
| `cheile-moara-dracului.webp` | Rarău massif seen from Transrarău (stand-in — no free photo of the gorge exists) | Gikü | CC0 | https://commons.wikimedia.org/wiki/File:RO.SV.C%C3%A2mpulung_Moldovenesc_-_Mun%C8%9Bii_Rar%C4%83u,_vedere_de_pe_Transrar%C4%83u_-_may_2026_-_01.jpg |
| `slatioara.webp` | Carpathian landscape near Slătioara | GerritR | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Karpatenlandschaft_bei_Slatioara.JPG |
| `muzeul-arta-lemnului.webp` | Wood Art Museum, Câmpulung Moldovenesc | Tud0011 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Muzeul_Arta_Lemnului_C%C3%A2mpulung_Moldovenesc_2022.jpg |
| `partia-rarau.webp` | Rarău massif in winter | Liviu Mihai Șeiciuc | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Rar%C4%83u_massif_in_winter.jpg |
| `pojorata.webp` | Pojorâta village | Mihai Burlacu | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Comuna_Pojor%C3%A2ta,_Romania_-_panoramio_(1).jpg |
| `mocanita-moldovita.webp` | Mocănița Huțulca tourist train | Jan Pešula | CC0 | https://commons.wikimedia.org/wiki/File:Mocanita_Hutulca_tourist_train.jpg |

CC BY-SA licences: https://creativecommons.org/licenses/by-sa/4.0/ · https://creativecommons.org/licenses/by-sa/3.0/
All CC BY-SA images here were resized and converted to WebP; no other modifications.

## Seasons section (`images/seasons/`)

| File | Source | Licence |
|------|--------|---------|
| `spring.webp` `summer.webp` `autumn.webp` | Unsplash | Unsplash Licence (free use) |
| `winter.webp` | Pexels | Pexels Licence (free use) |

All four were colour-graded with the lighter `season` preset of `tools/mist.mjs`
(cooler, quieter, same subject); the ungraded files are in git history before the
`redesign/mist` branch.

## Notes for the owner

- `cheile-moara-dracului.webp` is a stand-in Rarău-massif view — replace it with a real
  photo of the gorge if you have one.
- `partia-rarau.webp` is a winter Rarău shot, not the ski slope itself.
- Replacing any of these is a one-line change: swap the file and the `data-img` /
  `data-credit` on the matching `.poi-item` in `index.html`.
