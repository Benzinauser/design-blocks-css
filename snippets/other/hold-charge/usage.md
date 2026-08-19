# Hold Charge

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: tactile commitment — charge fills while you hold (pointer

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `button, charge, hint, kicker, label, stage, track`
- Data attributes: `data-charge`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--radius-round`
- `--space-20`
- `--space-40`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 2 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; flex-direction:column; align-items:center; => .stage { height:100svh; display:flex; flex-direction:column; align-items:center; justify-content:cen`
  - `L18: .button .label b { display:block; font-family:"Anton",sans-serif; font-weight:40 => .button .label b { display:block; font-family:"Anton",sans-serif; font-weight:400;font-size:var(--fo`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
