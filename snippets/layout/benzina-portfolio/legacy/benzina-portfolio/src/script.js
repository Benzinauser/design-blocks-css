/* ===================================================================
   BENZINA EL HOUSSINE — portfolio
   Techniques from the "simples":
   - hero ......... the-jamswissted (masked poster loop)
   - statement .... text-scroll-and-hover (juxtopposed clip-fill)
   - work ......... draggable-infinite-slider (osmo horizontal loop)
   - capabilities . mask-animation-with-gsap-svg (svg mask word slider)
   - services ..... elastic-accordion (supah elastic widths)
   =================================================================== */

gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);

document.documentElement.classList.add("js");

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isMobile = () => window.innerWidth <= 720;

const $ = (sel, ctx) => (ctx || document).querySelector(sel);
const $$ = (sel, ctx) => gsap.utils.toArray((ctx || document).querySelectorAll(sel));

/* ===================================================================
   01 · HERO — swissted poster (the-jamswissted)
   =================================================================== */
function initHero() {
  const heroPoster = $(".hero-poster");
  const poster = $(".poster");
  const elB = $(".poster__b");
  const elEL = $(".poster__el");
  const enz = $(".poster__enz");
  const hou = $(".poster__hou");
  const stageRed = $(".poster__stage--red");
  const stageBlue = $(".poster__stage--blue");
  const dot = $(".poster__dot");
  const copySpans = $$(".poster__content span, .poster__guests span, .poster__location span");

  /* -- keep both lines of letterforms inside the 716px poster ---------- */
  const fitWords = () => {
    if (isMobile()) return; // mobile uses the proportional %-based layout
    [[elB, enz, stageRed], [elEL, hou, stageBlue]].forEach(([dark, light, stage]) => {
      const gap = 10;
      const target = poster.offsetWidth - dark.offsetLeft - dark.offsetWidth - gap - 12;
      if (light.offsetWidth > target) {
        const fs = parseFloat(gsap.getProperty(light, "fontSize"));
        gsap.set(light, { fontSize: fs * (target / light.offsetWidth) });
      }
      gsap.set(stage, { left: dark.offsetLeft + dark.offsetWidth + gap, width: target });
    });
  };

  /* -- scale the poster to fit the viewport (like the original) --------- */
  const resizePoster = () => {
    if (isMobile()) {
      gsap.set(heroPoster, { scale: 1 });
      [enz, hou].forEach((el) => gsap.set(el, { clearProps: "fontSize" }));
      [stageRed, stageBlue].forEach((el) => gsap.set(el, { clearProps: "left,width" }));
      return;
    }
    let s = (window.innerHeight - 108) / poster.offsetHeight;
    if (s > 1) s = 1;
    const sW = window.innerWidth / poster.offsetWidth;
    if (s > sW) s = sW;
    gsap.set(heroPoster, { scale: s });
  };

  /* -- the infinite crossing loop --------------------------------------- */
  const buildLoop = () => {
    const tl = gsap.timeline({
      defaults: { duration: 6, ease: "power4" },
      repeat: -1
    });

    /* enter: dark letters under the colour fields, cream letters through them */
    tl.from(elB, { x: 700 }, 0)
      .from(enz, { x: -840 }, 0)
      .from(dot, { x: -400 }, 0)
      .from(elEL, { x: 700 }, 0)
      .from(hou, { x: -840 }, 0)
      /* exit */
      .to(elB, { x: -1356, ease: "power4.in" }, 6)
      .to(enz, { x: 1400, ease: "power4.in" }, 6)
      .to(dot, { x: 616, ease: "power4.in" }, 6)
      .to(elEL, { x: -1356, ease: "power4.in" }, 6)
      .to(hou, { x: 1400, ease: "power4.in" }, 6);
    return tl;
  };

  const revealCopy = () =>
    gsap.from(copySpans, {
      x: -100,
      opacity: 0,
      stagger: 0.1,
      duration: 4,
      ease: "power4"
    });

  const master = gsap.timeline({ delay: 1 });
  if (!prefersReduced) {
    master.add(buildLoop()).add(revealCopy(), 0);
    const restart = () => master.restart();
    heroPoster.addEventListener("click", restart);
    heroPoster.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        restart();
      }
    });
  }

  window.addEventListener("resize", resizePoster);

  const ready = document.fonts && document.fonts.ready
    ? document.fonts.ready
    : Promise.resolve();
  ready.then(() => {
    fitWords();
    resizePoster();
  });
  window.addEventListener("load", () => {
    fitWords();
    resizePoster();
  });
}

/* ===================================================================
   02 · STATEMENT — scroll-scrubbed gradient fill + hover clip
       (text-scroll-and-hover-effect-with-gsap-and-clip)
   =================================================================== */
function initStatement() {
  if (prefersReduced) return;
  $$(".lines").forEach((line) => {
    gsap.fromTo(
      line,
      { backgroundSize: "0% 100%" },
      {
        backgroundSize: "100% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: line,
          start: "center 80%",
          end: "center 20%",
          scrub: true
        }
      }
    );
  });
}

/* ===================================================================
   03 · WORK — draggable infinite slider (draggable-infinite-slider-gsaposmo)
   =================================================================== */
function initWork() {
  const wrapper = $('[data-slider="list"]');
  if (!wrapper) return;
  const slides = $$('[data-slider="slide"]');
  const nextButton = $('[data-slider="button-next"]');
  const prevButton = $('[data-slider="button-prev"]');
  const totalElement = $('[data-slide-count="total"]');
  const stepsParent = $(".work__count");
  const allSteps = $$(".work__count span", stepsParent);

  totalElement.textContent = slides.length < 10 ? `0${slides.length}` : slides.length;

  const loop = horizontalLoop(slides, {
    paused: true,
    draggable: !prefersReduced,
    center: false,
    onChange: (element, index) => {
      slides.forEach((s) => s.classList.remove("is-active"));
      element.classList.add("is-active");
      gsap.to(allSteps, { y: `${-100 * index}%`, ease: "power3", duration: 0.45 });
    }
  });

  slides.forEach((slide, i) =>
    slide.addEventListener("click", () =>
      loop.toIndex(i, { ease: "power3", duration: prefersReduced ? 0.1 : 0.725 })
    )
  );
  nextButton.addEventListener("click", () =>
    loop.next({ ease: "power3", duration: prefersReduced ? 0.1 : 0.725 })
  );
  prevButton.addEventListener("click", () =>
    loop.previous({ ease: "power3", duration: prefersReduced ? 0.1 : 0.725 })
  );
}

/**
 * horizontalLoop — the classic GSAP infinite loop (draggable variant),
 * as used in the osmo draggable-infinite-slider demo.
 * https://greensock.com/docs/v3/GSAP/Utils/horizontalLoop
 */
function horizontalLoop(items, config) {
  let timeline;
  items = gsap.utils.toArray(items);
  config = config || {};
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
      snap = config.snap === false
        ? (v) => v
        : gsap.utils.snap(config.snap || 1),
      timeOffset = 0,
      container = center === true
        ? items[0].parentNode
        : gsap.utils.toArray(center)[0] || items[0].parentNode,
      totalWidth,
      getTotalWidth = () =>
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        spaceBefore[0] +
        items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0),
      populateWidths = () => {
        let b1 = container.getBoundingClientRect(),
          b2;
        items.forEach((el, i) => {
          widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px")) / widths[i]) * 100 +
              gsap.getProperty(el, "xPercent")
          );
          b2 = el.getBoundingClientRect();
          spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
          b1 = b2;
        });
        gsap.set(items, {
          xPercent: (i) => xPercents[i]
        });
        totalWidth = getTotalWidth();
      },
      timeWrap,
      populateOffsets = () => {
        timeOffset = center
          ? (tl.duration() * (container.offsetWidth / 2)) / totalWidth
          : 0;
        center &&
          times.forEach((t, i) => {
            times[i] = timeWrap(
              tl.labels["label" + i] +
                (tl.duration() * widths[i]) / 2 / totalWidth -
                timeOffset
            );
          });
      },
      getClosest = (values, value, wrap) => {
        let i = values.length,
          closest = 1e10,
          index = 0,
          d;
        while (i--) {
          d = Math.abs(values[i] - value);
          if (d > wrap / 2) {
            d = wrap - d;
          }
          if (d < closest) {
            closest = d;
            index = i;
          }
        }
        return index;
      },
      populateTimeline = () => {
        let i,
          item,
          curX,
          distanceToStart,
          distanceToLoop;
        tl.clear();
        for (i = 0; i < length; i++) {
          item = items[i];
          curX = (xPercents[i] / 100) * widths[i];
          distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
          distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
          tl.to(
            item,
            {
              xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
              duration: distanceToLoop / pixelsPerSecond
            },
            0
          )
            .fromTo(
              item,
              {
                xPercent: snap(
                  ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                )
              },
              {
                xPercent: xPercents[i],
                duration:
                  (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                immediateRender: false
              },
              distanceToLoop / pixelsPerSecond
            )
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
        deep && tl.draggable
          ? tl.time(times[curIndex], true)
          : tl.progress(progress, true);
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
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length);
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
      return vars.duration === 0
        ? tl.time(timeWrap(time))
        : tl.tweenTo(time, vars);
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
    tl.current = () => (indexIsDirty ? tl.closestIndex(true) : curIndex);
    tl.next = (vars) => toIndex(tl.current() + 1, vars);
    tl.previous = (vars) => toIndex(tl.current() - 1, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);

    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }

    if (config.draggable && typeof Draggable === "function") {
      proxy = document.createElement("div");
      let wrap = gsap.utils.wrap(0, 1),
        ratio,
        startProgress,
        draggable,
        dragSnap,
        lastSnap,
        initChangeX,
        wasPlaying,
        align = () =>
          tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
        syncIndex = () => tl.closestIndex(true);
      typeof InertiaPlugin === "undefined" &&
        console.warn(
          "InertiaPlugin required for momentum-based scrolling and snapping."
        );
      draggable = Draggable.create(proxy, {
        trigger: items[0].parentNode,
        type: "x",
        onPressInit() {
          let x = this.x;
          gsap.killTweensOf(tl);
          wasPlaying = !tl.paused();
          tl.pause();
          startProgress = tl.progress();
          refresh();
          ratio = 1 / totalWidth;
          initChangeX = startProgress / -ratio - x;
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
          Math.abs(dif) > tl.duration() / 2 &&
            (dif += dif < 0 ? tl.duration() : -tl.duration());
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
    return () => window.removeEventListener("resize", onResize);
  });
  return timeline;
}

/* ===================================================================
   04 · CAPABILITIES — svg mask word slider
       (mask-animation-with-gsap-svg)
   =================================================================== */
function initCaps() {
  const wrap = $("#cap-svg-wrap");
  if (!wrap) return;
  const blobs = $("#cap-blobs");
  const text1 = $(".cap-text1");
  const text2 = $(".cap-text2");
  const slides = $$(".cap-slide");
  const list = $(".cap-list");
  const colors = ["#e30014", "#01aff6", "#ffd036", "#dde1d4"];
  const NS = "http://www.w3.org/2000/svg";

  let current = 0;
  let busy = false;
  let timer = null;

  const circles = [];
  for (let i = 0; i < 34; i++) {
    const c = document.createElementNS(NS, "circle");
    c.setAttribute("cx", Math.random() * 1200);
    c.setAttribute("cy", Math.random() * 420);
    c.setAttribute("r", 42 + Math.random() * 88);
    c.setAttribute("fill", colors[Math.floor(Math.random() * colors.length)]);
    c.style.transformBox = "fill-box";
    c.style.transformOrigin = "center";
    blobs.appendChild(c);
    circles.push(c);
  }

  const rad = () => (Math.random() - 0.5) * 60;

  const apply = (idx) => {
    const s = slides[idx];
    text1.textContent = s.getAttribute("data-1");
    text2.textContent = s.getAttribute("data-2");
    list.textContent = s.getAttribute("data-3");
    circles.forEach((c) =>
      c.setAttribute("fill", colors[Math.floor(Math.random() * colors.length)])
    );
  };

  const grow = () =>
    gsap.fromTo(
      circles,
      { scale: 0, rotation: rad() },
      {
        scale: 1.15,
        rotation: rad(),
        duration: 1.5,
        ease: "power2.inOut",
        stagger: { each: 0.04 }
      }
    );

  const next = () => {
    if (busy) return;
    current = (current + 1) % slides.length;
    if (prefersReduced) {
      apply(current);
      return;
    }
    busy = true;
    gsap.to(circles, {
      scale: 0,
      duration: 1.1,
      ease: "power2.inOut",
      stagger: { each: 0.03 },
      onComplete: () => {
        apply(current);
        grow();
        busy = false;
      }
    });
  };

  const startTimer = () => {
    if (prefersReduced) return;
    clearInterval(timer);
    timer = setInterval(next, 5000);
  };

  wrap.addEventListener("click", () => {
    next();
    startTimer();
  });

  apply(0);
  if (!prefersReduced) grow();
  startTimer();
}

/* ===================================================================
   05 · SERVICES — elastic accordion (elastic-accordion-gsap)
   =================================================================== */
function initServices() {
  const svcs = $$("[data-svc]");
  const row = $(".services__row");
  if (!svcs.length || !row) return;

  const W = () =>
    isMobile()
      ? { base: "13%", mid: "18%", open: "50%" }
      : { base: "11%", mid: "16%", open: "38%" };

  const expand = (item, i) => {
    svcs.forEach((it, ind) => {
      if (i !== ind) it.clicked = false;
    });
    const w = W();
    const ease = prefersReduced ? "power2.inOut" : "elastic(1, .6)";
    const dur = prefersReduced ? 0.5 : 2;
    const openDur = prefersReduced ? 0.6 : 2.5;
    const openEase = prefersReduced ? "power2.inOut" : "elastic(1, .3)";

    gsap.to(svcs, { width: item.clicked ? w.mid : w.base, duration: dur, ease });
    item.clicked = !item.clicked;
    gsap.to(item, {
      width: item.clicked ? w.open : w.mid,
      duration: openDur,
      ease: openEase
    });
    svcs.forEach((s) => s.classList.toggle("is-open", s === item && item.clicked));
  };

  svcs.forEach((item, i) => {
    item.clicked = false;
    item.addEventListener("click", () => {
      gsap.to(item, { scale: 0.985, duration: 0.1, yoyo: true, repeat: 1 });
      expand(item, i);
    });
  });
}

/* ===================================================================
   06 · OUTRO — masked line rises
   =================================================================== */
function initOutro() {
  if (prefersReduced) return;
  gsap.from(".outro__line", {
    yPercent: 115,
    duration: 1.1,
    stagger: 0.12,
    ease: "power4.out",
    scrollTrigger: { trigger: ".outro", start: "top 78%" }
  });
  gsap.from(".outro__mail, .outro__note", {
    y: 30,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: { trigger: ".outro", start: "top 55%" }
  });
}

/* ===================================================================
   06 · SPRING-TRAIL CURSOR — spring-mass follower
       (motion-atlas: 28-spring-trail)
   =================================================================== */
function initCursorTrail() {
  const blob = $(".cursor-trail");
  if (!blob || prefersReduced) return;
  let tx = innerWidth / 2, ty = innerHeight / 2; // pointer target
  let x = tx, y = ty, vx = 0, vy = 0;            // spring state
  let seen = false;

  document.addEventListener("mousemove", (e) => {
    if (!seen) {
      seen = true;
      x = tx = e.clientX;
      y = ty = e.clientY;
      gsap.to(blob, { opacity: 1, duration: 0.4 });
    }
    tx = e.clientX;
    ty = e.clientY;
  });
  document.addEventListener("mouseleave", () =>
    gsap.to(blob, { opacity: 0, duration: 0.5 })
  );

  gsap.ticker.add(() => {
    vx += (tx - x) * 0.1;
    vx *= 0.84;
    vy += (ty - y) * 0.1;
    vy *= 0.84;
    x += vx;
    y += vy;

    const speed = Math.hypot(vx, vy);
    const stretch = 1 + Math.min(speed * 0.018, 0.5);
    const angle = (Math.atan2(vy, vx) * 180) / Math.PI;

    gsap.set(blob, {
      x: x - 17,
      y: y - 17,
      rotation: angle,
      scaleX: stretch,
      scaleY: 2 - stretch,
      transformOrigin: "50% 50%"
    });
  });
}

/* =================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initHero();
  initStatement();
  initWork();
  initCaps();
  initServices();
  initOutro();
  initCursorTrail();
});