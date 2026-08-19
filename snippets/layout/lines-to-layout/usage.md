# Lines To Layout

> Category: `layout` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Layout construction and page organization. Use when arranging regions, grids, or view transitions. Mechanism: Design note: the blueprint draws itself — hard strokes trace in sequence,

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `blueprint, bottom, dot, dot--hot, kicker, note, pen, pen--soft, sheet`
- Data attributes: `data-bp`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--space-20`
- `--space-40`
- `--space-64`
- `--space-700`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .blueprint { min-height:100svh; display:flex; flex-direction:column; justify-con => .blueprint { min-height:100svh; display:flex; flex-direction:column; justify-content:center;gap:var(`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
