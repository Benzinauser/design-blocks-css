# Gsap Grid

> Category: `layout` · Status: `stable` · Kind: `package`
> Files: [example.html](example.html) · [style.css](style.css)

## When to use
Layout construction and page organization. Use when arranging regions, grids, or view transitions.

## Markup contract
- Stylesheets imported: `./script.js`
- Key classes: `ball, bar, black, blue, box, box-content, circle, color_pallet, ellipse, eye, eye-pupil, following-star, half-circle, line`
- Data attributes: `none`
- Max nesting depth: 7
- Inline script blocks: 6
- Ships as a standalone package under `legacy/` — the original source tree is preserved there.

## Tokens consumed
- `--color-black`
- `--color-blue`
- `--color-white`
- `--space-12`
- `--space-20`
- `--space-80`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` links both `../../../tokens.css` and `./style.css`; the swap below keeps exact rendered values.
- No literal values matched the token bar; nothing to swap.

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
