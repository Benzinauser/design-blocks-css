# Ghost Trail

> Category: `other` · Status: `duplicate-candidate` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: each cursor step drops a square "past state" that fades and

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `hint, stage`
- Data attributes: `none`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--radius-3px`
- `--space-20`
- `--space-48`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; flex-direction:column; justify-content:fle => .stage { height:100svh; display:flex; flex-direction:column; justify-content:flex-end;padding:clamp(`

## Known duplicates
- Related: `spring-trail` (cluster score 0.77) — differs: Same stage scaffold + palette; cursor trail family. spring-trail: one springy radial-gradient blob chasing the cursor (gsap quickTo lag). ghost-trail: discrete squares echoing past cursor states, fading out; JS-side palette (#8a6df1 purple) not in CSS.
- Related: `gooey-cursor` (cluster score 0.73) — differs: Cursor family. gooey-cursor: continuous SVG gooey blob. ghost-trail: discrete fading square echoes, no filter.
- Related: `balloon-button` (cluster score 0.65) — differs: Both pointer-reactive DOM elements; no semantic overlap (button inflation vs cursor echoes).
- Related: `magnetic-button` (cluster score 0.63)
