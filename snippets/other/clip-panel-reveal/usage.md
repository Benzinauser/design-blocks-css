# Clip Panel Reveal

> Category: `other` · Status: `duplicate-candidate` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: each panel unmasks from the top edge (clip-path inset) as it

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `grid, kicker, panel, panel--a, panel--b, panel--c, reveal`
- Data attributes: `data-clip`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--color-amber-light`
- `--color-ink-alpha-85`
- `--color-orange`
- `--color-teal-light`
- `--space-16`
- `--space-20`
- `--space-48`
- `--space-64`
- `--space-760`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .reveal { min-height:100svh; display:flex; flex-direction:column; justify-conten => .reveal { min-height:100svh; display:flex; flex-direction:column; justify-content:center;gap:var(--s`

## Known duplicates
- Related: `hover-expand-gallery` (cluster score 0.75) — differs: Both are panel rows. clip-panel-reveal: panels unmask top-down via clip-path on scroll. hover-expand-gallery: pointer hover grows a panel's flex share (neighbours compress).
- Related: `count-up` (cluster score 0.64)
- Related: `double-slideshow` (cluster score 0.64)
