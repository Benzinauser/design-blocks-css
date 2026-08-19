
  // Design note: characters resolve from blur + lift into sharp focus,
  // staggered — a soft, optical entrance. Reduced motion: no split, no blur.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const title = document.querySelector('[data-blur="title"]');
    const split = new SplitText(title, { type: "chars", charsClass: "char" });
    gsap.from(split.chars, {
      filter: "blur(14px)",
      opacity: 0,
      yPercent: 30,
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.045,
      scrollTrigger: { trigger: title, start: "top 75%" }
    });
  }
