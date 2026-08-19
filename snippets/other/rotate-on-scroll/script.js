
  // Design note: each word completes one full rotation while it travels
  // through the viewport — rotation, not translation, is the scroll currency.
  // Reduced motion: the words simply stand.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.utils.toArray('[data-rot="word"]').forEach((word) => {
      gsap.fromTo(word, { rotation: 0 }, {
        rotation: 360,
        ease: "none",
        scrollTrigger: { trigger: word, start: "top bottom", end: "bottom top", scrub: 1 }
      });
    });
  }
