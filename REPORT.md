# Design System Migration — Final Report

Library root: `simples/` (branch `design-system-migration`). All 73 snippets migrated; token layer, catalog, vault, and agent rules in place. This report closes the migration per the audit-driven workflow.

## 1. Moved & renamed (73)

Old names carry their source numbering (e.g. `28-spring-trail`); new names are the kebab-case identity used everywhere in `snippets/`, `index.json`, and `vault/`. Packages (12) were already cleanly named and moved to their category.

| old | new | category | kind | status |
|---|---|---|---|---|
| **layout** (10) | | | | |
| `benzina-portfolio` | `benzina-portfolio` | | package | needs-review |
| `gsap-grid` | `gsap-grid` | | package | stable |
| `05-index-elastic-rows` | `index-elastic-rows` | | effect | stable |
| `38-push-grid` | `push-grid` | | effect | stable |
| `43-connected-grid` | `connected-grid` | | effect | stable |
| `46-grid-view-switch` | `grid-view-switch` | | effect | stable |
| `50-lines-to-layout` | `lines-to-layout` | | effect | stable |
| `57-pressure-grid` | `pressure-grid` | | effect | duplicate-candidate |
| `58-tidal-panels` | `tidal-panels` | | effect | stable |
| `60-reassembly-grid` | `reassembly-grid` | | effect | duplicate-candidate |
| **media** (6) | | | | |
| `draggable-infinite-slider-gsaposmo` | `draggable-infinite-slider-gsaposmo` | | package | needs-review |
| `02-reel-infinite-drag` | `reel-infinite-drag` | | effect | stable |
| `19-hover-expand-gallery` | `hover-expand-gallery` | | effect | duplicate-candidate |
| `26-fan-spread` | `fan-spread` | | effect | stable |
| `35-carousel-3d` | `carousel-3d` | | effect | stable |
| `52-double-slideshow` | `double-slideshow` | | effect | stable |
| **other** (34) | | | | |
| `elastic-accordion-gsap` | `elastic-accordion-gsap` | | package | stable |
| `gsap-scrolltriggerdemo` | `gsap-scrolltriggerdemo` | | package | stable |
| `howl-s-moving-castle` | `howl-s-moving-castle` | | package | stable |
| `mask-animation-with-gsap-svg` | `mask-animation-with-gsap-svg` | | package | stable |
| `motion-atlas` | `motion-atlas` | | package | stable |
| `scrolling-rainbowgsap-scrolltrigger-scrollsmoother` | `scrolling-rainbowgsap-scrolltrigger-scrollsmoother` | | package | stable |
| `03-transit-opposite-drift` | `transit-opposite-drift` | | effect | stable |
| `10-clip-panel-reveal` | `clip-panel-reveal` | | effect | duplicate-candidate |
| `12-sticky-stack` | `sticky-stack` | | effect | stable |
| `14-tilt-parallax` | `tilt-parallax` | | effect | stable |
| `15-curtain-reveal` | `curtain-reveal` | | effect | stable |
| `20-velocity-skew` | `velocity-skew` | | effect | stable |
| `22-morph-blob` | `morph-blob` | | effect | duplicate-candidate |
| `23-cursor-spotlight` | `cursor-spotlight` | | effect | stable |
| `24-horizontal-panels` | `horizontal-panels` | | effect | stable |
| `27-throw-settle` | `throw-settle` | | effect | stable |
| `28-spring-trail` | `spring-trail` | | effect | duplicate-candidate |
| `29-hold-charge` | `hold-charge` | | effect | stable |
| `30-magnetic-snap` | `magnetic-snap` | | effect | stable |
| `31-slingshot-launch` | `slingshot-launch` | | effect | stable |
| `32-detent-dial` | `detent-dial` | | effect | stable |
| `33-rotate-on-scroll` | `rotate-on-scroll` | | effect | stable |
| `36-grid-3d-stagger` | `grid-3d-stagger` | | effect | stable |
| `37-line-draw-hover` | `line-draw-hover` | | effect | stable |
| `39-path-follow-scroll` | `path-follow-scroll` | | effect | stable |
| `41-gooey-cursor` | `gooey-cursor` | | effect | duplicate-candidate |
| `42-ghost-trail` | `ghost-trail` | | effect | duplicate-candidate |
| `44-scroll-color-grade` | `scroll-color-grade` | | effect | stable |
| `53-gait-locomotion` | `gait-locomotion` | | effect | stable |
| `53-magnetic-fracture` | `magnetic-fracture` | | effect | stable |
| `54-velocity-loom` | `velocity-loom` | | effect | stable |
| `55-path-memory` | `path-memory` | | effect | stable |
| `56-phase-collapse` | `phase-collapse` | | effect | stable |
| `59-collision-orbit` | `collision-orbit` | | effect | stable |
| **typography** (17) | | | | |
| `text-scroll-and-hover-effect-with-gsap-and-clip` | `text-scroll-and-hover-effect-with-gsap-and-clip` | | package | stable |
| `the-jamswissted` | `the-jamswissted` | | package | stable |
| `the-policeswissted` | `the-policeswissted` | | package | stable |
| `04-manifesto-clip-fill` | `manifesto-clip-fill` | | effect | stable |
| `06-outro-char-rise` | `outro-char-rise` | | effect | stable |
| `07-blur-resolve-text` | `blur-resolve-text` | | effect | stable |
| `08-scramble-decode-text` | `scramble-decode-text` | | effect | duplicate-candidate |
| `09-auto-marquee` | `auto-marquee` | | effect | stable |
| `11-count-up` | `count-up` | | effect | duplicate-candidate |
| `13-reading-highlight` | `reading-highlight` | | effect | duplicate-candidate |
| `21-wave-text` | `wave-text` | | effect | duplicate-candidate |
| `25-odometer-roll` | `odometer-roll` | | effect | duplicate-candidate |
| `40-sliced-text` | `sliced-text` | | effect | stable |
| `45-code-type-loop` | `code-type-loop` | | effect | stable |
| `47-glitch-text` | `glitch-text` | | effect | stable |
| `49-text-repetition-drift` | `text-repetition-drift` | | effect | stable |
| `51-circular-text` | `circular-text` | | effect | stable |
| **hero** (1) | | | | |
| `01-hero-line-mask` | `hero-line-mask` | | effect | stable |
| **buttons** (2) | | | | |
| `16-magnetic-button` | `magnetic-button` | | effect | duplicate-candidate |
| `34-balloon-button` | `balloon-button` | | effect | duplicate-candidate |
| **feedback** (1) | | | | |
| `17-scroll-progress` | `scroll-progress` | | effect | stable |
| **cards** (1) | | | | |
| `18-flip-card` | `flip-card` | | effect | stable |
| **nav** (1) | | | | |
| `48-rounded-menu-expand` | `rounded-menu-expand` | | effect | stable |

## 2. Flagged, not applied — token candidates left hardcoded

Deterministic threshold (audit `token_candidates`): **base unit 4px**; colors repeated in 2+ snippets; radius repeated 2+; shadow repeated 2+. Everything below the bar stays as literal and is logged here, per workflow rule 7.

- **Colors below bar** (single/rare use, not near a repeated color — kept hardcoded): `#4f8ae3`, `#9cc4ff`, `#ffb199`, `#bff0ea`, `#6de3a3`, `#ff8ab5`, `#ffb3cf` (2-5 uses) plus single-use hexes not promoted. The audit can only see CSS; **JS-embedded palettes** (e.g. `#8a6df1` violet, `#c9340e` in effect scripts) are invisible to it and remain in scripts by design.
- **Near-neighbor promotions applied** (single-use colors promoted because they sit within one design-scale step of a repeated color — logged per snippet in `usage.md` under *Token migration notes*): `#00000a → --color-ink-benzina`, `#0d0d0d → --color-ink-charcoal`, `#111111 → --color-ink-deep`, `#e9e4da → --color-bone-soft`.
- **Shadows**: only one repeated shadow exists (`0 0 3px rgba(255,196,61,.14)`, 2 places) → no `--shadow-*` tokens; both occurrences stay hardcoded.
- **Aliases**: `black`/`#000`/`#000000` → `--color-black`; `white`/`#fff`/`#ffffff` → `--color-white`; rgba spellings with spaces and `0.x` alphas match as variants of their canonical token.

## 3. Duplicate clusters (25) — flagged, never merged

Scored on selector distance / property-set overlap / markup structure. All 15 involved snippets carry `duplicate-candidate` status; none were merged or deleted.

| cluster | category | score |
|---|---|---|
| `28-spring-trail` ↔ `42-ghost-trail` | other | 0.77 |
| `10-clip-panel-reveal` ↔ `19-hover-expand-gallery` | other | 0.75 |
| `21-wave-text` ↔ `22-morph-blob` | typography | 0.74 |
| `28-spring-trail` ↔ `41-gooey-cursor` | other | 0.74 |
| `57-pressure-grid` ↔ `60-reassembly-grid` | layout | 0.74 |
| `41-gooey-cursor` ↔ `42-ghost-trail` | other | 0.73 |
| `16-magnetic-button` ↔ `34-balloon-button` | buttons | 0.72 |
| `08-scramble-decode-text` ↔ `21-wave-text` | typography | 0.69 |
| `13-reading-highlight` ↔ `21-wave-text` | typography | 0.69 |
| `13-reading-highlight` ↔ `22-morph-blob` | typography | 0.69 |
| `16-magnetic-button` ↔ `37-line-draw-hover` | buttons | 0.67 |
| `22-morph-blob` ↔ `34-balloon-button` | other | 0.67 |
| `16-magnetic-button` ↔ `22-morph-blob` | buttons | 0.65 |
| `19-hover-expand-gallery` ↔ `52-double-slideshow` | media | 0.65 |
| `34-balloon-button` ↔ `42-ghost-trail` | buttons | 0.65 |
| `08-scramble-decode-text` ↔ `13-reading-highlight` | typography | 0.64 |
| `10-clip-panel-reveal` ↔ `11-count-up` | other | 0.64 |
| `10-clip-panel-reveal` ↔ `52-double-slideshow` | other | 0.64 |
| `12-sticky-stack` ↔ `26-fan-spread` | other | 0.64 |
| `16-magnetic-button` ↔ `27-throw-settle` | buttons | 0.64 |
| `22-morph-blob` ↔ `37-line-draw-hover` | other | 0.64 |
| `37-line-draw-hover` ↔ `47-glitch-text` | other | 0.64 |
| `08-scramble-decode-text` ↔ `22-morph-blob` | typography | 0.63 |
| `11-count-up` ↔ `25-odometer-roll` | typography | 0.63 |
| `16-magnetic-button` ↔ `42-ghost-trail` | buttons | 0.63 |

**True near-duplicate:** `57-pressure-grid` ↔ `60-reassembly-grid` (layout, 0.74) — same grid scaffold, and they collide on the **53-numbering overlap between the motion-atlas (01–52) and pack-2 (53–60) packs** (contents differ; only ids collide). They carry reciprocal `duplicate_of` in `index.json`. Family groups flagged for human review: cursor-trail trio (spring-trail / ghost-trail / gooey-cursor), buttons pair (magnetic-button / balloon-button), counters (count-up / odometer-roll), text-ambience family (wave-text / morph-blob / reading-highlight / scramble-decode-text) — each with an honest `differs` note explaining why it is a candidate, not a copy.

## 4. `other/` — 34 snippets flagged `#needs-category` (naming proposals for human review)

No new categories were invented (workflow rule). Proposed names are suggestions only:

| snippet | proposed naming |
|---|---|
| `elastic-accordion-gsap` | accordion / disclosure |
| `gsap-scrolltriggerdemo` | scroll-trigger starter |
| `howl-s-moving-castle` | full-page scene composition |
| `mask-animation-with-gsap-svg` | SVG mask effects |
| `motion-atlas` | master effects collection (atlas) |
| `scrolling-rainbowgsap-scrolltrigger-scrollsmoother` | scroll-linked color effects |
| `transit-opposite-drift` | transit transitions |
| `clip-panel-reveal` | panel reveal choreography |
| `sticky-stack` | scroll stack / pinning |
| `tilt-parallax` | pointer parallax |
| `curtain-reveal` | panel reveal choreography |
| `velocity-skew` | velocity-reactive skew |
| `morph-blob` | ambient blob shapes |
| `cursor-spotlight` | cursor-follow effects |
| `horizontal-panels` | horizontal scroll choreography |
| `throw-settle` | physics / inertia motion |
| `spring-trail` | cursor-follow effects |
| `hold-charge` | physics / charge-and-release |
| `magnetic-snap` | cursor-follow effects |
| `slingshot-launch` | physics / inertia motion |
| `detent-dial` | physics / inertia motion |
| `rotate-on-scroll` | scroll-linked transforms |
| `grid-3d-stagger` | 3D grid staggers |
| `line-draw-hover` | SVG draw effects |
| `path-follow-scroll` | scroll-linked transforms |
| `gooey-cursor` | cursor-follow effects |
| `ghost-trail` | cursor-follow effects |
| `scroll-color-grade` | scroll-linked color effects |
| `gait-locomotion` | walk-cycle animation |
| `magnetic-fracture` | cursor-follow effects |
| `velocity-loom` | velocity-reactive skew |
| `path-memory` | SVG draw effects |
| `phase-collapse` | physics / inertia motion |
| `collision-orbit` | physics / inertia motion |

## 5. Validation results (Phase 8) — all green

| check | result |
|---|---|
| 3-file contract per snippet (`style.css`, `example.html`, `usage.md`) | 0 missing across 73 |
| index.json ↔ vault/ sync | 0 orphans, 0 missing notes |
| every `tokens_used` defined in `tokens.css` | 0 undefined (162 tokens) |
| literal matching a defined token in `style.css` (outside `:root`, outside custom-prop defs, outside `var()`) | 0 hits |
| `duplicate_of` references resolve | 0 bad refs |
| tokens.css brace balance | balanced |

One engine bug was caught by this pass and fixed before sign-off: an offset-skip defect (a shorter spelling like `4px` matching *inside* a longer value like `64px` was consuming the match) blocked 4 exact-value swaps — `#0D0D0D` ×2, `64px`, `0.25rem`. The fix re-ran the swaps and re-validated to zero hits. No corruption was ever written: unbound matches never set the changed flag, so original declarations were preserved.

## 6. Cross-reference confirmation

- `index.json` (schema v1.0) catalogs 73 snippets; `source` points at the original file inside each `legacy/` tree or the atlas pack; reciprocal `duplicate_of` where true.
- `vault/` = 73 notes (frontmatter mirrors index.json), `Tokens.md` (162 tokens with `[[wikilink]]` consumers from index.json), `README.md` map of contents.
- `AGENTS.md` decision flow governs future edits: search index → reuse, never fork → read `usage.md` → tokens never hardcoded → register new snippets → respect statuses → never change visual output.
- Swaps: cumulative ≈537 exact-value lines across 60 snippet stylesheets; 12 package `example.html` files link `../../../tokens.css`; 61 effect `example.html` files stay pristine (inline styles are the source of truth).

## 7. Findings surfaced for human review

- **benzina-portfolio** (`needs-review`): references `--card` / `--svc` that no snippet defines — `script.js` may set them via `setProperty()`; verify.
- **draggable-infinite-slider-gsaposmo** (`needs-review`): depends on an external Osmo UI stylesheet (`https://slater.app/10324/23333.css`) for `--color-black`/`--color-light`/`--color-dark`/`--color-neutral-900`/`--container-padding`/`--cubic-default`; cannot render correctly offline.
- **Namespace collision**: draggable and gsap-grid share the `--color-*` namespace with different palettes — noted in the `tokens.css` header; no merge attempted.
- **Artifact duplication**: `motion-atlas/motion-atlas-creative-53-60.zip` duplicates the extracted 8 files; package `src/` vs `dist/` duplicates documented in audit meta.
- **53-numbering collision** between motion-atlas and pack-2 packs (contents differ).
- **JS-embedded palettes** (`#8a6df1`, `#c9340e`) are invisible to the CSS audit; candidates for future manual tokenization, not machine-swapped.

---
Migration commits: 10 category/token commits + this docs commit, all on `design-system-migration` (never `main`).