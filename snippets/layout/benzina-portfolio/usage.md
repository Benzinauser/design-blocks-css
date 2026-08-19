# Benzina Portfolio

> Category: `layout` · Status: `needs-review` · Kind: `package`
> Files: [example.html](example.html) · [style.css](style.css)

## When to use
Layout construction and page organization. Use when arranging regions, grids, or view transitions.

## Markup contract
- Stylesheets imported: `https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js, https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js, https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/Draggable.min.js, https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/InertiaPlugin.min.js, ./script.js`
- Key classes: `cap-hint, cap-list, cap-meta, cap-slide, cap-slides, cap-text1, cap-text2, caps, cursor-trail, footer, footer__left, footer__mid, footer__right, footer__watermark`
- Data attributes: `data-1, data-2, data-3, data-slide-count, data-slider, data-svc`
- Max nesting depth: 8
- Inline script blocks: 0
- Ships as a standalone package under `legacy/` — the original source tree is preserved there.

## Tokens consumed
- `--font-size-108px`
- `--font-size-156px`
- `--font-size-168px`
- `--font-size-36px`
- `--font-size-64px`
- `--radius-round`
- `--space--12`
- `--space--4`
- `--space--8`
- `--space-1008`
- `--space-1060`
- `--space-12`
- `--space-152`
- `--space-176`
- `--space-20`
- `--space-24`
- `--space-240`
- `--space-28`
- `--space-300`
- `--space-336`
- `--space-340`
- `--space-40`
- `--space-44`
- `--space-48`
- `--space-480`
- `--space-52`
- `--space-556`
- `--space-56`
- `--space-716`
- `--space-72`
- `--space-720`
- `--space-8`
- `--space-84`
- `--space-92`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` links both `../../../tokens.css` and `./style.css`; the swap below keeps exact rendered values.
- No literal values matched the token bar; nothing to swap.

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
