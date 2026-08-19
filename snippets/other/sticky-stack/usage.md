# Sticky Stack

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: pinned stack — each card rises from below and covers the

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js`
- Key classes: `card, card--a, card--b, card--c, cards, intro, stack, tail`
- Data attributes: `data-stack`
- Max nesting depth: 6
- Inline script blocks: 1

## Tokens consumed
- `--color-amber-light`
- `--color-ink-alpha-85`
- `--color-orange`
- `--color-teal-light`
- `--space-16`
- `--space-20`
- `--space-32`
- `--space-448`
- `--space-64`
- `--space-80`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 3 declaration(s) swapped to tokens (exact-value replacements):
  - `L6: .intro { min-height:60svh; display:flex; align-items:flex-end;padding:clamp(1.25 => .intro { min-height:60svh; display:flex; align-items:flex-end;padding:clamp(var(--space-20),4vw,var(`
  - `L11: .stack { padding:0 clamp(1.25rem,4vw,var(--space-64)); } => .stack { padding:0 clamp(var(--space-20),4vw,var(--space-64)); }`
  - `L22: .tail { min-height:60svh; display:flex; align-items:flex-start;padding:clamp(1.2 => .tail { min-height:60svh; display:flex; align-items:flex-start;padding:clamp(var(--space-20),4vw,var`

## Known duplicates
- Related: `fan-spread` (cluster score 0.64)
