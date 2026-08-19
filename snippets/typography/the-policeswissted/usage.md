# The Policeswissted

> Category: `typography` · Status: `stable` · Kind: `package`
> Files: [example.html](example.html) · [style.css](style.css)

## When to use
Text treatments and kinetic typography. Use when the message lives in the words themselves — when type should carry motion or atmosphere rather than static layout.

## Markup contract
- Stylesheets imported: `./script.js`
- Key classes: `band, content, date, details, freq, location, stage`
- Data attributes: `none`
- Max nesting depth: 7
- Inline script blocks: 5
- Ships as a standalone package under `legacy/` — the original source tree is preserved there.

## Tokens consumed
- `--space-1008`
- `--space-68`
- `--space-716`

## Token migration notes
- Tokens live in `../../../tokens.css` (one level up from this snippet folder: `snippets/tokens.css`).
- `example.html` links both `../../../tokens.css` and `./style.css`; the swap below keeps exact rendered values.
- No literal values matched the token bar; nothing to swap.

## Known duplicates
- none flagged (audit found no duplicate-candidate cluster containing this snippet)
