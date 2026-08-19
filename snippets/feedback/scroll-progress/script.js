
  // Design note: a fixed rail fills with scroll progress (scaleY) and the
  // percentage ticks up alongside — wayfinding, not decoration.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.to('[data-progress="fill"]', {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 0.2,
        onUpdate: (self) => {
          document.querySelector('[data-progress="pct"]').textContent =
            Math.round(self.progress * 100) + "%";
        }
      }
    });
  }
