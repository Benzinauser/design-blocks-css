
  // Design note: figures count up as they enter — a measured, arithmetical
  // beat next to the expressive motion elsewhere. Reduced motion: final
  // values are written directly, no tween.
  gsap.registerPlugin(ScrollTrigger);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll('[data-count="value"]').forEach((el) => {
    const target = parseInt(el.dataset.target, 10);
    if (reduced) { el.textContent = target; return; }

    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 1.8,
      ease: "power3.out",
      onUpdate: () => { el.textContent = Math.round(obj.val); },
      scrollTrigger: { trigger: el, start: "top 85%", once: true }
    });
  });
