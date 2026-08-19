
  // Design note: each line decodes from noise into its message, one after
  // another, as the reader scrolls — text earns its meaning. Reduced motion:
  // the target text is written in directly, no scramble.
  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Each <span data-scramble-target> decodes into the phrase held by its
  // parent <p data-scramble="...">. Reduced motion: written directly.
  document.querySelectorAll('[data-scramble-target]').forEach((holder) => {
    const target = holder.closest('[data-scramble]').dataset.scramble;

    if (reduced) {
      holder.textContent = target;
      return;
    }
    gsap.to(holder, {
      scrambleText: { text: target, chars: "upperCase", speed: 0.6, tweenLength: false },
      duration: 1.6,
      ease: "power2.inOut",
      scrollTrigger: { trigger: holder, start: "top 82%", toggleActions: "play none none reverse" }
    });
  });
