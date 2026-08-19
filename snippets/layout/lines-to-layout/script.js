
  // Design note: the blueprint draws itself — hard strokes trace in sequence,
  // joints nick in, and captions set last, all bound to one scroll pass.
  // Reduced motion: the sheet is already complete.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const sheet = document.querySelector('[data-bp="sheet"]');
    const strokes = gsap.utils.toArray('[data-bp="stroke"]');
    const nodes = gsap.utils.toArray('[data-bp="node"]');
    const labels = gsap.utils.toArray('[data-bp="label"]');

    strokes.forEach((s) => {
      const L = s.getTotalLength();
      gsap.set(s, { strokeDasharray: L, strokeDashoffset: L });
    });

    gsap.to(strokes, {
      strokeDashoffset: 0,
      ease: "none",
      stagger: { each: 0.12, from: 0 },
      scrollTrigger: { trigger: sheet, start: "top 72%", end: "bottom 55%", scrub: 1 }
    });
    gsap.fromTo(nodes, { scale: 0.4, opacity: 0 }, {
      scale: 1, opacity: 1, ease: "back.out(2.2)", stagger: 0.09,
      scrollTrigger: { trigger: sheet, start: "top 45%", end: "bottom 40%", scrub: 1 }
    });
    gsap.fromTo(labels, { opacity: 0, x: -8 }, {
      opacity: 1, x: 0, ease: "power2.out", stagger: 0.08,
      scrollTrigger: { trigger: sheet, start: "top 30%", end: "bottom 25%", scrub: 1 }
    });
  }
