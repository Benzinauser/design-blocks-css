
  // Design note: the whole stage tilts toward the cursor (quickTo) while each
  // layer drifts at its own depth factor — a shallow 3D scene, no WebGL.
  // Reduced motion: static composition.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const scene = document.querySelector('[data-tilt="scene"]');
    const inner = document.querySelector('[data-tilt="inner"]');
    const layers = gsap.utils.toArray('[data-tilt="layer"]');

    const rotX = gsap.quickTo(inner, "rotationX", { duration: 0.7, ease: "power3.out" });
    const rotY = gsap.quickTo(inner, "rotationY", { duration: 0.7, ease: "power3.out" });

    scene.addEventListener("mousemove", (e) => {
      const r = scene.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      rotY(nx * 12);
      rotX(-ny * 12);
      layers.forEach((layer) => {
        const d = parseFloat(layer.dataset.depth) || 1;
        gsap.to(layer, {
          x: nx * 44 * d, y: ny * 44 * d,
          duration: 0.9, ease: "power3.out", overwrite: "auto"
        });
      });
    });

    scene.addEventListener("mouseleave", () => {
      rotX(0); rotY(0);
      gsap.to(layers, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.6)", overwrite: "auto" });
    });
  }
