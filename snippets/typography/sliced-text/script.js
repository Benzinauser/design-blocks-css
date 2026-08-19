
  // Design note: five blades of one word, each clipped to its band of the
  // headline; scrolling drives each blade horizontally at a different speed,
  // shearing the word apart like glass. Reduced motion: the word stands whole.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const glass = document.querySelector('[data-slice="glass"]');
    gsap.utils.toArray('[data-slice="blade"]').forEach((blade, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      const amp = 30 + i * 26;
      gsap.fromTo(blade, { xPercent: 0 }, {
        xPercent: dir * (amp / glass.clientWidth) * 100,
        ease: "none",
        scrollTrigger: { trigger: glass, start: "top bottom", end: "bottom top", scrub: 1 }
      });
    });
  }
