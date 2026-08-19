
  // Design note: each word's rule is an SVG stroke that draws from the left
  // on hover and un-draws on leave — nothing else moves, one mechanism.
  // Reduced motion: the line appears instantly via stroke-dashoffset CSS.
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = gsap.utils.toArray('[data-line="item"]');

  items.forEach((item) => {
    const rule = item.querySelector('[data-line="rule"]');
    const LEN = rule.getTotalLength();
    gsap.set(rule, { strokeDasharray: LEN, strokeDashoffset: LEN });

    const draw = (on) => {
      if (reduced) {
        gsap.set(rule, { strokeDashoffset: on ? 0 : LEN });
        return;
      }
      gsap.to(rule, {
        strokeDashoffset: on ? 0 : LEN,
        duration: on ? 0.5 : 0.45,
        ease: on ? "power3.inOut" : "power2.out",
        overwrite: "auto"
      });
    };
    item.addEventListener("mouseenter", () => draw(true));
    item.addEventListener("mouseleave", () => draw(false));
  });
