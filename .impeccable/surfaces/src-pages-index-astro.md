---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/en/index.astro","src/pages/404.astro"]
---

# Portfolio home (ES `/` and EN `/en`)

Scope: the whole bilingual one-page portfolio (hero, about, stack, experience + education, projects, contact, footer) plus the 404. Visitor mode: Experience, with contact as the conversion: the site itself is the portfolio piece, played like a console game.

Audience: remote-hiring recruiters and freelance clients, equal weight, arriving from a link and deciding fast whether to reach out. Proof: CV facts only (7+ years, +90% performance via microfrontends, team of 3, Junior → Frontend Architect). Projects are AI products in progress, shown as labeled concept art. No photo, no CCxC/diggi screenshots, no invented clients, scores or achievements beyond the CV.

Memorable moment: the name drops in like a handheld's boot logo; then the career plays as a level map you can walk through.

## Direction contract

THESIS: The portfolio is a Game Boy game running on its pixel LCD. It refuses both the flat all-dark dev page it replaces and the lazy "pixel font on a normal site" costume: every section is a game screen with its own field and its own interaction.

OWN-WORLD: The four-shade DMG LCD greens (#0f380f, #306230, #8bac0f, pale backlight #cadc9f) with a faint dot-matrix pixel grid, plus the console's plastic: warm gray body, navy-indigo label ink as the deep field, magenta A/B buttons as the only action color. Pixelify Sans for all text, Silkscreen for HUD labels and buttons; notched pixel borders, stepped (steps()) motion, authored pixel-art SVG icons, no smooth gradients, blur or glass.

STORY: The visitor boots the game, meets the character (dialog box bio and stat screen), opens the inventory to see what he uses and where, plays through the career map from 1-1 to Frontend Architect, browses the cartridges, and presses A to talk.

FIRST VIEWPORT: Darkest-green LCD field under a HUD nav bar with a ▶ menu cursor. Left: the name in large pixel type dropping in stepwise like a boot logo, role line, intro, magenta (A) "Let's talk" and (B) "View experience" buttons, status row with live Bogotá time. Right: the 3D laptop recolored as console plastic with an LCD screen, still draggable.

FORM: seed key f63091de, candidate 4 of the grounded Game Boy list (the LCD dot-matrix screen as the whole medium), user-selected over the DMG-console pick. Field sequence pinned by the user and translated to the world: hero darkest LCD, about pale LCD, stack navy console field, experience dark LCD, projects gray console body, contact navy drenched. Signature interactions: explorable inventory (tech → roles and years from CV data), navigable career level map with XP bar, drag-to-spin laptop. Motion grammar: stepped pixel motion; each section enters with its own move (boot drop, typewriter dialog, slots popping in, map drawing, cartridges inserting, screen flash); reduced motion shows everything static.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
