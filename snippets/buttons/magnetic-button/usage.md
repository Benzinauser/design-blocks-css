# Magnetic Button

> Category: `buttons` · Status: `duplicate-candidate` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Interactive button behaviors. Use for call-to-action moments that need a tactile or magnetic response. Mechanism: Design note: within a small radius the button is pulled toward the cursor

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `hint, kicker, magnetic, stage`
- Data attributes: `data-magnetic`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--color-bone-alpha-35`
- `--space-20`
- `--space-48`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; flex-direction:column; align-items:center; => .stage { height:100svh; display:flex; flex-direction:column; align-items:center; justify-content:cen`

## Known duplicates
- Related: `balloon-button` (cluster score 0.72) — differs: Buttons with pointer interaction. magnetic-button: cursor proximity pull on the whole button (quickTo), label counter-shift, elastic return; data-magnetic attributes. balloon-button: inflates (scale + border-radius growth) while held/charged; different data attributes.
- Related: `line-draw-hover` (cluster score 0.67) — differs: Interactive hover effects. magnetic: proximity pull. line-draw: SVG line path draws on hover over button text.
- Related: `morph-blob` (cluster score 0.65)
- Related: `throw-settle` (cluster score 0.64)
- Related: `ghost-trail` (cluster score 0.63)
