# Wave Text

> Category: `typography` · Status: `duplicate-candidate` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Text treatments and kinetic typography. Use when the message lives in the words themselves — when type should carry motion or atmosphere rather than static layout. Mechanism: Design note: an ambient ripple travels across the characters — a gentle,

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://assets.codepen.io/16327/SplitText3.min.js`
- Key classes: `hint, kicker, line, wave`
- Data attributes: `data-wave`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--font-size-136px`
- `--space-20`
- `--space-48`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .wave { height:100svh; display:flex; flex-direction:column; align-items:center;  => .wave { height:100svh; display:flex; flex-direction:column; align-items:center; justify-content:cent`

## Known duplicates
- Related: `morph-blob` (cluster score 0.74) — differs: Shared full-screen stage + ink/bone scaffold. wave-text: ambient ripple travels across text characters. morph-blob: SVG blob breathes through four pose paths (different keyed path commands).
- Related: `scramble-decode-text` (cluster score 0.69) — differs: Text effects on identical scaffold. scramble: lines decode noise-to-message sequentially. wave: ambient ripple ambience.
- Related: `reading-highlight` (cluster score 0.69) — differs: Word-level text effects. reading-highlight: scroll-driven dim-to-ink word highlighting. wave: ambient ripple.
