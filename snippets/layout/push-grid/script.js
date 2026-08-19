
  // Design note: hover a tile and it asserts itself (scale, shadow) while its
  // row-mates yield sideways and its column-mates yield away — a polite
  // make-way. Reduced motion: no push, just a visible outline.
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduced) { // reduced → CSS outline only
  const cells = gsap.utils.toArray('[data-push="cell"]');
  const cols = 3;
  const PUSH = 22;

  cells.forEach((cell, i) => {
    const row = Math.floor(i / cols), col = i % cols;
    const rowMates = cells.filter((_, j) => Math.floor(j / cols) === row && j !== i);
    const colMates = cells.filter((_, j) => j % cols === col && j !== i);

    const press = () => {
      gsap.to(cell, { scale: 1.12, zIndex: 5, duration: 0.45, ease: "power3.out", overwrite: "auto" });
      rowMates.forEach((m) => gsap.to(m, { x: (m.dataset.idx < i ? -1 : 1) * PUSH, duration: 0.5, ease: "power3.out", overwrite: "auto" }));
      colMates.forEach((m) => gsap.to(m, { y: PUSH, duration: 0.5, ease: "power3.out", overwrite: "auto" }));
    };
    const release = () => {
      gsap.to(cell, { scale: 1, zIndex: 0, duration: 0.7, ease: "elastic.out(1, 0.5)", overwrite: "auto" });
      rowMates.forEach((m) => gsap.to(m, { x: 0, duration: 0.7, ease: "elastic.out(1, 0.55)", overwrite: "auto" }));
      colMates.forEach((m) => gsap.to(m, { y: 0, duration: 0.7, ease: "elastic.out(1, 0.55)", overwrite: "auto" }));
    };
    cell.dataset.idx = i;
    cell.addEventListener("mouseenter", press);
    cell.addEventListener("mouseleave", release);
    cell.addEventListener("focus", press);
    cell.addEventListener("blur", release);
  });
  } // end reduced-motion guard
