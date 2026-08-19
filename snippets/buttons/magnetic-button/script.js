
  // Design note: within a small radius the button is pulled toward the cursor
  // (quickTo) while its label counter-shifts for depth; leaving the scene
  // snaps it back with an elastic. Reduced motion: no magnetism.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const wrap = document.querySelector('[data-magnetic="wrap"]');
    const btn = document.querySelector('[data-magnetic="btn"]');
    const label = btn.querySelector("span");
    const R = 150, strength = 0.38;

    const bx = gsap.quickTo(btn, "x", { duration: 0.45, ease: "power3.out" });
    const by = gsap.quickTo(btn, "y", { duration: 0.45, ease: "power3.out" });
    const lx = gsap.quickTo(label, "x", { duration: 0.45, ease: "power3.out" });
    const ly = gsap.quickTo(label, "y", { duration: 0.45, ease: "power3.out" });

    document.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const dx = e.clientX - cx, dy = e.clientY - cy;
      if (Math.hypot(dx, dy) < R) {
        bx(dx * strength); by(dy * strength);
        lx(-dx * 0.18); ly(-dy * 0.18);
      } else {
        bx(0); by(0); lx(0); ly(0);
      }
    });
    document.addEventListener("mouseleave", () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.45)", overwrite: true });
      gsap.to(label, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.45)", overwrite: true });
    });
  }
