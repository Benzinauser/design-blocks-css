
  // Design note: cards spin on rotationY to reveal a back face — hover for
  // mouse, click for touch/keyboard. Reduced motion: CSS crossfades the
  // faces instead of rotating in 3D.
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  gsap.utils.toArray('[data-flip="card"]').forEach((card) => {
    const inner = card.querySelector('[data-flip="inner"]');
    let flipped = false;

    const flip = () => {
      flipped = !flipped;
      if (!reduced) {
        gsap.to(inner, {
          rotateY: flipped ? 180 : 0,
          duration: 0.75,
          ease: "power3.inOut",
          overwrite: "auto"
        });
      } else {
        card.classList.toggle("is-flipped"); // opacity swap handled by CSS
      }
    };

    card.addEventListener("mouseenter", () => !flipped && flip());
    card.addEventListener("mouseleave", () => flipped && flip());
    card.addEventListener("click", flip);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); }
    });
  });
