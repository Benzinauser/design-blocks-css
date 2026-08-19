
  // Design note: tiles start shuffled; drag one into a slot's magnetic field
  // and it is pulled in with an elastic seat — release it free and it springs
  // back to its last seat. All comparisons in viewport space, motions relative.
  // Reduced motion: tiles render already aligned, nothing draggable.
  gsap.registerPlugin(Draggable);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const board = document.querySelector('[data-snap="board"]');
  const tiles = gsap.utils.toArray('[data-snap="tile"]');
  const slots = gsap.utils.toArray(".slot");
  const count = document.querySelector('[data-snap="count"]');
  const MAGNET = 90; // px — pull-in radius

  const center = (el) => { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; };
  const slotCenters = slots.map(center);
  // layout slots, in percent, indexed like the slot elements
  const SLOT_POS = [[4, 8], [35, 8], [66, 8], [4, 54], [35, 54], [66, 54]];

  const sendHome = (tile) => {
    const h = +tile.dataset.slot;
    const c = center(tile);
    const d = Math.hypot(c.x - slotCenters[h].x, c.y - slotCenters[h].y);
    if (d < 13) return; // already seated
    const dr = Draggable.get(tile);
    const tx = dr.x + (slotCenters[h].x - c.x);
    const ty = dr.y + (slotCenters[h].y - c.y);
    gsap.to(tile, {
      x: tx, y: ty, duration: 0.6, ease: "power3.out",
      onComplete: () => { dr.x = tx; dr.y = ty; }
    });
  };

  if (reduced) {
    tiles.forEach((tile) => {
      const p = SLOT_POS[+tile.dataset.slot];
      gsap.set(tile, { left: p[0] + "%", top: p[1] + "%" });
    });
    count.textContent = "6/6";
  } else {
    let seated = 0;
    const updateCount = () => { count.textContent = seated + "/6"; };

    tiles.forEach((tile, i) => {
      Draggable.create(tile, {
        type: "x,y",
        bounds: board,
        cursor: "grabbing",
        onDragEnd: function () {
          const c = center(tile);
          let best = -1, bestD = 1e9;
          slotCenters.forEach((sc, k) => {
            if (tiles.some((t, j) => j !== i && t.dataset.sat === "1" && +t.dataset.slot === k && t !== tile)) return; // occupied
            const d = Math.hypot(c.x - sc.x, c.y - sc.y);
            if (d < bestD) { bestD = d; best = k; }
          });
          if (best >= 0 && bestD < MAGNET) {
            const dr = Draggable.get(tile);
            const tx = dr.x + (slotCenters[best].x - c.x);
            const ty = dr.y + (slotCenters[best].y - c.y);
            gsap.to(tile, {
              x: tx, y: ty, duration: 0.75, ease: "elastic.out(1, 0.55)",
              onComplete: () => { dr.x = tx; dr.y = ty; }
            });
            if (tile.dataset.sat !== "1") { tile.dataset.sat = "1"; seated++; updateCount(); }
          } else {
            sendHome(tile); // free drop → spring to the tile's own slot
          }
        }
      });
    });
  }
