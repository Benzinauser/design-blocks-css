# Code Type Loop

> Category: `typography` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Text treatments and kinetic typography. Use when the message lives in the words themselves — when type should carry motion or atmosphere rather than static layout. Mechanism: Design note: a terminal that narrates its own build — each line types out

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `bar, caret, hint, kicker, stage, term`
- Data attributes: `data-term`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--radius-round`
- `--space-16`
- `--space-20`
- `--space-4`
- `--space-40`
- `--space-520`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; flex-direction:column; align-items:center; => .stage { height:100svh; display:flex; flex-direction:column; align-items:center; justify-content:cen`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
