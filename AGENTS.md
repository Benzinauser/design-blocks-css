# Design System — Agent Operating Rules

This directory is a browsable, agent-consumable design system, migrated from a raw
snippet library. The audit trail lives in `audit-report.json`; the token layer in
`tokens.css`; the machine-readable catalog in `index.json`; human notes in `vault/`.

> Scope note: the parent repository `AGENTS.md` defines the Motion Director workflow
> for building pages. This file governs only the design-system library below this
> directory — snippet reuse, tokens, and registration. When both apply, this file
> wins for design-system decisions, the parent file wins for motion direction.

## Before writing any CSS or HTML, in order

1. **Search the index first.** Open `index.json` and look for an existing snippet
   that already does what you need (category, tags, description, status). Prefer
   reuse over re-implementation.
2. **Reuse, don't fork.** Copy the snippet folder (`style.css`, `example.html`,
   `usage.md`) or reference its tokens. Never silently fork a new variant: if you
   must deviate, register the deviation as its own snippet and cross-note the
   relationship in both `usage.md` files.
3. **Read the `usage.md` before touching markup.** Every snippet folder documents
   When to use, the markup contract (classes, data attributes, scripts), tokens
   consumed, migration notes, and known duplicates. Follow that contract.
4. **Use tokens; never hardcode their equivalents.** Any value with a defined
   token in `tokens.css` must be referenced as `var(--token)`. Check `tokens.css`
   before writing literals — spacing and font sizes run on the 4px base unit.
5. **Register new snippets.** When adding a snippet: create
   `snippets/<category>/<kebab-name>/{style.css, example.html, usage.md}`, update
   `index.json` and the `vault/` note plus `Tokens.md` backlinks, then commit per
   category.
6. **Respect statuses.** `duplicate-candidate` snippets are flagged, never merged
   or deleted. `needs-review` snippets have known issues documented in `usage.md`.
   Snippets under `other/` carry `#needs-category` — propose a home category, do
   not invent one.
7. **Never change visual output during migration.** Token swaps are exact-value
   replacements only. Below-threshold literals stay hardcoded (see
   `audit-report.json` `token_candidates`).

## Where things live

- `snippets/<category>/<kebab-name>/` — one folder per snippet
  - `example.html` — runnable demo (packages link `tokens.css`; effects keep their
    original inline styles as source of truth)
  - `style.css` — tokenized working stylesheet (exact-value swaps only)
  - `script.js` — extracted inline scripts, where present
  - `usage.md` — when/why/how to reuse this snippet
  - `legacy/` — untouched original package trees (packages only)
- `tokens.css` — deterministic token layer (see derivation rules in its header)
- `index.json` — machine-readable catalog (schema v1.0)
- `vault/` — Obsidian notes: one per snippet, `Tokens.md` with consumer backlinks,
  `README.md` as the map of contents
- `audit-report.json` — the read-only audit the migration was built from

## Token derivation rules (do not extend casually)

- color: repeated across 2+ snippets (or within one design-scale step of a
  repeated color) → token
- spacing / font-size: multiple of the detected 4px base unit → token, even for
  single use
- radius: repeated 2+ places → token
- shadow: only one repeated shadow exists → no `--shadow-*` tokens
- anything below the bar stays hardcoded and is logged, not swapped

## Guardrails

- Never delete, merge, or "fix" duplicates — flag them (`#duplicate-candidate`).
- Never invent naming, scales, or categories not implied by the existing CSS.
- `example.html` files of effects are pristine originals; if you need a style
  change, change `style.css` (and re-verify the demo renders identically).

