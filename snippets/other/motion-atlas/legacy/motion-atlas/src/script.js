/* ============================================================
   MOTION ATLAS — script.js
   A field guide in six movements:
     01 Hero        — masked editorial line reveal (overflow masks + power4)
     02 Reel        — draggable infinite horizontal loop (+ inertia + counter roll)
     03 Transit     — scrubbed, pinned, opposite-direction track drift
     04 Manifesto   — scrubbed clip-fill text (background-clip)
     05 Index       — elastic capability rows (height elastic)
     06 Outro       — kinetic character line (SplitText)
   Ambient: simplex-noise dust + slow orb drift.
   ============================================================ */

gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin, SplitText);

const pad = (n) => String(n).padStart(2, "0");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Turn the reel into a single track only when JS is live;
   without JS the cards remain a wrapped static grid */
const reelList = document.querySelector('[data-reel="list"]');
const reelViewport = document.querySelector('[data-reel="viewport"]');
if (reelList) reelList.style.flexWrap = "nowrap";
if (reelViewport) reelViewport.style.overflow = "hidden";

gsap.context(() => {

  /* ============================================================
     06 · OUTRO — kinetic character line
     (runs in both modes: entrance is a simple fade under reduced motion)
  ============================================================ */
  const outroLine = document.querySelector('[data-outro="line"]');
  if (outroLine && !reduced && typeof SplitText !== "undefined") {
    const split = new SplitText(outroLine, { type: "chars", charsClass: "char" });
    gsap.from(split.chars, {
      yPercent: 120,
      rotate: 3,
      duration: 1.05,
      ease: "power4.out",
      stagger: 0.035,
      scrollTrigger: { trigger: outroLine, start: "top 82%" }
    });
  }

  /* ============================================================
     05 · INDEX — elastic capability rows
  ============================================================ */
  const capItems = gsap.utils.toArray('[data-cap="item"]');
  capItems.forEach((item, i) => {
    const row = item.querySelector('[data-cap="row"]');
    const body = item.querySelector('[data-cap="body"]');

    const open = (animate) => {
      capItems.forEach((it, j) => {
        const b = it.querySelector('[data-cap="body"]');
        const isTarget = j === i;
        const willOpen = isTarget && it.dataset.open !== "true";
        it.dataset.open = willOpen ? "true" : "false";
        it.querySelector('[data-cap="row"]').setAttribute("aria-expanded", willOpen ? "true" : "false");
        if (willOpen) {
          if (animate && !reduced) {
            gsap.to(b, { height: b.scrollHeight, duration: 1.15, ease: "elastic.out(1, 0.62)", overwrite: "auto" });
          } else {
            gsap.to(b, { height: b.scrollHeight, duration: 0.45, ease: "power2.out", overwrite: "auto" });
          }
        } else {
          gsap.to(b, { height: 0, duration: 0.55, ease: "power3.inOut", overwrite: "auto" });
        }
      });
    };

    row.addEventListener("click", () => open(true));
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(true); }
    });
  });

  /* ============================================================
     02 · REEL — draggable infinite loop
     horizontalLoop adapted from draggable-infinite-slider-gsaposmo
  ============================================================ */
  const initReel = () => {
    const viewport = document.querySelector('[data-reel="viewport"]');
    const slides = gsap.utils.toArray('[data-reel="list"] > .card');
    if (!slides.length) return null;

    /* counter roll — clone numerals into a rolling stack */
    const stack = document.querySelector('[data-reel="stack"]');
    const nums = [];
    slides.forEach((_, i) => {
      const n = document.createElement("span");
      n.className = "count-num";
      n.textContent = pad(i + 1);
      stack.appendChild(n);
      nums.push(n);
    });
    document.querySelector('[data-reel="total"]').textContent = pad(slides.length);

    const rail = document.querySelector('[data-reel="rail"]');

    const loop = horizontalLoop(slides, {
      paused: true,
      draggable: true,
      center: false,
      trigger: viewport,
      onChange: (element, index) => {
        slides.forEach((s) => s.classList.remove("is-active"));
        element.classList.add("is-active");
        gsap.to(nums, { y: `-${100 * index}%`, ease: "power3.out", duration: 0.5, overwrite: "auto" });
        gsap.to(rail, { scaleX: (index + 1) / slides.length, ease: "power3.out", duration: 0.5, overwrite: "auto" });
      }
    });

    document.querySelector('[data-reel="next"]').addEventListener("click", () =>
      loop.next({ ease: "power3.inOut", duration: 0.7 }));
    document.querySelector('[data-reel="prev"]').addEventListener("click", () =>
      loop.previous({ ease: "power3.inOut", duration: 0.7 }));

    slides.forEach((slide, i) => {
      slide.addEventListener("click", () => loop.toIndex(i, { ease: "power3.inOut", duration: 0.7 }));
      slide.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          loop.toIndex(i, { ease: "power3.inOut", duration: 0.7 });
        }
      });
    });

    return loop;
  };
  initReel();

  /* ============================================================
     Full choreography — skipped for prefers-reduced-motion
  ============================================================ */
  if (!reduced) {

    /* ---------- header ---------- */
    gsap.from("[data-header]", {
      y: -28, autoAlpha: 0, duration: 0.8, ease: "power3.out", delay: 0.15
    });

    /* ---------- 01 · hero entrance ---------- */
    gsap.timeline({ defaults: { ease: "power4.out" } })
      .from('[data-hero="line"]', { yPercent: 118, duration: 1.2, stagger: 0.11 })
      .from('[data-hero="kicker"]', { y: 16, autoAlpha: 0, duration: 0.8 }, 0.12)
      .from('[data-hero="lede"]', { y: 26, autoAlpha: 0, duration: 0.9 }, "-=0.55")
      .from('[data-hero="hint"]', { y: 10, autoAlpha: 0, duration: 0.7 }, "-=0.4");

    /* scroll-coupled hint line */
    gsap.fromTo(".hint-line",
      { scaleX: 0 },
      {
        scaleX: 1, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
      });

    /* ---------- ambient: orbs + simplex dust ---------- */
    gsap.to(".orb--a", { x: 70, y: 50, duration: 15, ease: "sine.inOut", yoyo: true, repeat: -1 });
    gsap.to(".orb--b", { x: -60, y: -70, duration: 19, ease: "sine.inOut", yoyo: true, repeat: -1 });

    if (typeof SimplexNoise !== "undefined") {
      const noise = new SimplexNoise();
      const host = document.querySelector(".ambient");
      const N = 36;
      const motes = [];
      for (let i = 0; i < N; i++) {
        const el = document.createElement("span");
        el.className = "dust";
        el.style.opacity = (0.08 + Math.random() * 0.22).toFixed(2);
        host.appendChild(el);
        motes.push({
          el,
          x: Math.random() * 100,
          y: Math.random() * 100,
          t: Math.random() * 1000
        });
      }
      gsap.ticker.add(() => {
        for (let i = 0; i < motes.length; i++) {
          const m = motes[i];
          m.t += 0.0022;
          m.x += noise.noise2D(m.t, 0) * 0.028;
          m.y += noise.noise2D(0, m.t) * 0.028;
          if (m.x > 102) m.x = -2; else if (m.x < -2) m.x = 102;
          if (m.y > 102) m.y = -2; else if (m.y < -2) m.y = 102;
          m.el.style.transform = `translate3d(${m.x}vw, ${m.y}vh, 0)`;
        }
      });
    }

    /* ---------- reel cards: elastic hover accents ---------- */
    gsap.utils.toArray('[data-reel="list"] > .card').forEach((card) => {
      const ring = card.querySelector(".figure-ring");
      const disc = card.querySelector(".figure-disc");
      const bar = card.querySelector(".figure-bar");
      if (!ring) return;

      const enter = () => {
        gsap.to(card, { y: -8, duration: 0.5, ease: "elastic.out(1, 0.55)", overwrite: "auto" });
        gsap.to(ring, { rotate: 90, scale: 1.06, duration: 0.9, ease: "power3.out", overwrite: "auto" });
        gsap.to(disc, { x: 12, y: -10, scale: 1.1, duration: 0.9, ease: "power3.out", overwrite: "auto" });
        gsap.to(bar, { scaleX: 1.25, duration: 0.9, ease: "power3.out", overwrite: "auto" });
      };
      const leave = () => {
        gsap.to(card, { y: 0, duration: 0.45, ease: "power3.out", overwrite: "auto" });
        gsap.to([ring, disc, bar], { rotate: 0, x: 0, y: 0, scale: 1, scaleX: 1, duration: 0.7, ease: "power3.out", overwrite: "auto" });
      };
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      card.addEventListener("focus", enter);
      card.addEventListener("blur", leave);
    });

    /* ---------- 03 · transit — pinned opposite drift ---------- */
    const transit = document.querySelector(".transit");
    const tracks = gsap.utils.toArray('[data-transit="track"]');
    if (transit && tracks.length) {
      tracks.forEach((track, i) => {
        const plates = track.querySelectorAll(".plate");
        plates.forEach((p, j) => { p.dataset.index = pad(j + 1); });
      });

      const [east, west] = tracks;
      const distEast = () => east.scrollWidth - east.parentElement.offsetWidth;
      const distWest = () => west.scrollWidth - west.parentElement.offsetWidth;

      gsap.timeline({
        scrollTrigger: {
          trigger: transit,
          start: "top top",
          end: "+=170%",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1
        }
      })
        .fromTo(east, { x: 0 }, { x: () => -distEast(), ease: "none" }, 0)
        .fromTo(west, { x: () => -distWest() }, { x: 0, ease: "none" }, 0);
    }

    /* ---------- 04 · manifesto — scrubbed clip-fill ---------- */
    gsap.utils.toArray('[data-fill="line"]').forEach((fill) => {
      gsap.fromTo(fill,
        { backgroundSize: "0% 100%" },
        {
          backgroundSize: "100% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: fill,
            start: "top 88%",
            end: "top 32%",
            scrub: 0.5
          }
        });
    });
    gsap.fromTo('[data-fill="note"]',
      { autoAlpha: 0, y: 12 },
      {
        autoAlpha: 1, y: 0, duration: 0.9, ease: "power2.out",
        scrollTrigger: { trigger: "[data-fill='note']", start: "top 92%" }
      });
  }

  /* ============================================================
     Navigation — native smooth scroll with header offset
  ============================================================ */
  document.querySelectorAll("[data-scroll-to]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(el.dataset.scrollTo);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
    });
  });

  /* Re-measure once fonts/layout settle */
  window.addEventListener("load", () => ScrollTrigger.refresh());

});

/* ============================================================
   horizontalLoop — GSAP helper
   Infinite horizontal loop with draggable + inertia support.
   Adapted from the GSAP community helper (see draggable-infinite-slider).
   ============================================================ */
function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let timeline;
  gsap.context(() => {
    let onChange = config.onChange,
      lastIndex = 0,
      tl = gsap.timeline({
        repeat: config.repeat,
        onUpdate: onChange && function () {
          let i = tl.closestIndex();
          if (lastIndex !== i) {
            lastIndex = i;
            onChange(items[i], i);
          }
        },
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      spaceBefore = [],
      xPercents = [],
      curIndex = 0,
      indexIsDirty = false,
      center = config.center,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
      timeOffset = 0,
      container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
      totalWidth,
      getTotalWidth = () =>
        items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX +
        spaceBefore[0] + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0),
      populateWidths = () => {
        let b1 = container.getBoundingClientRect(), b2;
        items.forEach((el, i) => {
          widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
          xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 +
            gsap.getProperty(el, "xPercent"));
          b2 = el.getBoundingClientRect();
          spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
          b1 = b2;
        });
        gsap.set(items, { xPercent: (i) => xPercents[i] });
        totalWidth = getTotalWidth();
      },
      timeWrap,
      populateOffsets = () => {
        timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
        center && times.forEach((t, i) => {
          times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
        });
      },
      getClosest = (values, value, wrap) => {
        let i = values.length, closest = 1e10, index = 0, d;
        while (i--) {
          d = Math.abs(values[i] - value);
          if (d > wrap / 2) d = wrap - d;
          if (d < closest) { closest = d; index = i; }
        }
        return index;
      },
      populateTimeline = () => {
        let i, item, curX, distanceToStart, distanceToLoop;
        tl.clear();
        for (i = 0; i < length; i++) {
          item = items[i];
          curX = xPercents[i] / 100 * widths[i];
          distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
          distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
          tl.to(item, {
            xPercent: snap((curX - distanceToLoop) / widths[i] * 100),
            duration: distanceToLoop / pixelsPerSecond
          }, 0)
            .fromTo(item, {
              xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)
            }, {
              xPercent: xPercents[i],
              duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false
            }, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
        timeWrap = gsap.utils.wrap(0, tl.duration());
      },
      refresh = (deep) => {
        let progress = tl.progress();
        tl.progress(0, true);
        populateWidths();
        deep && populateTimeline();
        populateOffsets();
        deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
      },
      onResize = () => refresh(true),
      proxy;
    gsap.set(items, { x: 0 });
    populateWidths();
    populateTimeline();
    populateOffsets();
    window.addEventListener("resize", onResize);
    function toIndex(index, vars) {
      vars = vars || {};
      (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex && index !== curIndex) {
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      if (time < 0 || time > tl.duration()) {
        vars.modifiers = { time: timeWrap };
      }
      curIndex = newIndex;
      vars.overwrite = true;
      gsap.killTweensOf(proxy);
      return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
    }
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.closestIndex = (setCurrent) => {
      let index = getClosest(times, tl.time(), tl.duration());
      if (setCurrent) {
        curIndex = index;
        indexIsDirty = false;
      }
      return index;
    };
    tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
    tl.next = (vars) => toIndex(tl.current() + 1, vars);
    tl.previous = (vars) => toIndex(tl.current() - 1, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    if (config.draggable && typeof (Draggable) === "function") {
      proxy = document.createElement("div");
      let wrap = gsap.utils.wrap(0, 1),
        ratio, startProgress, draggable, dragSnap, lastSnap, initChangeX, wasPlaying,
        align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
        syncIndex = () => tl.closestIndex(true);
      typeof (InertiaPlugin) === "undefined" &&
        console.warn("InertiaPlugin required for momentum-based scrolling and snapping.");
      draggable = Draggable.create(proxy, {
        trigger: config.trigger || items[0].parentNode,
        type: "x",
        onPressInit() {
          let x = this.x;
          gsap.killTweensOf(tl);
          wasPlaying = !tl.paused();
          tl.pause();
          startProgress = tl.progress();
          refresh();
          ratio = 1 / totalWidth;
          initChangeX = (startProgress / -ratio) - x;
          gsap.set(proxy, { x: startProgress / -ratio });
        },
        onDrag: align,
        onThrowUpdate: align,
        overshootTolerance: 0,
        inertia: true,
        snap(value) {
          if (Math.abs(startProgress / -ratio - this.x) < 10) {
            return lastSnap + initChangeX;
          }
          let time = -(value * ratio) * tl.duration(),
            wrappedTime = timeWrap(time),
            snapTime = times[getClosest(times, wrappedTime, tl.duration())],
            dif = snapTime - wrappedTime;
          Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
          lastSnap = (time + dif) / tl.duration() / -ratio;
          return lastSnap;
        },
        onRelease() {
          syncIndex();
          draggable.isThrowing && (indexIsDirty = true);
        },
        onThrowComplete: () => {
          syncIndex();
          wasPlaying && tl.play();
        }
      })[0];
      tl.draggable = draggable;
    }
    tl.closestIndex(true);
    lastIndex = curIndex;
    onChange && onChange(items[curIndex], curIndex);
    timeline = tl;
  });
  return timeline;
}
