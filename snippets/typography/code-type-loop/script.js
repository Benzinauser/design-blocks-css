
  // Design note: a terminal that narrates its own build — each line types out
  // character by character, then the block clears and the next file begins.
  // Reduced motion: the finished block is printed at once.
  const out = document.querySelector('[data-term="out"]');
  const FILES = [
    ["const studio = {", "  pace: 'power4',", "  restraint: true", "};"],
    ["function direct(scene) {", "  gsap.to(scene, { yPercent: -20 });", "  return scene;", "}"],
    ["export default flow;", "// one mechanism per idea", "// done."]
  ];
  const SPEED = 42; // ms per character

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    out.innerHTML = FILES[0].join("\n") + '<span class="caret" aria-hidden="true"></span>';
  } else {
    const caret = '<span class="caret" aria-hidden="true"></span>';
    let fileIdx = 0;

    const typeLine = (line, lineIdx) => new Promise((resolve) => {
      const proxy = { n: 0 };
      gsap.to(proxy, {
        n: line.length,
        duration: line.length * SPEED / 1000,
        ease: "none",
        onUpdate: () => {
          out.innerHTML = FILES[fileIdx].slice(0, lineIdx + 1).map((l, i) => i < lineIdx ? l : l.slice(0, Math.round(proxy.n))).join("\n") + caret;
        },
        onComplete: resolve
      });
    });

    const run = async () => {
      for (let i = 0; i < FILES[fileIdx].length; i++) {
        await typeLine(FILES[fileIdx][i], i);
        await new Promise((r) => setTimeout(r, 260));
      }
      await new Promise((r) => setTimeout(r, 1300));
      gsap.to(out, { opacity: 0, duration: 0.35, onComplete: () => { out.textContent = ""; gsap.set(out, { opacity: 1 }); fileIdx = (fileIdx + 1) % FILES.length; run(); } });
    };
    run();
  }
