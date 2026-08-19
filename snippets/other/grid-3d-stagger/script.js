
  // Design note: the grid rises from a flat horizon — every tile stands up
  // from rotationX 90° in perspective, row by row, as the section enters.
  // Reduced motion: the grid is simply there.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const tiles = gsap.utils.toArray('[data-grid3="tile"]');
    gsap.set(tiles, { transformOrigin: "50% 100%" });
    gsap.fromTo(tiles,
      { rotationX: 90, opacity: 0.25 },
      {
        rotationX: 0, opacity: 1,
        duration: 1.1,
        ease: "power4.out",
        stagger: { each: 0.09, from: "start", grid: "auto", axis: "y" },
        scrollTrigger: { trigger: '[data-grid3="grid"]', start: "top 78%", once: true }
      });
  }
