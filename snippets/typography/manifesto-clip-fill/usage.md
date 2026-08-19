# Manifesto Clip Fill

> Category: `typography` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Text treatments and kinetic typography. Use when the message lives in the words themselves — when type should carry motion or atmosphere rather than static layout. Mechanism: Design note: each line's gradient fill is scrubbed from 0% to 100% width

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `accent, fill, ghost, kicker, line, manifesto, note, statement`
- Data attributes: `data-fill`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--space-128`
- `--space-20`
- `--space-40`
- `--space-48`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 2 declaration(s) swapped to tokens (exact-value replacements):
  - `L9: .manifesto { min-height:140svh; display:flex; flex-direction:column; justify-con => .manifesto { min-height:140svh; display:flex; flex-direction:column; justify-content:center;padding:`
  - `L10: .kicker { font-size:.8rem; letter-spacing:.16em; text-transform:uppercase; margi => .kicker { font-size:.8rem; letter-spacing:.16em; text-transform:uppercase;margin-bottom:var(--space-`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
