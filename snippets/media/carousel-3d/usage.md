# Carousel 3d

> Category: `media` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Media presentation. Use for galleries, sliders, and image choreography. Mechanism: Design note: five cards orbit on a 3D ring; dragging spins the ring with

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js, https://assets.codepen.io/16327/InertiaPlugin.min.js`
- Key classes: `card3d, card3d--a, card3d--b, card3d--c, card3d--d, card3d--e, deck, kicker, pos, ring, stage`
- Data attributes: `data-car`
- Max nesting depth: 7
- Inline script blocks: 1

## Tokens consumed
- `--color-amber-light`
- `--color-ink-alpha-85`
- `--color-orange`
- `--color-sand`
- `--color-teal-light`
- `--color-violet`
- `--color-violet-light`
- `--space-1100`
- `--space-20`
- `--space-300`
- `--space-4`
- `--space-440`
- `--space-48`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; flex-direction:column; align-items:center; => .stage { height:100svh; display:flex; flex-direction:column; align-items:center; justify-content:cen`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
