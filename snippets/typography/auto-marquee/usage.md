# Auto Marquee

> Category: `typography` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Text treatments and kinetic typography. Use when the message lives in the words themselves — when type should carry motion or atmosphere rather than static layout. Mechanism: Design note: seamless auto-marquee — each track duplicates its content

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `marquee, marquee-row, page`
- Data attributes: `data-marquee`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--space-32`
- `--space-40`
- `--space-80`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 2 declaration(s) swapped to tokens (exact-value replacements):
  - `L15: font-size:clamp(var(--space-32),5vw,4.5rem); line-height:1; white-space:nowrap; => font-size:clamp(var(--space-32),5vw,var(--font-size-)); line-height:1; white-space:nowrap;`
  - `L16: padding-right:2.5rem; color:var(--bone-faint-mid); => padding-right:var(--space-40); color:var(--bone-faint-mid);`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
