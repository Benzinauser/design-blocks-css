# Outro Char Rise

> Category: `typography` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Text treatments and kinetic typography. Use when the message lives in the words themselves — when type should carry motion or atmosphere rather than static layout. Mechanism: Design note: one line, split into characters that rise out of the fold

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js, https://assets.codepen.io/16327/SplitText3.min.js`
- Key classes: `line, meta, outro`
- Data attributes: `data-outro`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--font-size-104px`
- `--space-128`
- `--space-16`
- `--space-20`
- `--space-48`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 2 declaration(s) swapped to tokens (exact-value replacements):
  - `L9: min-height:100svh; display:flex; flex-direction:column; justify-content:center;  => min-height:100svh; display:flex; flex-direction:column; justify-content:center;gap:var(--space-48);`
  - `L10: padding:clamp(3rem,10vh,var(--space-128)) clamp(1.25rem,4vw,var(--space-64)); => padding:clamp(var(--space-48),10vh,var(--space-128)) clamp(var(--space-20),4vw,var(--space-64));`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
