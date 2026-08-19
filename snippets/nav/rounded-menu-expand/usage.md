# Rounded Menu Expand

> Category: `nav` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Navigation and menu systems. Use for wayfinding and menu expansion patterns. Mechanism: Design note: the menu appears as a single disc that blooms from the

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `burger, hint, idx, kicker, menu, stage, veil`
- Data attributes: `data-menu`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--color-ink`
- `--radius-round`
- `--space-20`
- `--space-32`
- `--space-40`
- `--space-52`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 2 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; flex-direction:column; align-items:center; => .stage { height:100svh; display:flex; flex-direction:column; align-items:center; justify-content:cen`
  - `L31: font-size:clamp(var(--space-32),7vw,4.5rem); color:var(--bone); text-decoration: => font-size:clamp(var(--space-32),7vw,var(--font-size-)); color:var(--bone); text-decoration:none;`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
