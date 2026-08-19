
  // Design note: six stacked repetitions of one word become a depth field —
  // outer layers travel faster than the middle, so the word fans apart in
  // z-space while you read. Reduced motion: one clean word, no travel.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const stack = document.querySelector('[data-depth="stack"]');
    gsap.utils.toArray('[data-depth="line"]').forEach((line, i) => {
      const depth = (i - 2.5) / 2.5;         // -1 … 1
      const travel = 130 + depth * 170;      // outer layers move further
      gsap.fromTo(line, { yPercent: -travel * 0.5 }, {
        yPercent: travel * 0.5,
        ease: "none",
        scrollTrigger: { trigger: '[data-depth="zone"]', start: "top top", end: "bottom bottom", scrub: 1 }
      });
    });
    stack; // avoid unused warnings
  }
