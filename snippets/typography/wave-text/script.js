
  // Design note: an ambient ripple travels across the characters — a gentle,
  // looping sine, yoyo'd so nothing ever rests at a pose. Reduced motion:
  // the line sits still.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const line = document.querySelector('[data-wave="line"]');
    const split = new SplitText(line, { type: "chars", charsClass: "char" });

    gsap.to(split.chars, {
      y: -16,
      duration: 0.85,
      ease: "sine.inOut",
      stagger: { each: 0.07, yoyo: true, repeat: -1 },
      repeat: -1
    });
  }
