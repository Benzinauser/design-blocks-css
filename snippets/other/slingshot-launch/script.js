
  // Design note: stored force — pulling the puck down draws the bands and
  // pulls the shot back; releasing converts the stretch into a launch with
  // the same force curve. Reduced motion: puck and shot stay at rest.
  gsap.registerPlugin(Draggable);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduced) {
  const rig = document.querySelector('[data-sling="rig"]');
  const puck = document.querySelector('[data-sling="puck"]');
  const shot = document.querySelector('[data-sling="shot"]');
  const bandA = document.querySelector('[data-sling="band-a"]');
  const bandB = document.querySelector('[data-sling="band-b"]');
  const tension = document.querySelector('[data-sling="tension"]');
  const R = rig.getBoundingClientRect();
  const maxPull = R.height * 0.34;
  const anchor = { bx: R.width * 0.08, by1: R.height * 0.19, by2: R.height * 0.81 };
  let launched = false, tween = null;

  const draw = (pull) => {
    const pry = pull * 0.85; // puck travels slightly less than shot pull back
    const sx = R.width * 0.52, sy = R.height * 0.5 + pull * 0.62;
    shot.style.transform = `translate(${sx - 13}px, ${sy - 13}px)`;
    bandA.setAttribute("y2", sy); bandA.setAttribute("x2", sx);
    bandB.setAttribute("y2", sy); bandB.setAttribute("x2", sx);
    tension.textContent = Math.round(pull / maxPull * 100) + "%";
  };

  Draggable.create(puck, {
    type: "y",
    bounds: { minY: 0, maxY: maxPull },
    cursor: "grabbing",
    onDrag: function () {
      if (launched) return;
      draw(this.y);
      gsap.to(shot, { x: -this.y * 0.62 * 3, duration: 0.2, ease: "power2.out", overwrite: "auto" });
    },
    onRelease: function () {
      if (launched) return;
      launched = true;
      const f = this.y / maxPull;
      if (f < 0.08) { launched = false; gsap.to(puck, { y: 0, duration: 0.5, ease: "power3.out" }); return; }

      const dist = R.width * (0.42 + f * 0.42);
      gsap.to(puck, { y: 0, duration: 0.6, ease: "elastic.out(1, 0.6)" });
      gsap.to(shot, {
        x: dist, y: 0, duration: 0.85, ease: "power2.out", overwrite: "auto",
        onUpdate: () => draw(0),
        onComplete: () => {
          gsap.fromTo(shot, { scale: 1 }, { scale: 1.35, duration: 0.16, ease: "power2.out", yoyo: true, repeat: 1 });
          gsap.fromTo(".target", { borderColor: "rgba(47,214,195,.9)", scale: 1.15 }, { borderColor: "rgba(242,237,227,.35)", scale: 1, duration: 0.7, ease: "power3.out" });
          setTimeout(() => { launched = false; gsap.to(shot, { x: 0, y: 0, duration: 0.5, ease: "power3.inOut" }); }, 900);
        }
      });
    }
  });
  } // end reduced-motion guard
