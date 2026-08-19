# Odometer Roll

> Category: `typography` · Status: `duplicate-candidate` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Text treatments and kinetic typography. Use when the message lives in the words themselves — when type should carry motion or atmosphere rather than static layout. Mechanism: Design note: a mechanical counter — each digit column spins from a random

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `col, digits, kicker, label, odo, odo-wrap`
- Data attributes: `data-odo, data-target`
- Max nesting depth: 7
- Inline script blocks: 1

## Tokens consumed
- `--space-144`
- `--space-16`
- `--space-20`
- `--space-48`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 3 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .odo-wrap { min-height:100svh; display:flex; flex-direction:column; justify-cont => .odo-wrap { min-height:100svh; display:flex; flex-direction:column; justify-content:center;gap:var(-`
  - `L13: font-family:"Anton",sans-serif; font-weight:400;font-size:clamp(3rem,10vw,var(-- => font-family:"Anton",sans-serif; font-weight:400;font-size:clamp(var(--font-size-),10vw,var(--space-1`
  - `L17: .sep { font-family:"Anton",sans-serif;font-size:clamp(3rem,10vw,var(--space-144) => .sep { font-family:"Anton",sans-serif;font-size:clamp(var(--font-size-),10vw,var(--space-144)); colo`

## Known duplicates
- Related: `count-up` (cluster score 0.63) — differs: Numeric counters. count-up: single value tweens up on enter. odometer-roll: per-digit columns spin from random offsets; different markup (digits split into .digit cells).
