# Horizontal Panels

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: the section pins while the panel row slides east-to-west

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `counter, hscroll, idx, panel, track`
- Data attributes: `data-hscroll`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--space-112`
- `--space-20`
- `--space-24`
- `--space-416`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 2 declaration(s) swapped to tokens (exact-value replacements):
  - `L11: padding:clamp(1.25rem,4vw,var(--space-64)); border-bottom:1px solid rgba(242,237 => padding:clamp(var(--space-20),4vw,var(--space-64)); border-bottom:1px solid rgba(242,237,227,.16);`
  - `L17: position:absolute; top:1.5rem;right:clamp(1.25rem,4vw,var(--space-64)); z-index: => position:absolute;top:var(--space-24);right:clamp(var(--space-20),4vw,var(--space-64)); z-index:5;`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
