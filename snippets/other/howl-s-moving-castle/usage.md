# Howl S Moving Castle

> Category: `other` · Status: `stable` · Kind: `package`
> Files: [example.html](example.html) · [style.css](style.css)

## When to use
Effect or utility snippet without a dedicated category yet. Review and propose a home category when reusing.

## Markup contract
- Stylesheets imported: `./script.js`
- Key classes: `antenna, background, blbottom, blbottom-group, blcover, blfoot, blleg, bltop, brbottom, brfoot, brleg, cannon, castle, castle-container`
- Data attributes: `none`
- Max nesting depth: 7
- Inline script blocks: 2
- Ships as a standalone package under `legacy/` — the original source tree is preserved there.

## Tokens consumed
- `--space--100`
- `--space-1000`
- `--space-120`
- `--space-20`
- `--space-220`
- `--space-240`
- `--space-244`
- `--space-260`
- `--space-300`
- `--space-360`
- `--space-4`
- `--space-40`
- `--space-400`
- `--space-420`
- `--space-460`
- `--space-524`
- `--space-60`
- `--space-600`
- `--space-68`
- `--space-8`
- `--space-80`
- `--space-84`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` links both `../../../tokens.css` and `./style.css`; the swap below keeps exact rendered values.
- No literal values matched the token bar; nothing to swap.

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
