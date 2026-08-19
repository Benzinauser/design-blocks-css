# Fan Spread

> Category: `media` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Media presentation. Use for galleries, sliders, and image choreography. Mechanism: Design note: cards sit fanned like a held hand; hovering the pile spreads

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `card, card--a, card--b, card--c, card--d, card--e, fan, fan-wrap, hint, kicker`
- Data attributes: `data-fan`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--color-amber-light`
- `--color-ink-alpha-85`
- `--color-orange`
- `--color-sand`
- `--color-teal-light`
- `--color-violet`
- `--color-violet-light`
- `--radius-3px`
- `--space-120`
- `--space-20`
- `--space-48`
- `--space-64`
- `--space-760`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 2 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .fan-wrap { min-height:100svh; display:flex; flex-direction:column; align-items: => .fan-wrap { min-height:100svh; display:flex; flex-direction:column; align-items:center; justify-cont`
  - `L10: .fan { position:relative; display:flex; align-items:flex-end; justify-content:ce => .fan { position:relative; display:flex; align-items:flex-end; justify-content:center; gap:.5rem;padd`

## Known duplicates
- Related: `sticky-stack` (cluster score 0.64)
