# Reel Infinite Drag

> Category: `media` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Media presentation. Use for galleries, sliders, and image choreography. Mechanism: Design note: an endless horizontal field — drag with inertia, snap to

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js, https://assets.codepen.io/16327/InertiaPlugin.min.js`
- Key classes: `card, controls, count, count-current, count-total, figure, fill, head, idx, label, list, mono, rail, reel`
- Data attributes: `data-reel`
- Max nesting depth: 8
- Inline script blocks: 1

## Tokens consumed
- `--color-amber-light`
- `--color-orange`
- `--color-teal-light`
- `--radius-2px`
- `--space-16`
- `--space-20`
- `--space-24`
- `--space-300`
- `--space-32`
- `--space-40`
- `--space-48`
- `--space-64`
- `--space-96`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 5 declaration(s) swapped to tokens (exact-value replacements):
  - `L10: .reel { padding:clamp(3rem,8vh,var(--space-96)) clamp(1.25rem,4vw,var(--space-64 => .reel { padding:clamp(var(--space-48),8vh,var(--space-96)) clamp(var(--space-20),4vw,var(--space-64)`
  - `L11: .head { display:flex; flex-wrap:wrap; align-items:baseline; justify-content:spac => .head { display:flex; flex-wrap:wrap; align-items:baseline; justify-content:space-between;gap:var(--`
  - `L14: .controls { display:flex; align-items:center; gap:1.25rem; } => .controls { display:flex; align-items:center;gap:var(--space-20); }`
  - `L28: .viewport { overflow:visible; cursor:grab; padding:.5rem 0 1.5rem; } => .viewport { overflow:visible; cursor:grab;padding:. 0 var(--space-24); }`
  - `L30: .list { display:flex; flex-wrap:wrap; gap:1.25rem; will-change:transform; } => .list { display:flex; flex-wrap:wrap;gap:var(--space-20); will-change:transform; }`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
