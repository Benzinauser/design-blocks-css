# Hero Line Mask

> Category: `hero` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Hero-stage composition. Use for first-viewport statements that set the tone of a page. Mechanism: Design note: headline lines rise out of overflow masks (power4.out),

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `accent, hero, kicker, lede, line, line-inner, mono, title`
- Data attributes: `data-hero`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--space-16`
- `--space-20`
- `--space-40`
- `--space-544`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 3 declaration(s) swapped to tokens (exact-value replacements):
  - `L13: display:flex; flex-direction:column; justify-content:flex-end; gap:2.5rem; => display:flex; flex-direction:column; justify-content:flex-end;gap:var(--space-40);`
  - `L14: padding:clamp(1.25rem,4vw,var(--space-64)); => padding:clamp(var(--space-20),4vw,var(--space-64));`
  - `L24: font-size:clamp(3rem,10.5vw,10.5rem); line-height:.94; => font-size:clamp(var(--font-size-),10.5vw,var(--font-size-)); line-height:.94;`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
