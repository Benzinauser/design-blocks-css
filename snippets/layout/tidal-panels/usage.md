# Tidal Panels

> Category: `layout` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Layout construction and page organization. Use when arranging regions, grids, or view transitions.

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js`
- Key classes: `meta, panel, pin, rail, stage`
- Data attributes: `none`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- none (self-contained styles)

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- No literal values matched the token bar; nothing to swap.

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
