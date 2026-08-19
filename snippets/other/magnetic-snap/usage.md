# Magnetic Snap

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: tiles start shuffled; drag one into a slot's magnetic field

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js`
- Key classes: `board, kicker, slot, stage, status, tile, tile--1, tile--2, tile--3, tile--4, tile--5, tile--6`
- Data attributes: `data-slot, data-snap`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--color-amber-light`
- `--color-bone-alpha-20`
- `--color-bone-alpha-25`
- `--color-ink-alpha-85`
- `--color-orange`
- `--color-pink`
- `--color-pink-light`
- `--color-sand`
- `--color-teal-light`
- `--color-violet`
- `--color-violet-light`
- `--radius-3px`
- `--space-20`
- `--space-32`
- `--space-40`
- `--space-64`
- `--space-640`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { min-height:100svh; display:flex; flex-direction:column; align-items:cen => .stage { min-height:100svh; display:flex; flex-direction:column; align-items:center; justify-content`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
