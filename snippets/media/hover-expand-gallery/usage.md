# Hover Expand Gallery

> Category: `media` · Status: `duplicate-candidate` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Media presentation. Use for galleries, sliders, and image choreography. Mechanism: Design note: hovering a panel grows its flex share while its neighbours

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `gallery, gallery-wrap, kicker, panel, panel--a, panel--b, panel--c, panel--d, panel--e`
- Data attributes: `data-gallery`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--color-amber-light`
- `--color-ink-alpha-85`
- `--color-orange`
- `--color-sand`
- `--color-teal-light`
- `--color-violet`
- `--color-violet-light`
- `--radius-2px`
- `--space-16`
- `--space-20`
- `--space-320`
- `--space-48`
- `--space-520`
- `--space-64`
- `--space-760`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .gallery-wrap { min-height:100svh; display:flex; flex-direction:column; justify- => .gallery-wrap { min-height:100svh; display:flex; flex-direction:column; justify-content:center;gap:v`

## Known duplicates
- Related: `clip-panel-reveal` (cluster score 0.75) — differs: Both are panel rows. clip-panel-reveal: panels unmask top-down via clip-path on scroll. hover-expand-gallery: pointer hover grows a panel's flex share (neighbours compress).
- Related: `double-slideshow` (cluster score 0.65) — differs: Gallery-ish rows. hover-expand: pointer-driven flex share. double-slideshow: auto-advancing paired slideshow (ticker).
