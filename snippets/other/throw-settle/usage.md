# Throw Settle

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: a physics throw — drag the card, release with velocity and

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js, https://assets.codepen.io/16327/InertiaPlugin.min.js`
- Key classes: `card, hedge, hint, kicker, stage, tray`
- Data attributes: `data-throw`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--color-bone-alpha-20`
- `--color-ink-alpha-85`
- `--color-orange`
- `--radius-3px`
- `--space-140`
- `--space-20`
- `--space-200`
- `--space-220`
- `--space-300`
- `--space-40`
- `--space-64`
- `--space-860`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; flex-direction:column; align-items:center; => .stage { height:100svh; display:flex; flex-direction:column; align-items:center; justify-content:cen`

## Known duplicates
- Related: `magnetic-button` (cluster score 0.64)
