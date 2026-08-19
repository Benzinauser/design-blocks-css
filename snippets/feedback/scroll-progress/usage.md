# Scroll Progress

> Category: `feedback` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Feedback and status indicators. Use to confirm progress, completion, or attention signals. Mechanism: Design note: a fixed rail fills with scroll progress (scaleY) and the

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `fill, pct, progress, sec, sections, track`
- Data attributes: `data-progress`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--space-112`
- `--space-16`
- `--space-20`
- `--space-48`
- `--space-480`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 3 declaration(s) swapped to tokens (exact-value replacements):
  - `L8: position:fixed; top:0; right:clamp(1.25rem,3vw,3rem); bottom:0; z-index:10; => position:fixed; top:0;right:clamp(var(--space-20),3vw,var(--space-48)); bottom:0; z-index:10;`
  - `L22: .sec { min-height:100svh; display:flex; flex-direction:column; justify-content:c => .sec { min-height:100svh; display:flex; flex-direction:column; justify-content:center;padding:clamp(`
  - `L25: .sec p { color:var(--bone-dim); max-width:30rem; margin-top:1.2rem; } => .sec p { color:var(--bone-dim);max-width:var(--space-480); margin-top:1.2rem; }`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
