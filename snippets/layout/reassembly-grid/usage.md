# Reassembly Grid

> Category: `layout` · Status: `duplicate-candidate` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Layout construction and page organization. Use when arranging regions, grids, or view transitions.

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js`
- Key classes: `grid, meta, stage, status`
- Data attributes: `none`
- Max nesting depth: 4
- Inline script blocks: 1

## Tokens consumed
- none (self-contained styles)

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- No literal values matched the token bar; nothing to swap.

## Known duplicates
- Related: `pressure-grid` (cluster score 0.74) — differs: TRUE near-duplicate: same pack2 template (fixed label row + centered square grid + fixed status footer, ui-monospace, --bg/--ink/--hot vars). Differ: 9x9 grid with pointer-proximity distortion + pressure meter vs 8x8 grid with click-toggle disperse/reassemble; --bg #e9e4da vs #f2ede3; cell class names differ (.cell vs .piece).
