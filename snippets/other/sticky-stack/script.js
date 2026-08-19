
  // Design note: pinned stack — each card rises from below and covers the
  // previous while it scales back slightly; one scrubbed timeline. Reduced
  // motion: no pin, the cards keep their natural flow.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const cards = gsap.utils.toArray('[data-stack="cards"] > .card');

    gsap.set(cards, { position: "absolute", inset: 0 });
    gsap.set(cards.slice(1), { yPercent: 100 });
    gsap.set('[data-stack="cards"]', { height: "100svh" }); // keep pin space after absolutising

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-stack="cards"]',
        start: "top top",
        end: "+=300%",
        scrub: 0.6,
        pin: true,
        anticipatePin: 1
      }
    });

    cards.forEach((card, i) => {
      if (i === 0) return;
      tl.to(card, { yPercent: 0, ease: "none" }, i === 1 ? 0 : "<0.1")
        .to(cards[i - 1], { scale: 0.93, ease: "none" }, "<");
    });
  }
