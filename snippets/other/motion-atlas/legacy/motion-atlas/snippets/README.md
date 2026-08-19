# Snippets — Motion Atlas

Single-file animation snippets in a shared visual language. Each is
self-contained (inline CSS + JS, CDN-only dependencies) — open it directly in
a browser or paste it anywhere.

| # | File | Animation design |
|---|------|------------------|
| 01 | `01-hero-line-mask.html` | Masked line reveal — headline lines rise out of overflow masks, `power4.out`, staggered |
| 02 | `02-reel-infinite-drag.html` | Draggable infinite loop — `horizontalLoop` + inertia, rolling step counter, progress rail |
| 03 | `03-transit-opposite-drift.html` | Pinned opposite drift — section pins while two tracks scrub in opposing directions |
| 04 | `04-manifesto-clip-fill.html` | Scrubbed clip-fill text — gradient fills each line against a ghost outline |
| 05 | `05-index-elastic-rows.html` | Elastic rows — one open at a time, body height springs with an elastic ease |
| 06 | `06-outro-char-rise.html` | SplitText character rise — one line, per-char ascent with slight rotation |
| 07 | `07-blur-resolve-text.html` | SplitText chars resolve from blur into sharpness with a small stagger |
| 08 | `08-scramble-decode-text.html` | Every line decodes from noise into its message via ScrambleTextPlugin |
| 09 | `09-auto-marquee.html` | Seamless auto-marquee, middle row counter-direction, hover pauses the strip |
| 10 | `10-clip-panel-reveal.html` | Panels unfold via `clip-path` inset, one after another on scroll |
| 11 | `11-count-up.html` | Figures recount from zero on entry, ints only, `power3.out` |
| 12 | `12-sticky-stack.html` | Pinned cards fold into a stack — each slides up over a scaling predecessor |
| 13 | `13-reading-highlight.html` | Words brighten in reading order, one scrub unit per word |
| 14 | `14-tilt-parallax.html` | Pointer tilt with `quickTo`; layers drift at per-element depth factors |
| 15 | `15-curtain-reveal.html` | Two half-screen curtains part to opposite edges, unveiling the stage |
| 16 | `16-magnetic-button.html` | Button pulled toward the cursor within a radius, elastic snap home |
| 17 | `17-scroll-progress.html` | Fixed rail fills with scroll progress; percentage keeps the score |
| 18 | `18-flip-card.html` | 3D flip cards (`rotationY` 180, preserve-3d) on hover, click, or keyboard |
| 19 | `19-hover-expand-gallery.html` | Hovered panel takes flex share; neighbours yield in a smooth tug-of-war |
| 20 | `20-velocity-skew.html` | Blocks lean by clamped scroll velocity, smoothed with `quickTo` |
| 21 | `21-wave-text.html` | Ambient sine ripple across characters — yoyo loop, quieter than the words |
| 22 | `22-morph-blob.html` | SVG blob breathes through four poses (MorphSVGPlugin) with shifting fill |
| 23 | `23-cursor-spotlight.html` | Bright copy clipped to a cursor-following spotlight circle |
| 24 | `24-horizontal-panels.html` | Pinned sideways read — full-bleed panels scrub west with a chapter counter |
| 25 | `25-odometer-roll.html` | Digit wheels spin from random offsets to the target value, left to right |
| 26 | `26-fan-spread.html` | Cards fanned like a held hand; hover spreads them flat, hover lifts one |
| 27 | `27-throw-settle.html` | Physics throw — flick a card, it coasts with inertia; the tray recoils against it |
| 28 | `28-spring-trail.html` | Spring-mass blob chases the cursor, stretching along its velocity vector |
| 29 | `29-hold-charge.html` | Hold-to-confirm, pointer captured — release early and the ring springs back |
| 30 | `30-magnetic-snap.html` | Draggable tiles seat into slots with an elastic pull; free drops spring home |
| 31 | `31-slingshot-launch.html` | Stored tension — pulling the puck draws the bands, release converts it into a launch |
| 32 | `32-detent-dial.html` | Spin the knob with inertia; it clicks into the nearest of 8 positions, tick lights |

Every snippet follows the same contract:

- **Design note** — a 3-line comment above the JS stating the concept,
  supporting motion, and trigger.
- **Progressive enhancement** — content readable with JS disabled
  (`gsap.from()`-style, final state is the DOM default).
- **Reduced motion** — `prefers-reduced-motion` shows final states promptly;
  user-initiated interactions stay enabled.
- **Consistent tokens** — ink `#101113` / bone `#f2ede3` / vermilion
  `#ff4a17`, Anton + Space Grotesk + IBM Plex Mono.
- **GSAP 3.12.5** from jsDelivr; plugins only when used.

## Generate more snippets

Want a new animation design in the same style? Use **`PROMPT.md`** — a
self-contained prompt that works with any AI assistant. Fill in the two
placeholders (animation design + optional content theme), paste, and save the
result as `27-<name>.html`.

To keep every snippet fresh, the prompt's "Variation" rule forbids copying any
choreography already in the tables above — check this table before writing a
new number.