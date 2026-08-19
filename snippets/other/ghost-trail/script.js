
  // Design note: each cursor step drops a square "past state" that fades and
  // drifts away — discrete echoes, unlike the spring lag of a trail blob.
  // Reduced motion: no ghosts.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const stage = document.querySelector(".stage");
    const COLORS = ["#ff4a17", "#ffc43d", "#2fd6c3", "#8a6df1"];
    let last = 0, i = 0;

    stage.addEventListener("mousemove", (e) => {
      const now = performance.now();
      if (now - last < 90) return;
      last = now;

      const ghost = document.createElement("div");
      ghost.className = "ghost";
      ghost.style.background = COLORS[i++ % COLORS.length];
      ghost.style.left = e.clientX - 7 + "px";
      ghost.style.top = e.clientY - 7 + "px";
      document.body.appendChild(ghost);

      gsap.to(ghost, {
        x: gsap.utils.random(-22, 22),
        y: gsap.utils.random(-14, 26),
        rotation: gsap.utils.random(-40, 40),
        opacity: 0,
        scale: 0.65,
        duration: 0.85,
        ease: "power2.out",
        onComplete: () => ghost.remove()
      });
    });
  }
