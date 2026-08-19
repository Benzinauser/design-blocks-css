
  // Design note: each panel unmasks from the top edge (clip-path inset) as it
  // enters, one after another — a staged vertical wipe. Reduced motion: no
  // clip, panels are simply there.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.utils.toArray('[data-clip="panel"]').forEach((panel) => {
      gsap.fromTo(panel,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: { trigger: panel, start: "top 85%" }
        });
    });
  }
