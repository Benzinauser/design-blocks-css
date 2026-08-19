
  // Design note: a slow seal — the ring of type rotates continuously while
  // the core mark counters it, keeping the whole reading still. Reduced
  // motion: the badge stands.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.to('[data-ring="text"]', { rotation: 360, transformOrigin: "50% 50%", ease: "none", duration: 30, repeat: -1 });
    gsap.to('[data-ring="core"]', { rotation: -360, transformOrigin: "50% 50%", ease: "none", duration: 30, repeat: -1 });
  }
