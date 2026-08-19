
  // Design note: a mechanical detent — the knob spins freely with inertia,
  // then clicks into the nearest of 8 positions and the tick lights up.
  // Reduced motion: dial sits at position zero, no interaction.
  gsap.registerPlugin(Draggable, InertiaPlugin);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const N = 8, STEP = 360 / N;

  // draw 8 ticks
  const ticks = document.querySelector('[data-dial="ticks"]');
  for (let i = 0; i < N; i++) {
    const a = (i * STEP - 90) * Math.PI / 180;
    const x1 = 100 + Math.cos(a) * 78, y1 = 100 + Math.sin(a) * 78;
    const x2 = 100 + Math.cos(a) * 88, y2 = 100 + Math.sin(a) * 88;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1); line.setAttribute("y1", y1); line.setAttribute("x2", x2); line.setAttribute("y2", y2);
    line.setAttribute("class", "tick");
    line.dataset.tick = i;
    ticks.appendChild(line);
  }
  const tickEls = gsap.utils.toArray(".tick");

  const knob = document.querySelector('[data-dial="knob"]');
  const read = document.querySelector('[data-dial="read"]');
  const setRead = (idx) => { read.innerHTML = String(idx).padStart(2, "0") + "<em> / " + (N - 1) + "</em>"; };
  const light = (idx) => { tickEls.forEach((t, i) => t.classList.toggle("on", i === idx)); };

  if (reduced) { setRead(0); light(0); }
  else {
    setRead(0); light(0);
    Draggable.create(knob, {
      type: "rotation",
      inertia: true,
      throwResistance: 1800,
      cursor: "grabbing",
      onDragEnd: function () {
        const target = gsap.utils.snap(STEP, this.rotation);
        gsap.to(knob, { rotation: target, duration: 0.7, ease: "elastic.out(1, 0.6)" });
        const idx = ((Math.round(target / STEP) % N) + N) % N;
        setRead(idx); light(idx);
      }
    });
  }
