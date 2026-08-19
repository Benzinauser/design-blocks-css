# Sliced Text

> Category: `typography` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Text treatments and kinetic typography. Use when the message lives in the words themselves — when type should carry motion or atmosphere rather than static layout. Mechanism: Design note: five blades of one word, each clipped to its band of the

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `glass, hint, kicker, slice, slices`
- Data attributes: `data-slice`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--space-144`
- `--space-160`
- `--space-20`
- `--space-320`
- `--space-40`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 3 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .slices { min-height:100svh; display:flex; flex-direction:column; justify-conten => .slices { min-height:100svh; display:flex; flex-direction:column; justify-content:center;gap:var(--s`
  - `L11: position:relative;height:clamp(var(--space-144),24vw,20rem); overflow:hidden; => position:relative;height:clamp(var(--space-144),24vw,var(--space-320)); overflow:hidden;`
  - `L17: font-size:clamp(3rem,11vw,var(--space-160)); line-height:1; => font-size:clamp(var(--font-size-),11vw,var(--space-160)); line-height:1;`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
