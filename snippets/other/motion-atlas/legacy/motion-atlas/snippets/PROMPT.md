# Prompt: Generate a GSAP Motion Snippet

Use this prompt with any AI coding assistant (ChatGPT, Claude, Gemini, a local
agent, …) to produce **one single-file GSAP animation snippet** in the style
of the `motion-atlas/snippets/` collection. It works as-is — no context from
this repository is needed. Replace the two placeholders and paste.

---

**You are a senior motion designer who implements with GSAP. Create ONE
self-contained HTML snippet that implements the animation design below,
following the Motion Director principles and the technical spec exactly.
Do not write a whole page — one focused animation, one file.**

## ANIMATION DESIGN

<!-- REPLACE: describe the animation design in one or two sentences.
     Example: "A pinned scroll scene where a vertical stack of cards fans
     outward like a deck of cards as you scroll, then re-stacks and repeats." -->

## CONTENT THEME

<!-- REPLACE (optional): the subject matter or copy to use.
     Example: "a coffee roaster's five process steps" -->

## MOTION DIRECTOR PRINCIPLES

1. **Design first, motion second.** Before writing code, state in 1–3 lines:
   what the user should notice first, the emotional quality, and the
   choreography (trigger, sequence, intensity).
2. **Restraint.** Use the minimum number of motion mechanisms needed for a
   strong result. Every animation must have a job; nothing moves for its own
   sake. No parallax, blur, or stagger just because it is available.
3. **Variation.** This snippet must feel fresh. Do NOT copy the choreography
   of these existing snippets: masked line reveal, draggable infinite loop,
   pinned opposite-drift tracks, scrubbed clip-fill text, elastic accordion
   rows, SplitText character rise. Reinterpret, combine, or invent — do not
   duplicate.
4. **Hierarchy.** Motion supports the reading order; it never fights it.

## TECHNICAL SPEC

- **Format:** ONE `.html` file. No build step, no external CSS/JS files.
  Inline `<style>` and `<script>`.
- **Libraries:** GSAP 3.12.5 from jsDelivr. Load ScrollTrigger, Draggable,
  SplitText, or InertiaPlugin ONLY if the design actually uses them — every
  `<script>` tag must be justified. Exact URLs below.
- **Motion:** all animation via GSAP. Prefer transforms and opacity. Avoid
  layout-animating properties unless the effect requires them (e.g. `height`
  for an accordion).
- **Hooks:** use `data-*` attributes as JS hooks (e.g. `data-reveal`,
  `data-loop`). No inline event handlers, no `onclick=`.
- **Visual tokens:** background ink `#101113`, text bone `#f2ede3`, accents
  vermilion `#ff4a17`, amber `#ffc43d`, teal `#2fd6c3`. Fonts: Anton
  (display, uppercase), Space Grotesk (body), IBM Plex Mono (labels — a
  `.mono` class with `font-size:.72rem; letter-spacing:.14em;
  text-transform:uppercase`).
- **Progressive enhancement:** content must be readable with JavaScript
  disabled. Prefer `gsap.from()` so the DOM default IS the final state; never
  hide content behind animation.
- **Reduced motion:** respect `prefers-reduced-motion: reduce` — skip
  ambient/entrance/scrub/elastic motion and show final states promptly; keep
  user-initiated interactions (click, drag, tap).
- **Responsive:** on small screens simplify or reduce amplitude; never merely
  scale the desktop effect down. If there is an ambient layer: ~40 particles
  max, `pointer-events:none`.
- **No WebGL/Three.js.** DOM + CSS + GSAP only.

## CDN TAGS (include only what you use)

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js"></script>
<script src="https://assets.codepen.io/16327/SplitText3.min.js"></script>
<script src="https://assets.codepen.io/16327/InertiaPlugin.min.js"></script>
```

## OUTPUT CONTRACT

Return exactly one complete HTML file containing:

1. A descriptive `<title>` (e.g. "07 — Card fan-out").
2. Semantic content structure; `aria-*` and keyboard support on anything
   interactive.
3. Inline CSS: tokens, layout, and any masks/clips the motion needs.
4. Inline JS: `gsap.registerPlugin(...)` for the plugins used, a
   `prefers-reduced-motion` guard, and the animation code.
5. Before the code, a short comment with a 3-line **design note**:
   primary concept / supporting motion / trigger. Not an essay.

## SELF-REVIEW BEFORE SUBMITTING

- Does the animation match the stated concept?
- Is any motion redundant?
- Are final states visible under reduced motion and with JS disabled?
- Are only transforms/opacity animated where possible?
- Are there competing tweens, or anything that could throw a console error?
- Would this snippet feel at home next to the other six snippets?

---

### How to use it

1. Copy everything above (from **You are a senior motion designer** through
   **SELF-REVIEW**).
2. Fill in the two placeholders with your animation idea and optional theme.
3. Paste into any AI, take the returned file, open it in a browser.
4. If you like it, save it as `motion-atlas/snippets/33-<name>.html` (next
   free number after the table in `README.md`) and bump the "33" forward.
