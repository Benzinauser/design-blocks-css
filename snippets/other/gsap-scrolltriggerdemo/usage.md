# Gsap Scrolltriggerdemo

> Category: `other` · Status: `stable` · Kind: `package`
> Files: [example.html](example.html) · [style.css](style.css)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing.

## Markup contract
- Stylesheets imported: `./script.js`
- Key classes: `none`
- Data attributes: `none`
- Max nesting depth: 6
- Inline script blocks: 3
- Ships as a standalone package under `legacy/` — the original source tree is preserved there.

## Tokens consumed
- `--font-size-256px`
- `--space-128`
- `--space-16`
- `--space-32`
- `--space-500`
- `--space-80`
- `--space-800`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` links both `../../../tokens.css` and `./style.css`; the swap below keeps exact rendered values.
- No literal values matched the token bar; nothing to swap.

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
