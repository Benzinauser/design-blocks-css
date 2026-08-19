
  // Design note: five cards orbit on a 3D ring; dragging spins the ring with
  // inertia and it clicks into the nearest card, whose index reads out.
  // Reduced motion: a static ring, front card only.
  gsap.registerPlugin(Draggable, InertiaPlugin);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const deck = document.querySelector('[data-car="deck"]');
  const ring = document.querySelector('[data-car="ring"]');
  const cards = gsap.utils.toArray('[data-car="card"]');
  const pos = document.querySelector('[data-car="pos"]');
  const N = cards.length, STEP = 360 / N, R = 300;

  // place cards on the ring
  cards.forEach((card, i) => {
    gsap.set(card, { transform: `rotateY(${i * STEP}deg) translateZ(${R}px)` });
  });

  const setPos = (angle) => {
    let idx = Math.round((((angle % 360) + 360) % 360) / STEP) % N;
    pos.textContent = String(idx + 1).padStart(2, "0");
  };
  const snap = (angle) => {
    const target = Math.round((((angle % 360) + 360) % 360) / STEP) * STEP;
    gsap.to(ring, { rotationY: target, duration: 0.8, ease: "elastic.out(1, 0.55)", overwrite: "auto" });
    setPos(target);
  };

  if (!reduced) {
    let dragging = false, acc = 0;
    deck.addEventListener("pointerdown", (e) => {
      dragging = true;
      deck.setPointerCapture(e.pointerId);
      gsap.killTweensOf(ring);
    });
    deck.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      acc += e.movementX * 0.45;
      gsap.set(ring, { rotationY: acc });
      setPos(acc);
    });
    deck.addEventListener("pointerup", () => { dragging = false; snap(acc); });
    deck.addEventListener("lostpointercapture", () => { if (dragging) { dragging = false; snap(acc); } });
  }
