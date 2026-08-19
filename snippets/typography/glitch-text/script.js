
  // Design note: a deliberate fault — hover introduces two chromatic copies
  // sliced into bands that jitter for a beat before the signal reasserts.
  // Reduced motion: no glitch, only the clean word (fault layers stay hidden).
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const wrap = document.querySelector('[data-glitch="wrap"]');
    const r = document.querySelector('[data-glitch="r"]');
    const c = document.querySelector('[data-glitch="c"]');

    const glitch = () => {
      const seq = gsap.timeline();
      const slices = [6, 18, 42, 64, 82];
      seq.set(r, { opacity: 1, clipPath: "inset(0 0 100% 0)" });
      slices.forEach((y, s) => {
        seq.to(r, { clipPath: `inset(${y}% 0 ${100 - y - 8}% 0)`, x: -14, duration: 0.04, ease: "none" }, s * 0.06)
           .to(r, { clipPath: "inset(0 0 100% 0)", x: 0, duration: 0.03, ease: "none" }, s * 0.06 + 0.05);
      });
      seq.set(c, { opacity: 1, clipPath: "inset(0 0 100% 0)" }, 0.1)
         .to(c, { x: 12, duration: 0.05, yoyo: true, repeat: 5, ease: "none" }, 0.1);
      slices.forEach((y, s) => {
        seq.to(c, { clipPath: `inset(${y + 4}% 0 ${100 - y - 10}% 0)`, duration: 0.035, ease: "none" }, 0.16 + s * 0.06)
           .to(c, { clipPath: "inset(0 0 100% 0)", duration: 0.03, ease: "none" }, 0.16 + s * 0.06 + 0.045);
      });
      seq.to([r, c], { opacity: 0, duration: 0.15, ease: "power2.out" }, 0.62);
    };

    let lock = false;
    wrap.addEventListener("mouseenter", () => {
      if (lock) return;
      lock = true;
      glitch();
      gsap.delayedCall(1, () => { lock = false; });
    });
  }
