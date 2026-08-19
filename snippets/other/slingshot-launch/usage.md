# Slingshot Launch

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: stored force — pulling the puck down draws the bands and

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js`
- Key classes: `band, hint, kicker, puck, rail, rig, shot, stage, target, tension`
- Data attributes: `data-sling`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--color-bone-alpha-18`
- `--color-bone-alpha-20`
- `--color-bone-alpha-35`
- `--radius-3px`
- `--radius-round`
- `--space--40`
- `--space-20`
- `--space-200`
- `--space-320`
- `--space-4`
- `--space-40`
- `--space-52`
- `--space-64`
- `--space-700`
- `--space-80`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; flex-direction:column; align-items:center; => .stage { height:100svh; display:flex; flex-direction:column; align-items:center; justify-content:cen`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
