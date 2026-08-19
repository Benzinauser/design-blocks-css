
  // Design note: a mechanical counter — each digit column spins from a random
  // offset to its target digit, left to right, like an odometer settling.
  // Reduced motion: digits snap to the final value.
  gsap.registerPlugin(ScrollTrigger);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const target = document.querySelector('[data-odo="value"]').dataset.target;
  const digits = [...target].map(Number);
  const cols = gsap.utils.toArray('[data-odo="col"]');

  cols.forEach((col, i) => {
    const digitsEl = col.querySelector('[data-odo="digits"]');
    for (let d = 0; d < 10; d++) {
      const span = document.createElement("span");
      span.className = "digit";
      span.textContent = d;
      digitsEl.appendChild(span);
    }
    const goal = digits[i];
    if (reduced) {
      gsap.set(digitsEl, { yPercent: -10 * goal });
      return;
    }
    gsap.fromTo(digitsEl,
      { yPercent: gsap.utils.random(-110, -10) },
      {
        yPercent: -10 * goal,
        duration: 1.3 + i * 0.18,
        ease: "power4.inOut",
        delay: i * 0.08,
        scrollTrigger: { trigger: col, start: "top 85%", once: true }
      });
  });
