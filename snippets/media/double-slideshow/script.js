
  // Design note: two decks take turns — the foreground turns over in 3D while
  // the background morphs behind it, so every step reads on two depths.
  // Reduced motion: panels simply crossfade.
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const deck = document.querySelector('[data-slide="deck"]');
  const fg = gsap.utils.toArray('[data-slide="fg"]');
  const bg = gsap.utils.toArray('[data-slide="bg"]');
  const idx = document.querySelector('[data-slide="idx"]');
  let cur = 0;
  const N = fg.length;

  gsap.set(fg[0], { opacity: 1 });
  gsap.set(bg[0], { opacity: 0.65 });

  const show = (next, dir) => {
    const o = fg[cur], n = fg[next], ob = bg[cur], nb = bg[next];
    idx.textContent = String(next + 1).padStart(2, "0");
    if (reduced) {
      gsap.to(o, { opacity: 0, duration: 0 });
      gsap.to(ob, { opacity: 0, duration: 0 });
      gsap.to(n, { opacity: 1, duration: 0 });
      gsap.to(nb, { opacity: 0.65, duration: 0 });
      cur = next;
      return;
    }
    const tl = gsap.timeline({ onComplete: () => { cur = next; } });
    tl.set(n, { zIndex: 3, opacity: 1, x: 0, rotationY: dir * -90 })
      .set(o, { zIndex: 3 })
      .to(o, { rotationY: dir * 90, opacity: 0.4, duration: 0.55, ease: "power3.in" })
      .to(n, { rotationY: 0, opacity: 1, duration: 0.55, ease: "power3.out" }, "<")
      .to(ob, { opacity: 0, scale: 1.08, duration: 0.7, ease: "power2.inOut" }, 0)
      .fromTo(nb, { opacity: 0, scale: 0.92 }, { opacity: 0.65, scale: 1, duration: 0.7, ease: "power2.inOut" }, 0)
      .set(o, { zIndex: 1, rotationY: 0 })
      .set(ob, { scale: 1, opacity: 0 });
  };

  const next = () => show((cur + 1) % N, 1);
  const prev = () => show((cur + N - 1) % N, -1);
  document.querySelector('[data-slide="next"]').addEventListener("click", next);
  document.querySelector('[data-slide="prev"]').addEventListener("click", prev);
