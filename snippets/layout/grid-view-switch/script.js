
  // Design note: one toggle reorganises six cards between a 3×2 grid and a
  // stacked list; each card flies to its new coordinates with staggered ease.
  // Reduced motion: the switch is instant but still works.
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const view = document.querySelector('[data-switch="view"]');
  const cards = gsap.utils.toArray('[data-switch="card"]');
  const btn = document.querySelector('[data-switch="btn"]');
  const mode = document.querySelector('[data-switch="mode"]');
  let isGrid = true;

  const W = () => view.clientWidth;
  const GAP = () => W() * 0.02;

  const geom = (grid) => {
    const gap = GAP();
    return cards.map((_, i) => {
      if (grid) {
        const cw = W() * 0.31, ch = cw * 0.75, c = i % 3, r = Math.floor(i / 3);
        return { x: c * (cw + gap), y: r * (ch + gap), width: cw, height: ch };
      }
      const lw = W() * 0.55, lh = W() * 0.11;
      return { x: (W() - lw) / 2, y: i * (lh + gap), width: lw, height: lh };
    });
  };

  const apply = (grid, tween) => {
    const g = geom(grid);
    const H = grid ? g[3].y + g[3].height : g[5].y + g[5].height;
    gsap.set(view, { height: H });
    mode.textContent = grid ? "GRID" : "LIST";
    cards.forEach((card, i) => {
      const v = g[i];
      if (tween) {
        gsap.to(card, {
          x: v.x, y: v.y, width: v.width, height: v.height,
          duration: reduced ? 0 : 0.75,
          ease: reduced ? "none" : "power3.inOut",
          delay: reduced ? 0 : i * 0.05,
          overwrite: "auto"
        });
      } else {
        gsap.set(card, v);
      }
    });
  };

  apply(true, false);
  btn.addEventListener("click", () => { isGrid = !isGrid; apply(isGrid, true); });
