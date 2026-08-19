# Grid View Switch

> Category: `layout` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Layout construction and page organization. Use when arranging regions, grids, or view transitions. Mechanism: Design note: one toggle reorganises six cards between a 3×2 grid and a

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `btn, card, card--a, card--b, card--c, card--d, card--e, card--f, head, kicker, stage, status, view`
- Data attributes: `data-switch`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--color-amber-light`
- `--color-bone-alpha-30`
- `--color-ink-alpha-88`
- `--color-orange`
- `--color-pink`
- `--color-pink-light`
- `--color-sand`
- `--color-teal-light`
- `--color-violet`
- `--color-violet-light`
- `--radius-3px`
- `--space-16`
- `--space-20`
- `--space-32`
- `--space-40`
- `--space-620`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; flex-direction:column; align-items:center; => .stage { height:100svh; display:flex; flex-direction:column; align-items:center; justify-content:cen`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
