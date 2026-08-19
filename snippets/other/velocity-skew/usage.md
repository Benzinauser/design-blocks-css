# Velocity Skew

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: every block leans by skewX proportional to scroll velocity

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `block, blocks, hint, num`
- Data attributes: `data-velocity`
- Max nesting depth: 5
- Inline script blocks: 1

## Tokens consumed
- `--font-size-136px`
- `--space-16`
- `--space-20`
- `--space-24`
- `--space-32`
- `--space-40`
- `--space-480`
- `--space-64`
- `--space-80`
- `--space-96`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 3 declaration(s) swapped to tokens (exact-value replacements):
  - `L8: padding:clamp(2.5rem,8vh,var(--space-96)) clamp(1.25rem,4vw,var(--space-64)); => padding:clamp(var(--space-40),8vh,var(--space-96)) clamp(var(--space-20),4vw,var(--space-64));`
  - `L17: .block p { color:var(--bone-dim); max-width:30rem;margin-top:var(--space-16); } => .block p { color:var(--bone-dim);max-width:var(--space-480);margin-top:var(--space-16); }`
  - `L18: .hint { position:fixed; bottom:1.5rem;left:clamp(1.25rem,4vw,var(--space-64)); c => .hint { position:fixed;bottom:var(--space-24);left:clamp(var(--space-20),4vw,var(--space-64)); color`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
