# Rotate On Scroll

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: each word completes one full rotation while it travels

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `lead, rot, tail, word`
- Data attributes: `data-rot`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--space-128`
- `--space-160`
- `--space-20`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 2 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .rot { padding:clamp(var(--space-64),12vh,var(--space-128)) clamp(1.25rem,4vw,va => .rot { padding:clamp(var(--space-64),12vh,var(--space-128)) clamp(var(--space-20),4vw,var(--space-64`
  - `L12: font-size:clamp(3rem,11vw,var(--space-160)); line-height:1.12; will-change:trans => font-size:clamp(var(--font-size-),11vw,var(--space-160)); line-height:1.12; will-change:transform;`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
