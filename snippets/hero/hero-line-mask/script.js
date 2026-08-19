
  // Design note: headline lines rise out of overflow masks (power4.out),
  // staggered 0.11 — the kicker and lede wait their turn. Reduced motion:
  // skip entirely; gsap.from() leaves the DOM default as the final state.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.timeline({ defaults:{ ease:"power4.out" } })
      .from('[data-hero="line"]',   { yPercent:118, duration:1.2, stagger:0.11 })
      .from('[data-hero="kicker"]', { y:16, autoAlpha:0, duration:.8 }, 0.12)
      .from('[data-hero="lede"]',   { y:26, autoAlpha:0, duration:.9 }, "-=0.55");
  }
