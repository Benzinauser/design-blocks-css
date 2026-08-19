
  // Design note: a lead blob rides the cursor while a tail blob chases it
  // with lag; the SVG goo filter merges them into one viscous drop. Reduced
  // motion: the overlay is removed (CSS).
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const svg = document.querySelector('[data-goo="svg"]');
    const lead = document.querySelector('[data-goo="lead"]');
    const tail = document.querySelector('[data-goo="tail"]');
    let seen = false;

    document.addEventListener("mousemove", (e) => {
      if (!seen) { seen = true; gsap.set([lead, tail], { attr: { cx: e.clientX, cy: e.clientY } }); gsap.to(svg, { opacity: 1, duration: 0.4 }); }
      gsap.to(lead, { attr: { cx: e.clientX, cy: e.clientY }, duration: 0.12, ease: "power1.out", overwrite: "auto" });
      gsap.to(tail, { attr: { cx: e.clientX, cy: e.clientY }, duration: 0.5, ease: "power2.out", overwrite: "auto" });
    });
    document.addEventListener("mouseleave", () => gsap.to(svg, { opacity: 0, duration: 0.5 }));
  }
