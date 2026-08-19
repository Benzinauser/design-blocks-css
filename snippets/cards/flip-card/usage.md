# Flip Card

> Category: `cards` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Card-based surface composition. Use when presenting discrete units of content in a grid or stack. Mechanism: Design note: cards spin on rotationY to reveal a back face — hover for

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `back, card, card-inner, deck, face, front--a, front--b, front--c, grid, kicker`
- Data attributes: `data-flip`
- Max nesting depth: 8
- Inline script blocks: 1

## Tokens consumed
- `--color-amber-light`
- `--color-bone-alpha-25`
- `--color-ink-alpha-85`
- `--color-orange`
- `--color-teal-light`
- `--radius-2px`
- `--space-20`
- `--space-24`
- `--space-32`
- `--space-48`
- `--space-64`
- `--space-760`
- `--space-900`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 2 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .deck { min-height:100svh; display:flex; flex-direction:column; justify-content: => .deck { min-height:100svh; display:flex; flex-direction:column; justify-content:center;gap:var(--spa`
  - `L10: .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; } => .grid { display:grid; grid-template-columns:repeat(3,1fr);gap:var(--space-24); }`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
