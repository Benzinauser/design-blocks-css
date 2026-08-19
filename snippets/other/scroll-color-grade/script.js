
  // Design note: the scene's grade shifts — hue and saturation follow the
  // scroll, so the emotional temperature changes without anything moving.
  // Reduced motion: the base (night) grade stays.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.to('[data-grade="panel"]', {
      filter: "hue-rotate(160deg) saturate(1.7) brightness(1.15)",
      ease: "none",
      scrollTrigger: { trigger: '[data-grade="panel"]', start: "top top", end: "bottom bottom", scrub: 0.6 }
    });
  }
