
  // Design note: two half-screen curtains part to opposite edges as you
  // scroll, unveiling the headline — a theatrical wipe. Reduced motion: the
  // curtains are removed by CSS and the stage simply shows its content.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const [l, r] = gsap.utils.toArray('[data-curtain="panel"]');

    gsap.timeline({
      scrollTrigger: {
        trigger: '[data-curtain="stage"]',
        start: "top top",
        end: "+=120%",
        scrub: 0.6,
        pin: true,
        anticipatePin: 1
      }
    })
      .fromTo(l, { xPercent: 0 }, { xPercent: -100, ease: "none" }, 0)
      .fromTo(r, { xPercent: 0 }, { xPercent: 100, ease: "none" }, 0);
  }
