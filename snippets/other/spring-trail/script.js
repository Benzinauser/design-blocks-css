
  // Design note: a spring-mass companion — the blob chases the cursor with
  // lag and stretches along its velocity, rubber that never quite catches
  // up. Reduced motion: the blob is removed entirely.
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced) {
    const blob = document.querySelector('[data-trail="blob"]');
    const stage = document.querySelector('[data-trail="stage"]');
    let tx = innerWidth / 2, ty = innerHeight / 2;      // pointer target
    let x = tx, y = ty, vx = 0, vy = 0;                 // spring state
    let seen = false;

    stage.addEventListener("mousemove", (e) => {
      if (!seen) { seen = true; x = tx = e.clientX; y = ty = e.clientY; gsap.to(blob, { opacity: 1, duration: 0.4 }); }
      tx = e.clientX; ty = e.clientY;
    });
    document.addEventListener("mouseleave", () => gsap.to(blob, { opacity: 0, duration: 0.5 }));

    gsap.ticker.add(() => {
      vx += (tx - x) * 0.10; vx *= 0.84;
      vy += (ty - y) * 0.10; vy *= 0.84;
      x += vx; y += vy;

      const speed = Math.hypot(vx, vy);
      const stretch = 1 + Math.min(speed * 0.018, 0.5);
      const angle = Math.atan2(vy, vx) * 180 / Math.PI;

      gsap.set(blob, {
        x: x - 17, y: y - 17,
        rotation: angle,
        scaleX: stretch,
        scaleY: 2 - stretch,
        transformOrigin: "50% 50%"
      });
    });
  }
