
  // Design note: a physics throw — drag the card, release with velocity and
  // it coasts with inertia to the tray edge; the tray recoils against the
  // motion for a planted, tactile feel. Reduced motion: card sits still.
  gsap.registerPlugin(Draggable, InertiaPlugin);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const tray = document.querySelector('[data-throw="tray"]');
    const card = document.querySelector('[data-throw="card"]');
    const recoil = gsap.quickTo(tray, "x", { duration: 0.5, ease: "power3.out" });

    Draggable.create(card, {
      type: "x",
      bounds: tray,
      inertia: true,
      throwResistance: 2600,
      cursor: "grabbing",
      onDrag: function () { recoil(this.x * -0.05); },
      onThrowUpdate: function () { recoil(this.x * -0.05); },
      onDragEnd: function () { recoil(0); }
    });
  }
