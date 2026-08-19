# Count Up

> Category: `typography` · Status: `duplicate-candidate` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Text treatments and kinetic typography. Use when the message lives in the words themselves — when type should carry motion or atmosphere rather than static layout. Mechanism: Design note: figures count up as they enter — a measured, arithmetical

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `grid, kicker, label, stat, stats, value`
- Data attributes: `data-count, data-target`
- Max nesting depth: 7
- Inline script blocks: 1

## Tokens consumed
- `--space-20`
- `--space-24`
- `--space-48`
- `--space-64`
- `--space-760`
- `--space-96`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 3 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stats { min-height:100svh; display:flex; flex-direction:column; justify-content => .stats { min-height:100svh; display:flex; flex-direction:column; justify-content:center;gap:var(--sp`
  - `L10: .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; } => .grid { display:grid; grid-template-columns:repeat(3,1fr);gap:var(--space-24); }`
  - `L13: font-family:"Anton",sans-serif; font-weight:400;font-size:clamp(3rem,7vw,var(--s => font-family:"Anton",sans-serif; font-weight:400;font-size:clamp(var(--font-size-),7vw,var(--space-96`

## Known duplicates
- Related: `clip-panel-reveal` (cluster score 0.64)
- Related: `odometer-roll` (cluster score 0.63) — differs: Numeric counters. count-up: single value tweens up on enter. odometer-roll: per-digit columns spin from random offsets; different markup (digits split into .digit cells).
