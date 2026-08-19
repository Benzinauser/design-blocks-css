
  // Design note: an SVG blob breathes through four poses (identical command
  // structure, generated in code so the morph is always clean) while its
  // fill shifts with each shape. Reduced motion: first pose only.
  gsap.registerPlugin(MorphSVGPlugin);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // all shapes share one command structure: 8 anchors, C-curves, Z
  function blobPath(radii, cx = 100, cy = 100, r = 82) {
    const n = radii.length;
    let d = "";
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2;
      const a1 = ((i + 1) / n) * Math.PI * 2;
      const r0 = radii[i], r1 = radii[(i + 1) % n];
      const x0 = cx + Math.cos(a0) * r0, y0 = cy + Math.sin(a0) * r0;
      const x1 = cx + Math.cos(a1) * r1, y1 = cy + Math.sin(a1) * r1;
      const c = r * 0.52;
      const c1x = x0 + Math.cos(a0 + Math.PI / 2) * c * (r0 / r);
      const c1y = y0 + Math.sin(a0 + Math.PI / 2) * c * (r0 / r);
      const c2x = x1 - Math.cos(a1 + Math.PI / 2) * c * (r1 / r);
      const c2y = y1 - Math.sin(a1 + Math.PI / 2) * c * (r1 / r);
      d += (i === 0 ? `M ${x0.toFixed(1)} ${y0.toFixed(1)} ` : "") +
        `C ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${x1.toFixed(1)} ${y1.toFixed(1)} `;
    }
    return d + "Z";
  }

  const shapes = [
    { d: blobPath([82, 82, 82, 82, 82, 82, 82, 82]), color: "#ff4a17" },           // round
    { d: blobPath([116, 62, 112, 66, 116, 62, 112, 66]), color: "#ffc43d" },        // star-ish
    { d: blobPath([62, 112, 62, 112, 62, 112, 62, 112]), color: "#2fd6c3" },        // cross-ish
    { d: blobPath([96, 96, 58, 96, 96, 96, 58, 96]), color: "#f2ede3" }             // hourglass-ish
  ];

  const blob = document.querySelector("#blob");
  blob.setAttribute("d", shapes[0].d);

  if (!reduced) {
    let i = 0;
    const morph = () => {
      const next = (i + 1) % shapes.length;
      gsap.to(blob, {
        morphSVG: { shape: shapes[next].d },
        fill: shapes[next].color,
        duration: 1.7,
        ease: "sine.inOut",
        onComplete: () => { i = next; morph(); }
      });
    };
    morph();
  }
