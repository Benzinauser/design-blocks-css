# Motion Atlas

> Category: `other` · Status: `stable` · Kind: `package`
> Files: [example.html](example.html) · [style.css](style.css)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing.

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js, https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js, https://assets.codepen.io/16327/InertiaPlugin.min.js, https://assets.codepen.io/16327/SplitText3.min.js, https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js, ./script.js`
- Key classes: `ambient, btn, btn--ghost, cap-body, cap-body-inner, cap-item, cap-list, cap-name, cap-num, cap-plus, cap-row, capabilities, card, card--v1`
- Data attributes: `data-cap, data-dir, data-fill, data-header, data-hero, data-outro, data-reel, data-scroll-to, data-section, data-transit`
- Max nesting depth: 9
- Inline script blocks: 0
- Ships as a standalone package under `legacy/` — the original source tree is preserved there.

## Tokens consumed
- `--color-amber-light`
- `--color-blue`
- `--color-blue-light`
- `--color-green`
- `--color-green-light`
- `--color-mint`
- `--color-orange`
- `--color-peach`
- `--color-sand`
- `--color-teal-light`
- `--color-violet`
- `--color-violet-light`
- `--font-size-104px`
- `--font-size-16px`
- `--radius-2px`
- `--radius-pill`
- `--radius-round`
- `--space-144`
- `--space-16`
- `--space-192`
- `--space-20`
- `--space-28`
- `--space-32`
- `--space-320`
- `--space-340`
- `--space-40`
- `--space-420`
- `--space-48`
- `--space-480`
- `--space-544`
- `--space-64`
- `--space-72`
- `--space-736`
- `--space-760`
- `--space-8`
- `--space-80`
- `--space-96`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` links both `../../../tokens.css` and `./style.css`; the swap below keeps exact rendered values.
- 14 declaration(s) swapped to tokens (exact-value replacements):
  - `L142: gap: clamp(var(--space-16), 3vw, 2.5rem); => gap: clamp(var(--space-16), 3vw, var(--space-40));`
  - `L174: gap: 0.5rem; => gap: var(--space-8);`
  - `L202: padding: calc(var(--header-h) + clamp(var(--space-32), 6vh, var(--space-80))) va => padding: calc(var(--header-h) + clamp(var(--space-32), 6vh, var(--space-80))) var(--pad) clamp(var(-`
  - `L227: font-size: clamp(3rem, 10.5vw, 10.5rem); => font-size: clamp(var(--font-size-), 10.5vw, var(--font-size-));`
  - `L280: margin-bottom: clamp(2.5rem, 6vh, 4.5rem); => margin-bottom: clamp(var(--space-40), 6vh, var(--space-72));`
  - `L296: .section-sub { color: var(--bone-dim); max-width: 30rem; } => .section-sub { color: var(--bone-dim);max-width: var(--space-480); }`
  - `L305: gap: 1.25rem; => gap: var(--space-20);`
  - `L351: padding: 0.5rem 0 var(--space-32); => padding: var(--space-8) 0 var(--space-32);`
  - `L359: gap: clamp(var(--space-16), 2vw, 1.75rem); => gap: clamp(var(--space-16), 2vw, var(--space-28));`
  - `L488: margin-top: 0.5rem; => margin-top: var(--space-8);`
  - `L514: .transit-head { margin-bottom: clamp(2.5rem, 6vh, var(--space-64)); } => .transit-head { margin-bottom: clamp(var(--space-40), 6vh, var(--space-64)); }`
  - `L568: margin-top: clamp(2.5rem, 7vh, var(--space-80)); => margin-top: clamp(var(--space-40), 7vh, var(--space-80));`
  - `L654: padding: clamp(var(--space-96), 16vh, var(--space-192)) var(--pad) clamp(2.5rem, => padding: clamp(var(--space-96), 16vh, var(--space-192)) var(--pad) clamp(var(--space-40), 6vh, var(-`
  - `L687: margin-top: clamp(3rem, 8vh, var(--space-80)); => margin-top: clamp(var(--space-48), 8vh, var(--space-80));`

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
