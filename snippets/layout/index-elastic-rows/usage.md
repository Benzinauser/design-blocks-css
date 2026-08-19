# Index Elastic Rows

> Category: `layout` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Layout construction and page organization. Use when arranging regions, grids, or view transitions. Mechanism: Design note: one row open at a time; the body height springs open with an

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `body, body-inner, head, index, item, list, mono, name, num, plus, row`
- Data attributes: `data-cap, data-open`
- Max nesting depth: 8
- Inline script blocks: 1

## Tokens consumed
- `--space-128`
- `--space-16`
- `--space-20`
- `--space-40`
- `--space-48`
- `--space-64`
- `--space-736`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 2 declaration(s) swapped to tokens (exact-value replacements):
  - `L10: .index { padding:clamp(3rem,10vh,var(--space-128)) clamp(1.25rem,4vw,var(--space => .index { padding:clamp(var(--space-48),10vh,var(--space-128)) clamp(var(--space-20),4vw,var(--space-`
  - `L11: .head { margin-bottom:2.5rem; font-family:"IBM Plex Mono",monospace; font-size:. => .head { margin-bottom:var(--space-40); font-family:"IBM Plex Mono",monospace; font-size:.8rem; lette`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
