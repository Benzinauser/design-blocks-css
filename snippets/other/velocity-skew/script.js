
  // Design note: every block leans by skewX proportional to scroll velocity
  // (clamped), smoothed with quickTo — the page itself feels kinetic.
  // Reduced motion: no skew.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const blocks = gsap.utils.toArray('[data-velocity="blocks"] .block');
    const skewTo = blocks.map((block) => gsap.quickTo(block, "skewX", { duration: 0.4, ease: "power2.out" }));

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const v = gsap.utils.clamp(-11, 11, self.getVelocity() * 0.045);
        skewTo.forEach((fn) => fn(v));
      }
    });
  }
