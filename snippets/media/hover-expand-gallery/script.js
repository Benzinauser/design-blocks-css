
  // Design note: hovering a panel grows its flex share while its neighbours
  // yield — a polite tug-of-war, smooth power3, no bounce. Keyboard focus
  // gets the same treatment.
  const panels = gsap.utils.toArray('[data-gallery="panel"]');
  const IN = 3.2, OUT = 1;

  const setAll = (value) => {
    panels.forEach((panel) => gsap.to(panel, { flexGrow: value, duration: 0.65, ease: "power3.inOut", overwrite: "auto" }));
  };
  const setHover = (target) => {
    panels.forEach((panel) => gsap.to(panel, { flexGrow: panel === target ? IN : OUT, duration: 0.65, ease: "power3.inOut", overwrite: "auto" }));
  };

  panels.forEach((panel) => {
    panel.addEventListener("mouseenter", () => setHover(panel));
    panel.addEventListener("mouseleave", () => setAll(OUT));
    panel.addEventListener("focus", () => setHover(panel));
    panel.addEventListener("blur", () => setAll(OUT));
    panel.tabIndex = 0;
    panel.setAttribute("role", "button");
  });
