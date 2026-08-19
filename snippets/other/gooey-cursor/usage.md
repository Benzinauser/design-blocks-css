# Gooey Cursor

> Category: `other` · Status: `duplicate-candidate` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: a lead blob rides the cursor while a tail blob chases it

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `blob, goo, hint, stage`
- Data attributes: `data-goo`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--space-20`
- `--space-48`
- `--space-64`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 1 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .stage { height:100svh; display:flex; flex-direction:column; justify-content:fle => .stage { height:100svh; display:flex; flex-direction:column; justify-content:flex-end;padding:clamp(`

## Known duplicates
- Related: `spring-trail` (cluster score 0.74) — differs: Trail family again. spring-trail: DOM blob, spring physics. gooey-cursor: SVG circles behind an feGaussianBlur+feColorMatrix gooey filter; SVG defs block present only here.
- Related: `ghost-trail` (cluster score 0.73) — differs: Cursor family. gooey-cursor: continuous SVG gooey blob. ghost-trail: discrete fading square echoes, no filter.
