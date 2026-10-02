---
name: Green View Rarău
description: Dusk haze over an A-frame in Bucovina — slate-teal ground, mist type, warm-wood amber.
colors:
  ink-0: "#081215"
  ink-1: "#0d1a1e"
  ink-2: "#142529"
  ink-3: "#1d3338"
  mist-1: "#5f838c"
  mist-2: "#93b2b8"
  mist-3: "#c9d8da"
  snow: "#f2f6f6"
  fog: "#dfe8e9"
  fog-2: "#d2dddf"
  slate: "#3f5b63"
  amber: "#e9a23b"
typography:
  display:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.1rem, min(7.4vw, 13.2vh), 8.4rem)"
    fontWeight: 400
    lineHeight: 0.93
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.1vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.032em"
  title:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.3
rounded:
  field: "12px"
  tile: "14px"
  card: "clamp(20px, 2vw, 28px)"
  frame: "clamp(24px, 3.2vw, 52px)"
  pill: "999px"
spacing:
  edge: "clamp(10px, 2.2vw, 36px)"
  gutter: "clamp(16px, 4vw, 56px)"
  section: "clamp(88px, 11vw, 168px)"
components:
  button-primary:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.ink-1}"
    rounded: "{rounded.field}"
    padding: "0 1.6rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "#ffffff"
  field:
    backgroundColor: "rgba(4, 10, 12, 0.42)"
    textColor: "{colors.snow}"
    rounded: "{rounded.field}"
    height: "60px"
  chip:
    textColor: "{colors.mist-3}"
    rounded: "{rounded.pill}"
    height: "40px"
  segmented-tab-active:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.ink-1}"
    rounded: "11px"
    height: "44px"
---

# Design System: Green View Rarău

## Overview

**Creative North Star: "Dusk Through the Glass Gable"**

The cabin seen at blue hour through mountain haze, framed like the A-frame's own window. The page is a dark slate-teal room; photographs are the windows, held inside rounded inset frames with a pale translucent rim. Type is one light, tightly tracked grotesk at two volumes: white for what is said, mist for what follows it. Warmth comes only from the wood: a single amber, used the way a lit window is used in a dusk photograph.

Density is low and spacious. Sections breathe on large vertical rhythm, and one light "morning fog" passage (reviews and FAQ) breaks the dark run before the page closes on a dark framed footer with the name set as a full-width wordmark. The world comes from the owner's chosen Dribbble cabin reference (misty teal photography, rounded inset frame, big grotesk headline with a muted middle line, dark glass booking card, white buttons, small amber accent).

**Key Characteristics:**
- Full-bleed photography inside a rounded inset frame with a translucent rim.
- Two-tone headings: statement in snow, continuation clause in mist at the same size.
- Dark glass panels with darker inner "well" fields, never nested cards.
- Solid white buttons with near-black text; no coloured buttons.
- Amber appears on the mark, map pins, review stars and focus rings, and nowhere else.

## Colors

A cool, low-chroma slate-teal ramp with one warm wood accent.

### Primary
- **Lamplit Wood Amber** (amber): the brand mark, map points of interest, the location pin, focus outlines and text selection. A darker step (`#b97512`) colours stars on the fog ground for contrast.

### Neutral
- **Night Gable** (ink-0): deepest well, lightbox backdrop.
- **Dusk Slate** (ink-1): the page ground and footer frame.
- **Raised Slate** (ink-2): spec tiles, icon tiles, map ground, hover rows.
- **Field Slate** (ink-3): active list rows, calendar hover, stepper buttons.
- **Haze** (mist-1): decorative lines, map contours, scrollbar thumb. Not for text.
- **Mist** (mist-2): secondary text on dark (≈7:1 on Dusk Slate); continuation clauses in headings.
- **Pale Mist** (mist-3): muted display text, wordmark, nav-adjacent text.
- **Snow** (snow): primary text on dark, button fill, active segmented tab.
- **Morning Fog** (fog) / **Fog Shade** (fog-2): the one light passage and its control wells.
- **Wet Slate** (slate): secondary text on fog (≈5.6:1).

### Named Rules
**The Lit Window Rule.** Amber is a light source, not a surface: marks, pins, stars, focus. Never a button fill, section ground, or heading colour.

**The Two Grounds Rule.** The page has exactly two grounds: Dusk Slate and Morning Fog. Photographs supply all other colour.

## Typography

**Display / Body Font:** Host Grotesk (variable 300–500, self-hosted, latin + latin-ext), falling back to the system UI sans.

**Character:** One grotesk carries everything; hierarchy comes from size and tone, not from a second family or heavy weights.

### Hierarchy
- **Display** (400, clamp(3.1rem, min(7.4vw, 13.2vh), 8.4rem), 0.93): the hero headline only, three lines, middle line in translucent mist.
- **Headline** (400, clamp(2rem, 4.1vw, 3.5rem), 1.04): section headings; an about-statement variant runs at clamp(1.75rem, 3.5vw, 3.15rem) / 1.12.
- **Title** (500, 1.2–1.35rem): sub-blocks (Interiorul, Liniște), POI names in the feature panel.
- **Body** (400, 1.0625rem, 1.55): paragraphs at ≤46–62ch; secondary paragraphs in mist.
- **Label** (400, 0.78–0.85rem): field keys, spec keys, footer column labels. Sentence case, no tracking, no uppercase.

### Named Rules
**The Second Clause Rule.** A heading may continue into a second sentence set in mist at the same size. That continuation replaces subtitles and eyebrows; there are no kickers above headings.

**The No Bold Rule.** Weights stop at 500. Emphasis is size or tone.

## Layout

Content sits in a 1360px wrap with a fluid gutter (16–56px). Photographic stages (hero, seasons, footer frame) instead run edge to edge with a small fluid edge inset (10–36px) so the rounded frame and its rim read against the window. Two-column sections use 5/7 or 5/6 splits with the heading on the left (sticky for the amenities list); everything stacks to one column at 900px. Section rhythm is `section` (88–168px) with lighter top padding where a section follows its sibling on the same ground. The hero frame is a grid: headline across the top, copy bottom-left, booking card bottom-right rising beside the headline's last line; below 900px the card drops under the copy.

## Elevation & Depth

Depth is atmospheric rather than stacked: backdrop blur over photography, tonal steps of the slate ramp, and long soft drop shadows only under floating glass (booking card, nav bar, modal, FAB).

### Shadow Vocabulary
- **Frame drop** (`0 30px 80px -40px rgba(0,0,0,0.45)`): under the hero frame.
- **Glass float** (`0 24px 60px -30px rgba(0,0,0,0.7)` + `0 0 0 1px rgba(242,246,246,0.07)`): booking card, season text panel.
- **Bar** (`0 12px 32px -16px rgba(0,0,0,0.6)`): the scrolled nav.

### Named Rules
**The Rim Not Border Rule.** Photographic frames get an inset translucent rim (`inset 0 0 0 4–7px rgba(222,234,236,0.34)`), never an opaque border.

## Shapes

Generous, soft rectangles in four sizes: frames (24–52px) for photographic stages, cards (20–28px) for glass panels and photos, tiles (14px) for spec items, fields and buttons (12px). Pills (999px) for chips and the language toggle; circles for icon buttons and the FAB. Lists are separated by 1px hairlines, never boxed.

## Components

### Buttons
- **Shape:** gently rounded (12px), 52px tall (48px in the nav).
- **Primary:** Snow fill, Dusk Slate text, 500 weight, soft drop shadow; hover goes pure white, active nudges down 1px.
- **Icon button:** 44px circle, 8% snow fill with a hairline; hover 16%.
- **Chip:** pill outline in hairline, Pale Mist text; hover fills Field Slate.

### Cards / Containers
- **Glass panel:** rgba(11,22,26,0.56–0.6) with 18–22px backdrop blur, 1px 7–8% snow hairline, card radius, 20–30px padding. Used for the booking card, season text, POI feature, modal.
- **Spec tile:** Raised Slate fill with a hairline, 14px radius, 16–18px padding.

### Inputs / Fields
- **Well field:** rgba(4,10,12,0.42) fill inside glass, 12px radius, 60px tall, label above value; hover deepens and adds a hairline. Empty values read at 72% snow, set values at full snow.
- **Focus:** 2px amber outline, 3px offset everywhere (dark ink outline on the fog ground).

### Navigation
- Brand mark + name left, text links centre-right with an underline that draws in from the left on hover, pill language toggle, white "Rezervare" button. Over the hero it floats inside the frame with no fill; after 40px of scroll it becomes a glass bar pinned 10px from the top. Below 1024px the links move into a glass sheet behind a two-line burger.

### Inset Photo Frame (signature)
A full-bleed photograph with a rounded frame inset by `edge`, carrying the translucent rim. The hero and the seasons stage use it; the footer repeats the shape on the dark ground.

### Booking Card (signature)
The whole booking flow lives in the hero card. From top to bottom: arrival and departure fields; a summary well that shows the rules (minimum 2 nights, 8–16 guests) before dates are picked and the stay itself after ("3 nopți · 8 persoane", the weekday range, and a "Schimbă" pill); a guest stepper with 44px buttons; and the white WhatsApp button with a one-line note under it. With no dates, the button opens the picker instead of sending. Other booking buttons on the page scroll to this card and open the picker.

### Date Picker
A glass panel, 340px wide on desktop, that opens to the left of the booking card. On phones (≤900px) it is a bottom sheet over a dimmed page. One month per view. Past days and departure days under the 2-night minimum are disabled. The chosen range is a snow-filled pill from arrival to departure, with a lighter band in between that previews the range on hover. A small mist dot marks today. Arrow keys, Home and End move between days, and Escape closes the picker. It closes on its own once the departure date is picked and hands focus to the WhatsApp button.

### Segmented Tabs
Glass track (16px radius, 5px padding) holding 44px tabs; the active tab is Snow with Dusk Slate text.

## Do's and Don'ts

### Do:
- **Do** colour-grade atmosphere photography toward the dusk world with `tools/mist.mjs` (default preset for the hero, `season` preset for supporting mood photos); keep the wood warm.
- **Do** leave the gallery's documentary photos of the cabin (rooms, kitchen, exterior) in true colour; guests judge the property from them.
- **Do** write headings as statements and use the mist continuation clause for the supporting line.
- **Do** keep every interactive control at least 44px tall.
- **Do** keep icons from the one 1.6px round-joined stroke family in the sprite.

### Don't:
- **Don't** add kickers, eyebrows or numbered section labels above headings.
- **Don't** use amber as a fill for buttons, grounds or headings (The Lit Window Rule).
- **Don't** lay out content as grids of same-size icon cards; use hairline lists and spec tiles.
- **Don't** introduce a second typeface or weights above 500.
- **Don't** use Unicode glyphs (★ × ‹ ›) as icons; use the SVG sprite.
