
  // Design note: cards sit fanned like a held hand; hovering the pile spreads
  // them flat, hovering one card lifts it forward with an elastic. Reduced
  // motion: the pile stays a plain row.
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const group = document.querySelector('[data-fan="group"]');
  const cards = gsap.utils.toArray('[data-fan="card"]');
  const n = cards.length;
  const ANGLE = 24;

  const fan = () => {
    cards.forEach((card, i) => {
      const a = (i - (n - 1) / 2) * ANGLE;
      gsap.to(card, {
        rotate: a,
        xPercent: a * 3.4,
        transformOrigin: "50% 130%",
        duration: 0.9,
        ease: "power3.out",
        overwrite: "auto"
      });
    });
  };
  const spread = () => {
    cards.forEach((card) => {
      gsap.to(card, {
        rotate: 0, xPercent: 0,
        transformOrigin: "50% 50%",
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.03,
        overwrite: "auto"
      });
    });
  };

  if (!reduced) {
    gsap.set(cards, { transformOrigin: "50% 130%" });
    fan();
    group.addEventListener("mouseenter", spread);
    group.addEventListener("mouseleave", fan);
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -34, scale: 1.14, zIndex: 10, duration: 0.55, ease: "elastic.out(1, 0.5)", overwrite: "auto" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, scale: 1, zIndex: 0, duration: 0.5, ease: "power3.out", overwrite: "auto" });
      });
    });
  }
