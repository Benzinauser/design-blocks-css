# Blur Resolve Text

> Category: `typography` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Text treatments and kinetic typography. Use when the message lives in the words themselves — when type should carry motion or atmosphere rather than static layout. Mechanism: Design note: characters resolve from blur + lift into sharp focus,

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js, https://assets.codepen.io/16327/SplitText3.min.js`
- Key classes: `hero, kicker, lede, title`
- Data attributes: `data-blur`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--space-144`
- `--space-20`
- `--space-32`
- `--space-480`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 2 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .hero { min-height:100svh; display:flex; flex-direction:column; justify-content: => .hero { min-height:100svh; display:flex; flex-direction:column; justify-content:center;gap:var(--spa`
  - `L14: .lede { max-width:30rem; color:var(--bone-dim); } => .lede { max-width:var(--space-480); color:var(--bone-dim); }`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
