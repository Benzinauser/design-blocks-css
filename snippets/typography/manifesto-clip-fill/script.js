
  // Design note: each line's gradient fill is scrubbed from 0% to 100% width
  // against a ghost outline — the fill follows the reader, line by line.
  // Reduced motion: CSS forces 100% fill; JS adds nothing.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.utils.toArray('[data-fill="line"]').forEach((fill) => {
      gsap.fromTo(fill,
        { backgroundSize: "0% 100%" },
        {
          backgroundSize: "100% 100%",
          ease: "none",
          scrollTrigger: { trigger: fill, start: "top 88%", end: "top 32%", scrub: 0.5 }
        });
    });
    gsap.fromTo('[data-fill="note"]',
      { autoAlpha: 0, y: 12 },
      {
        autoAlpha: 1, y: 0, duration: 0.9, ease: "power2.out",
        scrollTrigger: { trigger: '[data-fill="note"]', start: "top 92%" }
      });
  }
