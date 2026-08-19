# Spring Trail

> Category: `other` · Status: `duplicate-candidate` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: a spring-mass companion — the blob chases the cursor with

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `blob, hint, stage`
- Data attributes: `data-trail`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--radius-round`
- `--space--12`
- `--space-20`
- `--space-48`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; align-items:flex-end;padding:clamp(1.25rem => .stage { height:100svh; display:flex; align-items:flex-end;padding:clamp(var(--space-20),4vw,var(--s`

## Known duplicates
- Related: `ghost-trail` (cluster score 0.77) — differs: Same stage scaffold + palette; cursor trail family. spring-trail: one springy radial-gradient blob chasing the cursor (gsap quickTo lag). ghost-trail: discrete squares echoing past cursor states, fading out; JS-side palette (#8a6df1 purple) not in CSS.
- Related: `gooey-cursor` (cluster score 0.74) — differs: Trail family again. spring-trail: DOM blob, spring physics. gooey-cursor: SVG circles behind an feGaussianBlur+feColorMatrix gooey filter; SVG defs block present only here.
