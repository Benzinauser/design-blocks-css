
  // Design note: a button that inflates like a balloon — scale, corner and
  // shadow all swell together on hover, and deflate with an elastic on leave.
  // Reduced motion: hover swell is disabled; the click pop stays (interaction).
  const btn = document.querySelector('[data-balloon="btn"]');
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduced) {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.16, borderRadius: "99px", boxShadow: "0 24px 40px rgba(255,74,23,.28)",
        duration: 0.55, ease: "power3.out", overwrite: "auto"
      });
      gsap.to(btn.querySelector(".arrow"), { x: 8, duration: 0.4, ease: "power2.out", overwrite: "auto" });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1, borderRadius: "4px", boxShadow: "0 0 0 rgba(255,74,23,0)",
        duration: 0.8, ease: "elastic.out(1, 0.5)", overwrite: "auto"
      });
      gsap.to(btn.querySelector(".arrow"), { x: 0, duration: 0.5, ease: "power3.out", overwrite: "auto" });
    });
  }

  btn.addEventListener("click", () => {
    gsap.fromTo(btn, { scale: 1.22 }, { scale: reduced ? 1 : 1, duration: 0.9, ease: "elastic.out(1, 0.4)" });
  });
