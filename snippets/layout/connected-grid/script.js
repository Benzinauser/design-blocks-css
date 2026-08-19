
  // Design note: hovering a node highlights its links while dashed strokes
  // march along them; the node itself lifts in 3D. Reduced motion: nodes
  // stay put and links stay faint.
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const net = document.querySelector('[data-net="net"]');
  const nodes = gsap.utils.toArray('[data-net="node"]');
  const linkG = document.querySelector('[data-net="links"]');
  const P = nodes.map((n) => {
    const r = n.getBoundingClientRect(), b = net.getBoundingClientRect();
    return { x: r.left - b.left + r.width / 2, y: r.top - b.top + r.height / 2 };
  });
  const links = [];
  nodes.forEach((n, i) => {
    nodes.forEach((m, j) => {
      if (j <= i) return;
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("class", "link");
      line.setAttribute("x1", P[i].x); line.setAttribute("y1", P[i].y);
      line.setAttribute("x2", P[j].x); line.setAttribute("y2", P[j].y);
      const L = Math.hypot(P[i].x - P[j].x, P[i].y - P[j].y);
      line.setAttribute("stroke-dasharray", "6 6");
      line.style.opacity = 0.18;
      linkG.appendChild(line);
      links.push({ line, L, a: i, b: j });
    });
  });

  if (!reduced) {
    nodes.forEach((node, i) => {
      node.addEventListener("mouseenter", () => {
        gsap.to(node, { scale: 1.25, duration: 0.4, ease: "power3.out", overwrite: "auto" });
        links.forEach(({ line, a, b }) => {
          if (a !== i && b !== i) return;
          gsap.to(line, { opacity: 0.9, strokeDashoffset: -L, duration: 0.9, ease: "none", repeat: -1, overwrite: "auto" });
        });
        P[i]; // noop keep refs
      });
      node.addEventListener("mouseleave", () => {
        gsap.to(node, { scale: 1, duration: 0.6, ease: "elastic.out(1, 0.55)", overwrite: "auto" });
        links.forEach(({ line, a, b }) => {
          if (a !== i && b !== i) return;
          gsap.to(line, { opacity: 0.18, duration: 0.5, overwrite: "auto" });
          gsap.killTweensOf(line, "strokeDashoffset");
          line.setAttribute("stroke-dashoffset", "0");
        });
      });
    });
  } else {
    nodes.forEach((n) => n.addEventListener("mouseenter", () => gsap.to(n, { scale: 1.15, duration: 0.2 })));
    nodes.forEach((n) => n.addEventListener("mouseleave", () => gsap.to(n, { scale: 1, duration: 0.2 })));
  }
