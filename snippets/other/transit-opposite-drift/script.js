
  // Design note: the section pins while the east track exits left and the
  // west track enters from the left — one scrubbed timeline, two opposing
  // directions. Reduced motion: no pin, no drift; the page just scrolls.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const tracks = gsap.utils.toArray('[data-transit="track"]');
    tracks.forEach((track) => {
      track.querySelectorAll(".plate").forEach((p, j) => { p.dataset.index = String(j + 1).padStart(2, "0"); });
    });

    const [east, west] = tracks;
    const dist = (t) => t.scrollWidth - t.parentElement.offsetWidth;

    gsap.timeline({
      scrollTrigger: {
        trigger: '[data-transit="section"]',
        start: "top top",
        end: "+=170%",
        scrub: 0.6,
        pin: true,
        anticipatePin: 1
      }
    })
      .fromTo(east, { x: 0 }, { x: () => -dist(east), ease: "none" }, 0)
      .fromTo(west, { x: () => -dist(west) }, { x: 0, ease: "none" }, 0);
  }
