# Line Draw Hover

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: each word's rule is an SVG stroke that draws from the left

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `hint, item, kicker, stage, words`
- Data attributes: `data-line`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--font-size-88px`
- `--space-20`
- `--space-48`
- `--space-64`
- `--space-896`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; flex-direction:column; align-items:center; => .stage { height:100svh; display:flex; flex-direction:column; align-items:center; justify-content:cen`

## Known duplicates
- Related: `magnetic-button` (cluster score 0.67) — differs: Interactive hover effects. magnetic: proximity pull. line-draw: SVG line path draws on hover over button text.
- Related: `morph-blob` (cluster score 0.64)
- Related: `glitch-text` (cluster score 0.64)
