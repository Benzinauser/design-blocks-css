# Tilt Parallax

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: the whole stage tilts toward the cursor (quickTo) while each

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `dot, layer, layer--text, mono, orb, orb--a, orb--b, ring, scene, scene-inner, tag`
- Data attributes: `data-depth, data-tilt`
- Max nesting depth: 7
- Inline script blocks: 1

## Tokens consumed
- `--color-bone-alpha-40`
- `--radius-round`
- `--space-128`
- `--space-20`
- `--space-24`
- `--space-64`
- `--space-900`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L22: .tag { position:absolute; bottom:1.5rem;left:clamp(1.25rem,4vw,var(--space-64)); => .tag { position:absolute;bottom:var(--space-24);left:clamp(var(--space-20),4vw,var(--space-64)); col`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
