
  // Design note: an amber marker rides an SVG route, its progress bound one
  // to one with the scroll — the journey line dashes after it. Reduced
  // motion: the marker rests at the start and the route stays whole.
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const draw = document.querySelector('[data-path="draw"]');
  const marker = document.querySelector('[data-path="marker"]');
  const LEN = draw.getTotalLength();
  gsap.set(draw, { strokeDasharray: "8 10" });

  if (!reduced) {
    gsap.to(marker, {
      motionPath: { path: ".route", align: ".route", alignOrigin: [0.5, 0.5] },
      ease: "none",
      scrollTrigger: { trigger: '[data-path="map"]', start: "top 80%", end: "bottom 60%", scrub: 1 }
    });
    gsap.fromTo(draw,
      { strokeDashoffset: LEN },
      { strokeDashoffset: 0, ease: "none",
        scrollTrigger: { trigger: '[data-path="map"]', start: "top 80%", end: "bottom 60%", scrub: 1 } });
  }
