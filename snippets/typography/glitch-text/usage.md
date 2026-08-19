# Glitch Text

> Category: `typography` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Text treatments and kinetic typography. Use when the message lives in the words themselves — when type should carry motion or atmosphere rather than static layout. Mechanism: Design note: a deliberate fault — hover introduces two chromatic copies

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `base, g, g--c, g--r, glitch, hint, kicker, stage`
- Data attributes: `data-glitch`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--space-160`
- `--space-20`
- `--space-48`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 2 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; flex-direction:column; align-items:center; => .stage { height:100svh; display:flex; flex-direction:column; align-items:center; justify-content:cen`
  - `L13: font-size:clamp(3rem,11vw,var(--space-160)); line-height:1; display:block; => font-size:clamp(var(--font-size-),11vw,var(--space-160)); line-height:1; display:block;`

## Known duplicates
- Related: `line-draw-hover` (cluster score 0.64)
