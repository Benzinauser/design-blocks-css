# Motion Atlas — Field Notes on Movement

A single-page composition that combines six motion techniques from the
repository's demo collection into one cohesive piece: a fictional motion
studio's field guide to the space between stillness and movement.

## The six movements

| № | Section     | Technique                                      | Borrowed from |
|---|-------------|------------------------------------------------|---------------|
| 01 | Hero        | Masked editorial line reveal (overflow masks, `power4.out` stagger) | `mask-animation-with-gsap-svg`, `the-policeswissted` (SplitText identity) |
| 02 | Field notes | Draggable infinite horizontal loop + inertia + rolling step counter + progress rail | `draggable-infinite-slider-gsaposmo` |
| 03 | Transit     | Pinned, scroll-scrubbed tracks drifting in opposite directions | `gsap-scrolltriggerdemo` |
| 04 | Manifesto   | Scroll-scrubbed `background-clip: text` fill | `text-scroll-and-hover-effect-with-gsap-and-clip` |
| 05 | Index       | Elastic capability rows (height elastic, width→height reinterpretation) | `elastic-accordion-gsap` |
| 06 | Outro       | Kinetic character line (SplitText chars) | `the-jamswissted`, `the-policeswissted` |

Ambient layer: slow orb drift + 36 simplex-noise dust motes
(`scrolling-rainbow...` pattern, heavily restrained).

## Motion grammar

- **Entrances** — `power4.out`, masks, ~1–1.2 s, small staggers.
- **Interaction** — elastic only as an accent (`elastic.out(1, 0.55–0.62)`),
  everything else `power3.out` at ~0.5 s.
- **Scroll** — `scrub` for everything scroll-coupled; nothing autoplays.
- **Reduced motion** — `prefers-reduced-motion` disables ambient, entrances,
  scrub reveals and elastic; content renders in its final state immediately.
  The reel and capability rows remain usable (user-initiated only).

## Progressive enhancement

Without JavaScript the page degrades gracefully: the reel is a wrapped static
grid (the loop applies `nowrap` only when live), manifesto lines are readable
ghost text, and no content is hidden behind animation.

## Running it

Open `dist/index.html` in a browser (or serve the folder, e.g.
`python3 -m http.server`). GSAP core + ScrollTrigger + Draggable load from
jsDelivr; InertiaPlugin and SplitText from the standard CodePen asset host;
simplex-noise from cdnjs — matching the CDN conventions used across the repo.

## Structure

- `src/` — source: `index.html`, `style.css`, `script.js`
- `dist/` — static copy for direct use

Files: index.html · style.css · script.js
## New experiments 53–60

These experiments deliberately extend the older repository techniques into new behavioral systems rather than repeating the Atlas composition:

| № | Experiment | Core behavior | Lineage |
|---|---|---|---|
| 53 | Magnetic fracture | Pointer proximity pulls a network apart while its connecting geometry follows | `gsap-grid` + spatial attraction |
| 54 | Velocity loom | Pointer velocity changes the phase and tension of a radial field | old continuous motion / procedural positioning |
| 55 | Path memory | Scroll rewrites a visible trail while an object follows the geometry | SVG path + ScrollTrigger |
| 56 | Phase collapse | Hover causes related characters to desynchronize rather than simply reveal | `the-jamswissted` / SplitText lineage |
| 57 | Pressure grid | Proximity compresses and rotates an entire spatial field | `gsap-grid` + measured geometry |
| 58 | Tidal panels | Scroll behaves like a tide moving a stack through changing spatial states | `gsap-scrolltriggerdemo` + stacked composition |
| 59 | Collision orbit | Orbiting elements exchange energy when their paths intersect | procedural motion + collision relationship |
| 60 | Reassembly grid | A spatial system remembers its original positions after dispersion | `elastic-accordion-gsap` + grid choreography |

These are intentionally not direct ports of the source experiments. The old projects are treated as a technical gene pool: the implementation vocabulary is reused, while the behavioral rule is changed.

