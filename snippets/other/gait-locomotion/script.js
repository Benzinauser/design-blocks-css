
  // Design note: a four-limb machine whose feet are phase-locked to a ruled
  // track — each foot is glued to the ground for one half of its cycle
  // (stance), then swung exactly one stride ahead; the pointer sets
  // direction + stride rate and the centre dead-zone freezes the gait
  // mid-pose. Derived from the old walking-castle experiment: the gait
  // phase-locks to travel speed, so the machine can never skid. Reduced
  // motion: the machine simply stands on the ruler.
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduced) {
    const track = document.querySelector('[data-gait="track"]');
    const rover = document.querySelector('[data-gait="rover"]');
    const bodyEl = document.querySelector('[data-gait="body"]');
    const dash = document.querySelector('[data-gait="dash"]');
    const legEls = gsap.utils.toArray('[data-gait="leg"]');
    const struts = legEls.map((l) => l.querySelector(".leg__strut"));
    const feet = legEls.map((l) => l.querySelector(".leg__foot"));

    // measured constants — the ruler on the ground IS the stride unit
    const css = getComputedStyle(document.documentElement);
    const S = parseFloat(css.getPropertyValue("--stride"));   // px per stride
    let L = parseFloat(css.getPropertyValue("--leg"));        // leg length
    const HIP = [-0.92, -0.31, 0.31, 0.92];                   // hip offsets (× half body)
    const PHASES = [0, 0.5, 0.5, 0];                          // bound gait: outer pair, inner pair
    const swingEase = gsap.parseEase("power2.inOut");

    let halfW = 0, GY = 0, hipY = 0;
    function measure() {
      const r = track.getBoundingClientRect();
      halfW = Math.min(bodyEl.offsetWidth / 2, r.width * 0.32);
      GY = r.height * 0.72;
      L = Math.min(L, GY - 40);
      hipY = GY - L;
      // feet plant on the ruler: each leg's neutral tile is under its hip
      legEls.forEach((_, i) => { plant[i] = Math.round((HIP[i] * halfW) / S); });
      // the no-JS stance transforms are decorative — neutralise them once JS poses the limbs
      legEls.forEach((l) => gsap.set(l, { x: 0, y: 0, rotation: 0 }));
    }

    let phase = 0, rate = 0, targetRate = 0, roverX = 0, lastDir = 1;
    const plant = [0, 0, 0, 0];
    const swingDir = [0, 0, 0, 0];   // direction each leg committed to when it took off (0 = planted)
    const prevStance = [true, true, true, true];

    // steering — pointer X maps to signed stride rate; keys as a fallback
    function steer(norm) {                          // norm ∈ [-0.5, 0.5]
      const dz = 0.06;                              // central dead-zone = halt
      const mag = Math.max(0, Math.abs(norm) - dz) / (0.5 - dz);
      targetRate = Math.sign(norm || 0) * mag * 1.6;
    }
    track.addEventListener("pointermove", (e) => {
      const r = track.getBoundingClientRect();
      steer((e.clientX - r.left) / r.width - 0.5);
    });
    track.addEventListener("pointerleave", () => { targetRate = 0; });
    let keys = { left:false, right:false };
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { keys.left = true; targetRate = -1.6; }
      if (e.key === "ArrowRight") { keys.right = true; targetRate = 1.6; }
    });
    document.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft") keys.left = false;
      if (e.key === "ArrowRight") keys.right = false;
      if (!keys.left && !keys.right) targetRate = 0;
    });
    window.addEventListener("resize", measure);

    function step(time, deltaTime) {
      const dt = Math.min(deltaTime / 1000, 0.033);

      // integrate stride rate with a little inertia — ease to a halt
      rate += (targetRate - rate) * Math.min(1, dt * 4);
      if (Math.abs(rate) < 0.004 && Math.abs(targetRate) < 0.004) rate = 0;
      const dir = rate > 0.0001 ? 1 : rate < -0.0001 ? -1 : lastDir;
      lastDir = dir;

      // gait phase always advances forward in time; going backwards means
      // the swing travels against the clock, not the phase
      phase += Math.abs(rate) * dt;
      if (phase >= 1) phase -= 1;

      // the machine translates with the gait — never independent of it.
      // the wrap distance is an exact whole number of strides, so even the
      // teleport across the stage moves feet without ever breaking a plant
      roverX += rate * S * dt;
      const margin = Math.ceil((track.clientWidth / 2 + L * 2) / S) * S;
      const tileShift = margin * 2 / S;
      if (roverX > margin)      { roverX -= margin * 2; plant.forEach((_, i) => plant[i] -= tileShift); }
      else if (roverX < -margin){ roverX += margin * 2; plant.forEach((_, i) => plant[i] += tileShift); }
      gsap.set(rover, { x: roverX });

      legEls.forEach((_, i) => {
        let fi = (phase + PHASES[i]) % 1;   // wraps 1→0 at each landing
        const stance = fi < 0.5;
        if (stance) {
          if (!prevStance[i]) {              // the swing just finished → the foot re-plants
            plant[i] += swingDir[i];         // one stride in the direction it committed to
            swingDir[i] = 0;
          }
        } else if (prevStance[i]) {
          swingDir[i] = dir;                 // takeoff — the foot commits to this direction
        }
        prevStance[i] = stance;

        let footX, footY;
        if (stance) {
          footX = plant[i] * S;              // glued — zero slip
          footY = GY;
        } else {
          const t = swingEase((fi - 0.5) * 2);
          footX = plant[i] * S + swingDir[i] * S * t;   // one stride, committed direction
          footY = GY - Math.sin(Math.PI * (fi - 0.5)) * 14;  // airborne
        }

        const hipX = roverX + HIP[i] * halfW;
        const dx = footX - hipX;
        const dy = footY - hipY;
        const dist = Math.hypot(dx, dy);
        const rotation = Math.atan2(dx, dy) * 180 / Math.PI;   // strut passes through the foot
        gsap.set(struts[i], { x: hipX - 3.5, y: hipY, rotation, scaleY: dist / L, transformOrigin: "50% 0%" });
        gsap.set(feet[i], { x: footX - 14, y: footY - 4 });
      });

      // weight transfer — the girder heaves twice per cycle, at each plant
      const bob = Math.cos(phase * Math.PI * 4) * 6;
      const rock = Math.sin(phase * Math.PI * 4) * 1.2;
      gsap.set(bodyEl, { xPercent: -50, y: bob, rotation: rock, transformOrigin: "50% 100%" });

      // the machine's own odometer
      const dirLabel = Math.abs(rate) < 0.005 ? "hld" : (rate > 0 ? "fwd" : "rev");
      const strideN = Math.round(Math.abs(plant[0]));
      const text = "stride " + String(strideN % 100).padStart(2, "0") + " · " + dirLabel + " " + Math.abs(rate).toFixed(2);
      if (dash.textContent !== text) dash.textContent = text;
    }

    measure();
    gsap.ticker.add(step);
  }
