# Double Slideshow

> Category: `media` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Media presentation. Use for galleries, sliders, and image choreography. Mechanism: Design note: two decks take turns — the foreground turns over in 3D while

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `controls, deck, kicker, mat, panel, panel--a, panel--b, panel--bg, panel--c, panel--d, panel--fg, stage`
- Data attributes: `data-slide`
- Max nesting depth: 7
- Inline script blocks: 1

## Tokens consumed
- `--color-amber-light`
- `--color-bone-alpha-30`
- `--color-orange`
- `--color-teal-light`
- `--color-violet`
- `--color-violet-light`
- `--radius-5px`
- `--space-16`
- `--space-20`
- `--space-40`
- `--space-400`
- `--space-64`
- `--space-640`
- `--space-900`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; flex-direction:column; align-items:center; => .stage { height:100svh; display:flex; flex-direction:column; align-items:center; justify-content:cen`

## Known duplicates
- Related: `hover-expand-gallery` (cluster score 0.65) — differs: Gallery-ish rows. hover-expand: pointer-driven flex share. double-slideshow: auto-advancing paired slideshow (ticker).
- Related: `clip-panel-reveal` (cluster score 0.64)
