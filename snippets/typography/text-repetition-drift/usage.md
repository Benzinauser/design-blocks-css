# Text Repetition Drift

> Category: `typography` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Text treatments and kinetic typography. Use when the message lives in the words themselves — when type should carry motion or atmosphere rather than static layout. Mechanism: Design note: six stacked repetitions of one word become a depth field —

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `cap, depth, stack, word`
- Data attributes: `data-depth`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--space-32`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L10: font-size:clamp(3.5rem,12vw,11rem); line-height:1.15; text-align:center; => font-size:clamp(var(--font-size-),12vw,var(--font-size-)); line-height:1.15; text-align:center;`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
