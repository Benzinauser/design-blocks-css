
  // Design note: one line, split into characters that rise out of the fold
  // with a slight rotation, staggered 0.035 — a closing beat, not a parade.
  // Reduced motion: no split, no animation; the line is simply there.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const line = document.querySelector('[data-outro="line"]');
    const split = new SplitText(line, { type: "chars", charsClass: "char" });
    gsap.from(split.chars, {
      yPercent: 120,
      rotate: 3,
      duration: 1.05,
      ease: "power4.out",
      stagger: 0.035,
      scrollTrigger: {
        trigger: line,
        start: "top 82%"
      }
    });
  }
