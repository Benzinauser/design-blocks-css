# Balloon Button

> Category: `buttons` · Status: `duplicate-candidate` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Interactive button behaviors. Use for call-to-action moments that need a tactile or magnetic response. Mechanism: Design note: a button that inflates like a balloon — scale, corner and

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `arrow, balloon, hint, kicker, stage`
- Data attributes: `data-balloon`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--color-ink-alpha-88`
- `--color-orange`
- `--space-20`
- `--space-4`
- `--space-48`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; flex-direction:column; align-items:center; => .stage { height:100svh; display:flex; flex-direction:column; align-items:center; justify-content:cen`

## Known duplicates
- Related: `magnetic-button` (cluster score 0.72) — differs: Buttons with pointer interaction. magnetic-button: cursor proximity pull on the whole button (quickTo), label counter-shift, elastic return; data-magnetic attributes. balloon-button: inflates (scale + border-radius growth) while held/charged; different data attributes.
- Related: `morph-blob` (cluster score 0.67) — differs: Scaffold similarity only: morphing SVG blob vs inflating button. Not semantic duplicates.
- Related: `ghost-trail` (cluster score 0.65) — differs: Both pointer-reactive DOM elements; no semantic overlap (button inflation vs cursor echoes).
