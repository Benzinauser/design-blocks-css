# Reading Highlight

> Category: `typography` · Status: `duplicate-candidate` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Text treatments and kinetic typography. Use when the message lives in the words themselves — when type should carry motion or atmosphere rather than static layout. Mechanism: Design note: each word turns from dim to full ink as the scroll passes —

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js, https://assets.codepen.io/16327/SplitText3.min.js`
- Key classes: `copy, hint, kicker, read`
- Data attributes: `data-read`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--color-bone-alpha-18`
- `--space-20`
- `--space-48`
- `--space-64`
- `--space-832`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .read { min-height:100svh; display:flex; flex-direction:column; justify-content: => .read { min-height:100svh; display:flex; flex-direction:column; justify-content:center;gap:var(--spa`

## Known duplicates
- Related: `wave-text` (cluster score 0.69) — differs: Word-level text effects. reading-highlight: scroll-driven dim-to-ink word highlighting. wave: ambient ripple.
- Related: `morph-blob` (cluster score 0.69) — differs: Shared scaffold only; no structural similarity (word highlighter vs SVG blob) - kept for transparency.
- Related: `scramble-decode-text` (cluster score 0.64)
