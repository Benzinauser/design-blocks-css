# Morph Blob

> Category: `other` · Status: `duplicate-candidate` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: an SVG blob breathes through four poses (identical command

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://assets.codepen.io/16327/MorphSVGPlugin3.min.js`
- Key classes: `hint, kicker, morph`
- Data attributes: `none`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--space-20`
- `--space-380`
- `--space-48`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .morph { height:100svh; display:flex; flex-direction:column; align-items:center; => .morph { height:100svh; display:flex; flex-direction:column; align-items:center; justify-content:cen`

## Known duplicates
- Related: `wave-text` (cluster score 0.74) — differs: Shared full-screen stage + ink/bone scaffold. wave-text: ambient ripple travels across text characters. morph-blob: SVG blob breathes through four pose paths (different keyed path commands).
- Related: `reading-highlight` (cluster score 0.69) — differs: Shared scaffold only; no structural similarity (word highlighter vs SVG blob) - kept for transparency.
- Related: `balloon-button` (cluster score 0.67) — differs: Scaffold similarity only: morphing SVG blob vs inflating button. Not semantic duplicates.
- Related: `magnetic-button` (cluster score 0.65)
- Related: `line-draw-hover` (cluster score 0.64)
- Related: `scramble-decode-text` (cluster score 0.63)
