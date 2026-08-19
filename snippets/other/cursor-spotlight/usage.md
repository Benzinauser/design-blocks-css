# Cursor Spotlight

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: a bright copy of the headline is clipped to a circle that

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `bright, dim, hint, stage, title`
- Data attributes: `data-spot`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--space-144`
- `--space-20`
- `--space-24`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 2 declaration(s) swapped to tokens (exact-value replacements):
  - `L8: display:grid; place-items:center;padding:clamp(1.25rem,4vw,var(--space-64)); => display:grid; place-items:center;padding:clamp(var(--space-20),4vw,var(--space-64));`
  - `L22: .hint { position:absolute; bottom:1.5rem;left:clamp(1.25rem,4vw,var(--space-64)) => .hint { position:absolute;bottom:var(--space-24);left:clamp(var(--space-20),4vw,var(--space-64)); co`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
