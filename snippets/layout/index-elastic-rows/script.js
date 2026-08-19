
  // Design note: one row open at a time; the body height springs open with an
  // elastic ease (the signature of this snippet) and contracts on a plain
  // power3. Reduced motion: a simple, fast swap instead of the spring.
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  gsap.utils.toArray('[data-cap="item"]').forEach((item, i) => {
    const row = item.querySelector('[data-cap="row"]');
    const body = item.querySelector('[data-cap="body"]');

    const open = () => {
      gsap.utils.toArray('[data-cap="item"]').forEach((it, j) => {
        const b = it.querySelector('[data-cap="body"]');
        const willOpen = j === i && it.dataset.open !== "true";
        it.dataset.open = willOpen ? "true" : "false";
        it.querySelector('[data-cap="row"]').setAttribute("aria-expanded", willOpen ? "true" : "false");
        if (willOpen) {
          gsap.to(b, {
            height: b.scrollHeight,
            duration: reduced ? 0.45 : 1.15,
            ease: reduced ? "power2.out" : "elastic.out(1, 0.62)",
            overwrite: "auto"
          });
        } else {
          gsap.to(b, { height: 0, duration: 0.55, ease: "power3.inOut", overwrite: "auto" });
        }
      });
    };

    row.addEventListener("click", open);
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    });
  });
