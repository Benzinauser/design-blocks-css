# Push Grid

> Category: `layout` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Layout construction and page organization. Use when arranging regions, grids, or view transitions. Mechanism: Design note: hover a tile and it asserts itself (scale, shadow) while its

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `cell, cell--a, cell--b, cell--c, cell--d, cell--e, cell--f, cell--g, cell--h, cell--i, grid, hint, kicker, stage`
- Data attributes: `data-push`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--color-amber-light`
- `--color-ink-alpha-88`
- `--color-orange`
- `--color-orange-deep`
- `--color-orange-light`
- `--color-pink`
- `--color-pink-light`
- `--color-sand`
- `--color-smoke`
- `--color-teal-light`
- `--color-violet`
- `--color-violet-light`
- `--radius-3px`
- `--space-20`
- `--space-420`
- `--space-48`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; flex-direction:column; align-items:center; => .stage { height:100svh; display:flex; flex-direction:column; align-items:center; justify-content:cen`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
