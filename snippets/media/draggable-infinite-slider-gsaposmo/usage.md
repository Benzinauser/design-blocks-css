# Draggable Infinite Slider Gsaposmo

> Category: `media` · Status: `needs-review` · Kind: `package`
> Files: [example.html](example.html) · [style.css](style.css)

## When to use
Media presentation. Use for galleries, sliders, and image choreography.

## Markup contract
- Stylesheets imported: `./script.js`
- Key classes: `active, bottom-left, bottom-right, button, button-arrow, button-overlay, caption, caption-dot, cloneable, count-column, count-heading, count-row-divider, main, next`
- Data attributes: `data-slide-count, data-slider`
- Max nesting depth: 10
- Inline script blocks: 3
- Ships as a standalone package under `legacy/` — the original source tree is preserved there.

## Tokens consumed
- `--color-black`
- `--radius-04em`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` links both `../../../tokens.css` and `./style.css`; the swap below keeps exact rendered values.
- No literal values matched the token bar; nothing to swap.

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
