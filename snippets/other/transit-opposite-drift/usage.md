# Transit Opposite Drift

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: the section pins while the east track exits left and the

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `head, plate, plate--a, plate--b, plate--c, plate--d, plate--e, plate--f, plate--g, plate--h, plate--i, plate--j, track, track-inner`
- Data attributes: `data-dir, data-index, data-transit`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--color-amber-light`
- `--color-blue`
- `--color-blue-light`
- `--color-green`
- `--color-green-light`
- `--color-mint`
- `--color-orange`
- `--color-peach`
- `--color-sand`
- `--color-teal-light`
- `--color-violet`
- `--color-violet-light`
- `--radius-2px`
- `--space-16`
- `--space-20`
- `--space-200`
- `--space-24`
- `--space-320`
- `--space-40`
- `--space-48`
- `--space-64`
- `--space-96`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 3 declaration(s) swapped to tokens (exact-value replacements):
  - `L10: display:flex; flex-direction:column; justify-content:center; gap:2.5rem; => display:flex; flex-direction:column; justify-content:center;gap:var(--space-40);`
  - `L11: min-height:100svh;padding:clamp(3rem,8vh,var(--space-96)) 0; => min-height:100svh;padding:clamp(var(--space-48),8vh,var(--space-96)) 0;`
  - `L13: .head { padding:0 clamp(1.25rem,4vw,var(--space-64)); display:flex; align-items: => .head { padding:0 clamp(var(--space-20),4vw,var(--space-64)); display:flex; align-items:baseline;gap`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
