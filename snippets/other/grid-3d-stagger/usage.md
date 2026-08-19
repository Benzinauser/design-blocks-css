# Grid 3d Stagger

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: the grid rises from a flat horizon — every tile stands up

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `grid, gridzone, kicker, tile3d, tile3d--a, tile3d--b, tile3d--c, tile3d--d, tile3d--e, tile3d--f, tile3d--g, tile3d--h`
- Data attributes: `data-grid3`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--color-amber-light`
- `--color-ink-alpha-85`
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
- `--space-1000`
- `--space-16`
- `--space-20`
- `--space-48`
- `--space-64`
- `--space-760`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .gridzone { min-height:100svh; display:flex; flex-direction:column; justify-cont => .gridzone { min-height:100svh; display:flex; flex-direction:column; justify-content:center;gap:var(-`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
