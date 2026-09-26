---
name: Yeison Gonzalez Portfolio
description: A bilingual one-page portfolio that looks and plays like a Game Boy game on its four-shade pixel LCD, framed in the console's gray and navy plastic.
colors:
  lcd-0: "#0f380f"
  lcd-1: "#306230"
  lcd-2: "#8bac0f"
  lcd-3: "#cadc9f"
  body: "#c9c5bf"
  body-2: "#b3aea6"
  body-ink: "#4a4d63"
  navy: "#1e2355"
  navy-2: "#2a3170"
  navy-ink: "#a9aedb"
  magenta: "#a3245f"
  magenta-hi: "#bd3272"
  led: "#e3453a"
  shell: "#d8d4ce"
  rubber: "#9d988f"
  dpad: "#2b2d3a"
  dpad-ink: "#6b6e80"
  bezel: "#4a4d63"
typography:
  display:
    fontFamily: "Pixelify Sans Variable, ui-monospace, monospace"
    fontSize: "clamp(3.5rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
  headline:
    fontFamily: "Pixelify Sans Variable, ui-monospace, monospace"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.05
  title:
    fontFamily: "Pixelify Sans Variable, ui-monospace, monospace"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Pixelify Sans Variable, ui-monospace, monospace"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Pixelify Sans Variable, ui-monospace, monospace"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Silkscreen, Pixelify Sans Variable, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: "0.04em"
  button:
    fontFamily: "Silkscreen, Pixelify Sans Variable, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  cap: "999px"
  bezel: "0.5rem"
  bezel-tail: "2rem"
  shell: "0.6rem"
  shell-tail: "3.5rem"
spacing:
  px: "4px"
  gutter: "20px"
  gutter-md: "32px"
  box: "24px"
  box-lg: "32px"
  heading-gap: "48px"
  heading-gap-md: "64px"
  section: "96px"
  section-md: "128px"
components:
  button-a:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.lcd-3}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "8px 20px 8px 10px"
    height: "48px"
  button-a-hover:
    backgroundColor: "{colors.magenta-hi}"
    textColor: "{colors.lcd-3}"
  button-b:
    backgroundColor: "{colors.lcd-3}"
    textColor: "{colors.lcd-0}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "8px 20px 8px 10px"
    height: "48px"
  button-b-hover:
    backgroundColor: "#dbe8b8"
    textColor: "{colors.lcd-0}"
  button-cap:
    backgroundColor: "rgb(15 56 15 / 0.35)"
    rounded: "{rounded.cap}"
    size: "28px"
  hud-nav:
    backgroundColor: "{colors.lcd-0}"
    textColor: "{colors.lcd-2}"
    typography: "{typography.label}"
    height: "64px"
  hud-nav-current:
    textColor: "{colors.lcd-3}"
  dialog-box:
    backgroundColor: "{colors.lcd-3}"
    textColor: "{colors.lcd-0}"
    rounded: "{rounded.none}"
    padding: "{spacing.box}"
  dialog-next-key:
    backgroundColor: "{colors.lcd-0}"
    textColor: "{colors.lcd-3}"
    typography: "{typography.label}"
    padding: "8px 12px"
  dialog-next-key-hover:
    backgroundColor: "{colors.lcd-1}"
  readout-panel:
    backgroundColor: "{colors.lcd-0}"
    textColor: "{colors.lcd-3}"
    rounded: "{rounded.none}"
    padding: "{spacing.box}"
  window-title-bar:
    backgroundColor: "{colors.lcd-0}"
    textColor: "{colors.lcd-3}"
    typography: "{typography.label}"
    padding: "12px 20px"
  inventory-slot:
    backgroundColor: "{colors.lcd-3}"
    textColor: "{colors.lcd-0}"
    rounded: "{rounded.none}"
    padding: "8px"
  hotbar-tray:
    backgroundColor: "{colors.navy-2}"
    padding: "12px"
  pocket-filter:
    backgroundColor: "{colors.navy-2}"
    textColor: "{colors.lcd-3}"
    typography: "{typography.label}"
    padding: "8px 10px"
  pocket-filter-hover:
    backgroundColor: "{colors.lcd-1}"
  pocket-filter-active:
    backgroundColor: "{colors.lcd-3}"
    textColor: "{colors.lcd-0}"
  equipped-badge:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.lcd-3}"
    typography: "{typography.label}"
    padding: "2px 6px"
  map-node:
    backgroundColor: "{colors.lcd-2}"
    textColor: "{colors.lcd-0}"
    typography: "{typography.label}"
    size: "56px"
  map-node-unreached:
    backgroundColor: "{colors.lcd-1}"
    textColor: "{colors.lcd-3}"
  map-node-current:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.lcd-3}"
  level-card-tab:
    textColor: "{colors.lcd-1}"
    typography: "{typography.label}"
    padding: "10px 16px"
  level-card-tab-active:
    backgroundColor: "{colors.lcd-0}"
    textColor: "{colors.lcd-3}"
  trophy-case:
    backgroundColor: "{colors.lcd-0}"
    padding: "{spacing.box}"
  trophy-pedestal-selected:
    backgroundColor: "{colors.lcd-1}"
    textColor: "{colors.lcd-3}"
  cartridge-shell:
    backgroundColor: "{colors.body-2}"
    padding: "8px 12px 12px"
    width: "176px"
  cartridge-title-strip:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.lcd-3}"
    typography: "{typography.label}"
    padding: "4px 6px"
  cartridge-title-strip-selected:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.lcd-3}"
  console-shell:
    backgroundColor: "{colors.shell}"
    rounded: "{rounded.shell}"
    padding: "16px 20px 40px"
    width: "22rem"
  console-bezel:
    backgroundColor: "{colors.bezel}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.bezel}"
    padding: "12px 16px 20px"
  console-screen:
    backgroundColor: "{colors.lcd-3}"
    textColor: "{colors.lcd-0}"
    rounded: "{rounded.none}"
  console-key:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.lcd-3}"
    typography: "{typography.label}"
    rounded: "{rounded.cap}"
    size: "44px"
  console-key-hover:
    backgroundColor: "{colors.magenta-hi}"
  console-dpad:
    backgroundColor: "{colors.dpad}"
    textColor: "{colors.dpad-ink}"
    size: "96px"
  console-rubber:
    backgroundColor: "{colors.rubber}"
    rounded: "{rounded.cap}"
    width: "40px"
    height: "10px"
  status-badge:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.lcd-3}"
    padding: "4px 8px"
---

# Design System: Yeison Gonzalez Portfolio

## Overview

**Creative North Star: "The Handheld Cartridge"**

The whole site is a Game Boy game rendered on its own pixel LCD. The visitor boots it, meets the character in a dialog box and a status screen, opens an inventory, walks a career level map, slots cartridges into the handheld and presses A to talk. It is not a normal page wearing a pixel font: every section is a game screen with its own field color and its own interaction, and every visual device comes from the handheld itself, either the four-shade screen or the plastic shell around it.

Two materials build everything. The **LCD** is four greens, darkest to backlit pale, overlaid with a faint dot-matrix grid; it carries text, screens and every in-game window. The **console plastic** is warm gray body, navy label ink and magenta A/B buttons; it carries the fields that are not screens (stack, projects, contact, footer) and the one action color. In projects the plastic becomes the handheld itself: a pale shell, a dark bezel, a D-pad and rubber keys around a live screen. Density is generous between sections (96–128px of field) and tight inside windows, like a handheld UI: small HUD labels, hard frames, dashed row dividers.

Nothing is smooth. Edges are hard, frames are notched pixel rectangles, motion moves in `steps()`, images render pixelated, fonts render unsmoothed. There are no gradients used as shading, no blur, no glass, no soft shadows and no light/dark theme: this is one world with one fixed palette.

**Key Characteristics:**
- Four LCD shades for screens and text, console plastic for the non-screen fields, magenta for action and selection.
- Each section owns a field: hero lcd-0, about lcd-3, stack navy, experience lcd-1, projects body gray, contact navy, footer body gray.
- Notched 4px pixel frames with empty corners instead of shadows or radii.
- Pixelify Sans for display and reading, Silkscreen uppercase HUD for labels, buttons, hints and meta.
- One icon system: authored bitmap `PixelIcon`s drawn as crisp-edged SVG rects; brand logos appear only as their LCD rendering.
- Stepped motion everywhere; each section enters with its own game move.

## Colors

A strict handheld palette: four LCD greens plus the console's gray, navy and magenta plastic, its hardware tones, and one red power light.

### Primary
- **Button Magenta** (magenta): the console's A button. Fills every primary action (A buttons, nav "Let's talk" CTA, skip link, the console's round A/B keys) and marks what is selected, equipped or live: the inventory and skill-slot selection frames and the ▶ pointer, the equipped ★ corner mark and "equipped" badge, the selected cartridge's title strip, the current career-map node and its hopping ▼ marker, the ▶ feature bullets on the project details, the blinking "in progress" status squares, and text selection.
- **Pressed Magenta** (magenta-hi): the A button's hover and the global focus outline (3px, offset 3px).

### Secondary
- **Label Navy** (navy): the console's printed-label ink, used as a deep field (stack, contact), for cartridge title strips, status badges, the "more on GitHub" plate, keyboard keys on the laptop, and body text on gray fields.
- **Raised Navy** (navy-2): raised plastic on the navy field: the main-stack hotbar tray and the unselected pocket filters; also the navy half of the console's bezel stripe.
- **Faded Label Ink** (navy-ink): secondary copy on navy (contact paragraph, inventory hints, "more" plate text) and the printed lettering on the console bezel.

### Neutral (the LCD)
- **Screen Black-Green** (lcd-0): the darkest shade. Hero and 404 field, nav bar, readout panels, window title bars, map board; primary text on pale screens.
- **Screen Dark** (lcd-1): experience field, map path track, unreached map nodes, secondary text on pale screens, dashed dividers on dark screens.
- **Screen Mid** (lcd-2): the lit accent inside screens: role line, heading highlights on dark fields, HUD labels on dark fields, reached map nodes and walked path, icon tint.
- **Backlight** (lcd-3): the pale shade. About field, dialog and status boxes, inventory slots, B buttons, text on every dark field.

### Neutral (the plastic)
- **Console Gray** (body): projects and footer field, cartridge label bed, laptop shell.
- **Shell Shadow Gray** (body-2): cartridge shell, laptop edges.
- **Gray Ink** (body-ink): secondary text on gray, heading highlight on the projects field, cartridge grip ridges (at 40%), printed lettering on the console shell.
- **Power Red** (led): only the power lights: the footer power dot, the laptop's LED and the console's power LED.

### Neutral (the console hardware)
- **Shell White** (shell): the handheld's pale shell in projects, one step lighter than the gray field it sits on.
- **Bezel Slate** (bezel): the dark screen bezel around the console's LCD (the same slate as Gray Ink, kept as its own hardware token).
- **D-Pad Black** (dpad): the cross of the D-pad.
- **D-Pad Arrow** (dpad-ink): the embossed ◀ ▶ arrows on the D-pad; they light to lcd-3 while pressed.
- **Rubber Gray** (rubber): the SELECT and START pills.

### Named Rules
**The Four Shades Rule.** Text and screens are drawn only in lcd-0 to lcd-3. The plastic colors (body, body-2, navy, navy-2) and the hardware tones (shell, bezel, dpad, dpad-ink, rubber) carry the fields and objects that are not screens; they never become screen content.

**The A Button Rule.** Magenta means "act", "selected" or "equipped". It fills primary actions and marks the current selection or live status (selection frames, equipped marks, the selected cartridge strip, current map node, ▶ bullets on projects, in-progress squares). It never decorates a neutral surface or colors body text; the printed bezel stripes (footer top, console screen bezel) are the handheld's own livery, not decoration.

**The Power Light Rule.** Power Red appears only as a power light: the footer power dot, the laptop LED and the console LED.

**The Screen Logo Rule.** Brand logos never appear in their own colors. They are rendered on the LCD: downsampled to a 24×24 canvas, quantized to the four shades with the lightest dropped so the slot's own screen shows through, and shown pixelated at 40–56px. Labels without a logo get an authored technique glyph instead.

**The Own Field Rule.** Every section owns one field color in this order: hero lcd-0, about lcd-3, stack navy, experience lcd-1, projects body, contact navy, footer body with a magenta and a navy bezel stripe (6px each, 6px apart) on top. Adjacent sections never share a field.

## Typography

**Display Font:** Pixelify Sans Variable (with ui-monospace, monospace)
**Body Font:** Pixelify Sans Variable
**Label/HUD Font:** Silkscreen 400 (with Pixelify Sans Variable)

**Character:** Pixelify reads as friendly, legible handheld text at every size, from a 6rem boot logo to 18px body; Silkscreen is the square uppercase system font of the HUD. Font smoothing is turned off so both render as pixels. A reading face outside the pixel family was tried and rejected: it broke the world's harmony.

### Hierarchy
- **Display** (700, 3.5rem → 4.5rem at sm → 6rem at lg, line-height 0.92): the name in the hero, dropped in like a boot logo. The 404 numeral uses the same voice (5rem → 7rem).
- **Headline** (700, 2rem → 3rem at sm, line-height 1.05): section headings, max width 48rem. The contact heading is the one larger exception (2.75rem → 3.75rem → 4.25rem, line-height 1), as the closing screen.
- **Title** (700, 1.5rem–2.25rem): sub-headings (strengths, education, "Main stack", "Inventory"), level card titles and the project details title (1.875rem → 2.25rem), the inventory readout name (1.875rem, line-height 1), the skill and education readout names (1.5rem → 1.875rem). The dialog's first page and the role line use 600 at 1.5–1.875rem; later dialog pages are 400 at 1.25rem → 1.45rem, line-height 1.625; the hero intro is 1.25rem → 1.35rem. Data-sheet values in level cards use 600 at 1.25rem.
- **Body** (400, 1.125rem / 18px, line-height 1.6; 16–18px in windows): default copy, list rows, status values. Measures are held at 44–70ch.
- **Lead** (400, 1.125rem → 1.25rem, line-height 1.625): intros, bios, section subtitles, level highlights.
- **Label** (Silkscreen 400, uppercase, letter-spacing 0.06em, 11px minimum, 12px default and for hints, 14px on buttons; tile names 9px on phones and 10px from 640px; 9px for the console's decorative printed lettering): nav links, buttons, window title bars, status keys, dates, hints, badges, tabs.

### Named Rules
**The Two Voices Rule.** Pixelify Sans is for display and reading; Silkscreen HUD is for labels, buttons, hints and meta. Never set a paragraph in Silkscreen and never set a HUD label in Pixelify. HUD text is 11px or larger, except inventory tile names (9px on phones, 10px from 640px) and the console's decorative printed lettering (9px).

**The Two-Tone Heading Rule.** Section headings are one sentence split in two: the title at 700 in the field's primary text color, the highlight at 500 in its secondary shade. Per field: about lcd-0 / lcd-1; stack lcd-3 / lcd-2; experience lcd-3 / lcd-2 inside an lcd-0 plate framed in lcd-3; projects navy / body-ink (subtitle body-ink); contact lcd-3 / lcd-2. The hero name is single-tone lcd-3 with the role line in lcd-2 below it.

**The Meta Trails Rule.** Nothing sits above a heading. Meta (world code, company, period, category, status, "current") goes below the title as a trailing HUD row or as an inline badge.

## Layout

A single centered column (`container-page`: max 70rem, 20px side gutter, 32px from md) stacked as full-bleed field bands. Sections breathe with 96px of vertical field (128px from md; contact 144px); section headings sit 48px (64px at md) above their content. The fixed HUD nav is 64px tall and sections scroll-snap under it with a 4rem margin.

Content inside a section is a two-column game screen on large screens and a single stack below `lg` (1024px): hero 1.1fr / 0.9fr (text left, laptop right); about 1.3fr / 1fr (dialog box, status screen); strengths 20rem tablist / readout from md; inventory 1.35fr / 1fr with a sticky readout; level-card skills 1.4fr / 1fr (slots, history readout); education 1fr / 1.2fr (trophy case, detail window); projects 22rem console / 1fr details; contact 1.35fr / 1fr. The main-stack hotbar runs 3 columns, 5 from sm, 10 from lg, above the inventory; the inventory grid runs 4 columns, 5 from md; level-card skill slots run 3, 4 (sm), 6 (md), 4 (lg); the trophy case runs 3 pedestals. Cartridges sit in a single horizontal rack (144px wide, 176px from sm) that scrolls sideways above the console. On one column, picking an inventory item scrolls its readout into view.

**The Grid Only On Glass Rule.** The dot-matrix `lcd-grid` (1px lines on a 4px cell) appears only on LCD surfaces: hero and 404 (pale ink at 4.5%), about (dark ink at 7%), experience (dark ink at 12%) and cartridge concept art (on the rack labels and the console screen). Plastic fields (navy, gray) and the console hardware stay flat.

## Elevation & Depth

The system is flat. Depth comes from framing and field contrast, never from blur or ambient shadow: a window is a flat plate of one shade inside a notched frame of a contrasting shade, sitting on a field of a third. Frames choose the contrasting shade for their context (lcd-0 frame on pale boxes, lcd-3 frame on dark boxes over dark or navy fields, lcd-1 frame on the dark readout over the pale field, navy frame on buttons over gray, lcd-2 on the mobile menu and 404 box).

### Shadow Vocabulary
- **Pixel frame** (`box-shadow: 0 -4px 0 0 F, 0 4px 0 0 F, -4px 0 0 0 F, 4px 0 0 0 F`): the notched window frame. Four hard edges, corners left empty. Selection frames use the same construction at 3px (magenta on the selected hotbar, inventory and skill slot; lcd-0 on unselected skill slots; lcd-3 around map nodes).
- **Key travel** (`box-shadow: … , 4px 8px 0 0 F` added to the frame): the only drop in the system, under `.btn`. On press the drop is removed and the button moves down 4px.

### Named Rules
**The Notch Not Shadow Rule.** Separation is a hard 4px frame with empty corners. No soft, blurred or offset shadows anywhere except the button's key-travel drop.

**The Flat Plastic Rule.** The 3D laptop and the console shade their parts with flat plastic tones (one color per face or part), never gradients.

## Shapes

Everything on screen is square pixels: windows, frames, slots, tabs, badges and buttons have no radius. The only round shapes are the round A/B cap inside a button and the handheld hardware itself, which is round by nature: the console shell's softened corners with the long bottom-right curve (shell / shell-tail), the matching bezel curve (bezel / bezel-tail), the round A and B keys, the pill SELECT and START rubbers and the pill speaker slots, all tilted 25° like the real keys. The LCD screen inside the bezel stays square. Recurring silhouettes: the notched frame; the cartridge with its clipped top-right corner (16px diagonal on the rack) and grip ridges; dashed 2px dividers between list rows; 3px dot-dash map track; the D-pad cross. Icons and images are rendered at integer pixel scales (2px or 3px per pixel) with `crispEdges` and `pixelated` rendering.

## Components

### Buttons
Tactile console keys that physically press.
- **Shape:** square plate in a notched frame with the key-travel drop; a round cap (28px, full radius, translucent lcd-0) holds the letter "A" or "B". Min height 48px (40px in cards and footer, 36px in the nav).
- **A (primary):** magenta plate, lcd-3 text, Silkscreen 14px uppercase, 8px 20px 8px 10px padding. Hover: magenta-hi.
- **B (secondary):** lcd-3 plate, lcd-0 text; hover brightens to a backlight flare (#dbe8b8). An icon (GitHub, ▲) may replace the cap.
- **Press:** moves down 4px and loses its drop, in `steps(2)` over 90ms.
- **Frame color** follows the field: lcd-3 on dark and navy fields, navy on gray.

### HUD Navigation
- **Style:** fixed lcd-0 bar, 64px, 4px lcd-1 bottom border. Left: initials tile (lcd-3 on lcd-0) and the name in HUD. Right: language code, A-button CTA, menu toggle.
- **States:** links are lcd-2 HUD 12px; hover shows the ▶ cursor and lifts to lcd-3; the current section (scrollspy at the viewport's middle) is lcd-3 with a blinking ▶.
- **Mobile (below lg):** a pale lcd-3 menu window with an lcd-2 frame, 48px rows, static ▶ on the current section; Escape closes.

### Dialog Box (about)
A paged RPG text box: lcd-3 plate, lcd-0 frame, 24–32px padding, at least 19rem tall. Page one is the quote, each following page one paragraph of the bio. Each page types out two characters every 30ms (the first once the section has entered), followed by a blinking block cursor. A footer row holds an lcd-1 HUD page counter ("Page 2/4") and a next key (lcd-0 plate, lcd-3 HUD label and blinking ▼, lcd-1 on hover); the key, a click anywhere on the box, or Enter on the key turns the page, and after the last page the key reads "restart" and the dialog starts over. The page container is `aria-live`, and every page carries its full text for screen readers.

### Status Screen (about)
A window with an lcd-0 title bar (HUD label left, initials right) over a definition list: HUD keys in lcd-1 (7–8.5rem column), 17px values, dashed lcd-2 row dividers.

### Strengths Move List
A vertical tablist in a pale framed window (arrow keys move); the selected row inverts to lcd-0 with a ▶ cursor. The readout is a dark lcd-0 panel (lcd-1 frame) with the title in lcd-2 and a blinking ▼.

### Inventory (stack)
The stack is played as equipment, in two parts that share one readout. All data comes from the CV at build time: a tool's uses are the roles whose stack or written achievements name it.
- **Main stack hotbar:** the featured tools as a listbox of lcd-3 slots in a navy-2 tray. Each slot holds the LCD logo (Screen Logo Rule), a 9px HUD name and a row of five 6px pips, one filled per CV role that used the tool (unfilled pips at 20%). A featured tool with no CV role shows a 9px lcd-1 HUD marker instead of pips: "in projects" when a project uses it, otherwise "in my stack". The selected slot lifts 4px and takes the 3px magenta frame.
- **Pocket filters:** a toolbar of HUD toggles (All, each skill group, Techniques): navy-2 with lcd-3 text, lcd-1 on hover, the pressed one lcd-3 with lcd-0 text and a ▶. Switching pocket keeps the selection inside it, falling back to the pocket's most-used item.
- **Inventory grid:** square lcd-3 slots, each with the LCD logo or, for techniques, an lcd-1 technique glyph, and a two-line 9px HUD name (long words soft-hyphenated). Hover brightens to the backlight flare (#dbe8b8); featured tools carry a small magenta ★ in the corner; the selected slot gets the 3px magenta frame and a magenta ▶ pointer. Arrow keys move in two dimensions.
- **Readout:** lcd-0 plate, lcd-3 frame, sticky on desktop and `aria-live`. The item's art on an lcd-3 tile, its name, the pocket in lcd-2 HUD, a magenta "equipped" badge with ★ for featured tools, lcd-2 pips, then "used in N roles · since YEAR" and the year · role · company list; items with no CV use show their group description instead. Projects that use it follow under a dashed lcd-1 divider.
- It opens on the most-used item.

### Career Level Map (experience)
Worlds are companies, stages are roles (1-1 is the oldest). A framed lcd-0 board shows a dot-dash lcd-1 track whose walked part fills lcd-2 in `steps(8)`. Nodes are 48–56px squares framed 3px lcd-3: unreached lcd-1, reached lcd-2, selected magenta with a hopping magenta ▼ above; the current role shows a ★. World labels sit above the first node of each world, role titles below (from md). Each node is a tab; its level card is a pale lcd-3 window (lcd-0 frame) with the title, a "current" badge, a trailing HUD meta row and prev/next arrow keys (lcd-0 squares), then a row of card tabs over a 4px lcd-0 rule. Arrow keys move between tabs.
- **Card tabs:** HUD labels in lcd-1 (lcd-0 on hover); the active tab fills lcd-0 with lcd-3 text and a ▶. The skills tab carries its count.
- **Achievements:** metric chips (lcd-0 with an lcd-2 ★) and ▶ bullets in lcd-1, held to 70ch.
- **Skills:** the role's tools as square lcd-3 equipment slots, each framed 3px lcd-0 (magenta when selected, backlight flare on hover), holding the LCD logo or the technique glyph and a 9px HUD name. Beside them an unframed lcd-0 readout (`aria-live`) gives the picked skill's "used in N roles · since YEAR" and its full year · role · company history under a dashed lcd-1 divider, with this card's role in lcd-3 and the others in lcd-2. The first skill is picked whenever a level opens.
- **Details:** the role's data sheet, a two-column list with dashed lcd-2 dividers: lcd-1 HUD keys over 1.25rem values for company, period, computed duration, achievement and skill counts, and milestones.

### Trophy Case (education)
A tablist on an lcd-0 plate framed in lcd-3, one pedestal per entry in three columns: a 6× pixel glyph (the `trophy` cup in lcd-2 for the degree, the `diploma` scroll in lcd-3 for certifications) over a small lcd-1 plinth, the short name at 15px lcd-3 and the kind in lcd-2 HUD. The selected pedestal fills lcd-1, its plinth lights lcd-2 and its glyph rises 4px. Each tab's accessible name is the full title. Beside it, a pale lcd-3 detail window (lcd-0 frame) shows the full title, the institution in lcd-1, a kind badge (lcd-0 with glyph) and a blinking ▼ in the corner. Arrow keys move between pedestals.

### Cartridge Rack and Handheld Console (projects)
The projects are cartridges you slot into a handheld.
- **Rack:** a horizontal tablist of small cartridges (body-2 shell, clipped 16px top-right corner, two grip ridges in body-ink at 40%, a body-gray label bed with the concept art and a navy 9px HUD title strip). Hover lifts a cartridge 6px; the inserted one rides 12px up and its strip turns magenta. Arrow keys move along the rack.
- **Console:** a CSS handheld at most 22rem wide in shell white. From top to bottom: a printed on/off rail with the inserted cartridge's name; the bezel-slate screen bezel with a magenta and navy-2 stripe either side of its printed lettering and a power-red LED; a square lcd-3 screen (10:9) showing the inserted cartridge's concept art with an lcd-0 "concept" caption; a navy "YG portfolio" wordmark; the controls; and a tilted speaker grille of six pill slots.
- **Controls:** a D-pad cross whose ◀ ▶ cycle cartridges (arrows in dpad-ink, lcd-3 while pressed); round magenta B and A keys (44px, magenta-hi on hover, 2px press), B stepping back, A opening the project's link or, without one, flashing a blinking "coming soon" on an lcd-0 screen for 1.6s; SELECT and START rubber pills, START linking to GitHub.
- **Boot:** inserting a cartridge plays a boot splash: the screen fills lcd-3 and the title drops in from above in `steps(8)`, then the screen clears in `steps(6)` over 1.1s. A visually hidden `role=status` line announces the inserted cartridge and "coming soon".
- **Details panel:** the selected cartridge's title (1.875rem → 2.25rem), category in body-ink, a navy status badge with a blinking magenta square for "in progress" (lcd-2 when live), description, magenta ▶ feature bullets, the stack as 2px navy outlined tags, and A/B buttons (navy frames) when a link or repo exists.

### Channels Window (contact)
An lcd-0 window framed lcd-3 with a pale lcd-3 title bar. Rows: pixel icon (lcd-2), HUD channel name, 17px value; hover and focus fill lcd-1 and show a ▶. The email row has a copy key that swaps to a ✓ bitmap and announces "copied" for 1.8s. A dashed divider precedes the live Bogotá clock.

### 3D Laptop (hero)
A CSS 3D open laptop in console plastic: gray shell faces, navy keys, a magenta latch on the deck front, a red power LED, and a pale LCD screen showing four-shade code bars. It idles in a slow spin (one turn per 22s), can be dragged to spin with inertia, and stops idling under reduced motion. It sits on a backlight pool quantized into hard rings.

### Icons
One system only: `PixelIcon`, authored bitmaps drawn as crisp-edged SVG rects in `currentColor` at an integer scale (1px for inline marks, 2–3px for UI, 4–6px for slot and trophy art). The set: cursor ▶ and ◀, ▼, ▲, external, mail, copy, check, menu, close, star, trophy (cup), diploma (scroll), spark (a diamond gem, the fallback glyph), lock, cart, grid, chart, pin; the technique set (boxes, exchange, layers, hook, split, cycle, magnifier, flag) for skills with no brand logo; and GitHub, LinkedIn and WhatsApp marks redrawn on the grid. Brand logos for tools are the one exception to hand-drawn art, and they follow the Screen Logo Rule.

### Motion
Every animation is stepped. Loops: `blink` (1.1s, steps(1)) on cursors, ▼ markers and status squares; `hop` (0.9s, steps(1), 6px) on the current map marker. Selection lifts move in 150ms `steps(2)`: hotbar slots and trophies rise 4px, rack cartridges 6px on hover and 12px when inserted. Section entrances play once when the section scrolls in, and only when JavaScript is running: hero boot drop (1300ms, steps(13)) then blink-on for the rest (240ms, staggered 120ms); about dialog opens row by row (360ms, steps(6)) and types its first page after 380ms; stack slots pop (240ms, steps(3), 45ms stagger); map nodes light up (300ms, steps(3), 160ms stagger); rack cartridges insert from 48px below (420ms, steps(6), 140ms stagger); contact flashes twice like a level clear (520ms, steps(1) invert). The console's boot splash replays on every cartridge change. Under reduced motion everything is shown static, the typewriter prints instantly, the boot splash is skipped and scrolling is not smooth.

## Do's and Don'ts

### Do:
- **Do** draw text and screens only in the four LCD shades, and give non-screen fields console plastic (body, navy).
- **Do** give each new section its own field, keeping adjacent fields different and following the hero lcd-0, about lcd-3, stack navy, experience lcd-1, projects body, contact navy order.
- **Do** use magenta for primary actions and for the current selection, equipped or live status, and nothing else.
- **Do** frame windows with the notched 4px pixel frame in the shade that contrasts with both plate and field.
- **Do** set reading text in Pixelify Sans (18px body, 17–18px in windows) and every label, button, hint and meta line in Silkscreen HUD uppercase at 0.06em, 11px or larger.
- **Do** split section headings into two tones per field and put meta below the title as a trailing HUD row or badge.
- **Do** draw every icon as a `PixelIcon` bitmap at an integer pixel scale, and show brand logos only as their four-shade LCD rendering.
- **Do** move in `steps()`, give each section its own entrance, and show everything static under reduced motion.
- **Do** render images pixelated and keep dot-matrix grids on LCD surfaces only.

### Don't:
- **Don't** use smooth gradients, blur, glass, transparency-as-depth or soft shadows.
- **Don't** add drop shadows beyond the button's key-travel drop.
- **Don't** round corners on screens, windows, frames, slots, tabs or buttons; round shapes belong only to the button cap and the handheld hardware (shell, bezel, A/B keys, rubbers, speaker slots).
- **Don't** add a light/dark theme toggle; the palette is fixed.
- **Don't** put an eyebrow or kicker above a heading.
- **Don't** use magenta decoratively on neutral surfaces or as a text color for body copy.
- **Don't** use Power Red for anything but a power light (footer dot, laptop LED, console LED).
- **Don't** mix in glyph or font icons, or third-party icon sets; redraw marks on the pixel grid.
- **Don't** show a brand logo in its own colors.
- **Don't** lay the dot-matrix grid over navy or gray plastic fields or the console hardware.
