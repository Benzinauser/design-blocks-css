# Path Follow Scroll

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: an amber marker rides an SVG route, its progress bound one

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/MotionPathPlugin.min.js`
- Key classes: `journey, kicker, map, marker, route, route-draw, tags, waypoint`
- Data attributes: `data-path`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--color-bone-alpha-18`
- `--color-bone-alpha-40`
- `--space-20`
- `--space-48`
- `--space-64`
- `--space-760`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .journey { min-height:100svh; display:flex; flex-direction:column; justify-conte => .journey { min-height:100svh; display:flex; flex-direction:column; justify-content:center;gap:var(--`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
