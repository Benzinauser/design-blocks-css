# Gait Locomotion

> Category: `other` · Status: `stable` · Kind: `effect`
> Files: [example.html](example.html) · [style.css](style.css) · [script.js](script.js)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing. Mechanism: Design note: a four-limb machine whose feet are phase-locked to a ruled

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js`
- Key classes: `accent, ground, hint, kicker, leg, leg__foot, leg__hip, leg__strut, mono, rover, rover__body, rover__dash, rover__kicker, rover__row`
- Data attributes: `data-gait`
- Max nesting depth: 8
- Inline script blocks: 1

## Tokens consumed
- `--color-bone-alpha-30`
- `--radius-2px`
- `--radius-3px`
- `--radius-round`
- `--space--4`
- `--space-16`
- `--space-20`
- `--space-24`
- `--space-240`
- `--space-28`
- `--space-32`
- `--space-320`
- `--space-40`
- `--space-64`
- `--space-8`
- `--space-88`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` keeps its original inline styles (source of truth). `style.css` is the tokenized working copy — reuse it, not the inline block.
- 2 declaration(s) swapped to tokens (exact-value replacements):
  - `L13: .stage { height:100svh; display:flex; flex-direction:column;padding:clamp(1.25re => .stage { height:100svh; display:flex; flex-direction:column;padding:clamp(var(--space-20),3vw,var(--`
  - `L55: .hint { font-size:.68rem; letter-spacing:.14em; text-transform:uppercase; color: => .hint { font-size:.68rem; letter-spacing:.14em; text-transform:uppercase; color:var(--bone-dim); fon`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
