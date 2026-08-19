# Curtain Reveal

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: two half-screen curtains part to opposite edges as you

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `backdrop, curtain, curtain--l, curtain--r, stage`
- Data attributes: `data-curtain`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--color-orange`
- `--color-teal-light`
- `--space-144`
- `--space-20`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L8: display:grid; place-items:center;padding:clamp(1.25rem,4vw,var(--space-64)); => display:grid; place-items:center;padding:clamp(var(--space-20),4vw,var(--space-64));`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
