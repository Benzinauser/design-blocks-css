# Scramble Decode Text

> Category: `typography` · Status: `duplicate-candidate` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Text treatments and kinetic typography. Use when the message lives in the words themselves — when type should carry motion or atmosphere rather than static layout. Mechanism: Design note: each line decodes from noise into its message, one after

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js, https://assets.codepen.io/16327/ScrambleTextPlugin3.min.js`
- Key classes: `decode, hint, kicker, line, lines, tag`
- Data attributes: `data-open, data-scramble, data-scramble-target`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--space-16`
- `--space-20`
- `--space-40`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .decode { min-height:100svh; display:flex; flex-direction:column; justify-conten => .decode { min-height:100svh; display:flex; flex-direction:column; justify-content:center;gap:var(--s`

## Known duplicates
- Related: `wave-text` (cluster score 0.69) — differs: Text effects on identical scaffold. scramble: lines decode noise-to-message sequentially. wave: ambient ripple ambience.
- Related: `reading-highlight` (cluster score 0.64)
- Related: `morph-blob` (cluster score 0.63)
