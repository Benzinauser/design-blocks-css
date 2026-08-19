
  // Design note: seamless auto-marquee — each track duplicates its content
  // once and translates -50% on an infinite linear loop; middle row runs
  // counter-direction; hover pauses the strip. Reduced motion: static strip.
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll('[data-marquee="track"]').forEach((track, i) => {
    track.innerHTML += track.innerHTML; // duplicate once → -50% loop is seamless
    if (reduced) return;

    const tween = gsap.fromTo(track,
      { xPercent: i % 2 === 0 ? 0 : -50 },
      { xPercent: i % 2 === 0 ? -50 : 0, ease: "none", duration: 22 + i * 6, repeat: -1 });

    const row = track.closest('[data-marquee="row"]');
    row.addEventListener("mouseenter", () => tween.pause());
    row.addEventListener("mouseleave", () => tween.resume());
  });
