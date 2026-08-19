
  // Design note: tactile commitment — charge fills while you hold (pointer
  // captured); release early and the ring elastically snaps back, fill it
  // and the button pops to confirm. Reduced motion: a tap confirms at once.
  const btn = document.querySelector('[data-charge="btn"]');
  const ring = btn.querySelector(".charge");
  const label = btn.querySelector('[data-charge="label"]');
  const C = 427.3; // circle circumference
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const state = { p: 0 };
  let tween = null;
  const HOLD_MS = 1400;

  const setRing = (p) => { ring.style.strokeDashoffset = C * (1 - p); };

  const charge = () => {
    tween = gsap.to(state, {
      p: 1, duration: HOLD_MS / 1000, ease: "power1.inOut",
      onUpdate: () => {
        setRing(state.p);
        label.innerHTML = `<b>${Math.round(state.p * 100)}</b>%`;
      },
      onComplete: confirm
    });
  };

  const cancel = () => {
    if (!tween) return;
    tween.kill();
    gsap.to(state, { p: 0, duration: 0.4, ease: "power2.out", onUpdate: () => setRing(state.p) });
    gsap.to(ring, { strokeDashoffset: C, duration: 0.9, ease: "elastic.out(1, 0.55)" });
    label.innerHTML = "<b>Hold</b>to confirm";
  };

  const confirm = () => {
    tween = null;
    label.innerHTML = "<b>Go</b>released";
    gsap.fromTo(btn, { scale: 1 }, { scale: 1.08, duration: 0.35, ease: "power3.out", yoyo: true, repeat: 1 });
    gsap.fromTo(ring, { stroke: "#ff4a17", opacity: 1 }, { opacity: 0, duration: 0.7, ease: "power2.inOut", onComplete: () => {
      ring.style.strokeDashoffset = C;
      gsap.set(ring, { stroke: "#2fd6c3", opacity: 1 });
      label.innerHTML = "<b>Hold</b>to confirm";
    }});
    state.p = 0;
  };

  if (reduced) {
    btn.addEventListener("click", () => confirm());
  } else {
    let holding = false;
    btn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      btn.setPointerCapture(e.pointerId);
      holding = true;
      charge();
    });
    btn.addEventListener("pointerup", () => {
      if (!holding) return;
      holding = false;
      if (state.p >= 1) return; // already confirmed
      cancel();
    });
    btn.addEventListener("lostpointercapture", () => {
      if (holding) { holding = false; cancel(); }
    });
  }
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); confirm(); }
  });
