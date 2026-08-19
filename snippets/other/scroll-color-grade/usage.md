# Scroll Color Grade

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: the scene's grade shifts — hue and saturation follow the

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `grade, scene`
- Data attributes: `data-grade`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--color-ink`
- `--space-112`
- `--space-20`
- `--space-24`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 2 declaration(s) swapped to tokens (exact-value replacements):
  - `L9: display:flex; flex-direction:column; align-items:center; justify-content:center; => display:flex; flex-direction:column; align-items:center; justify-content:center;gap:var(--space-24);`
  - `L10: padding:clamp(1.25rem,4vw,var(--space-64)); will-change:filter; => padding:clamp(var(--space-20),4vw,var(--space-64)); will-change:filter;`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
