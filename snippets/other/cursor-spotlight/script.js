
  // Design note: a bright copy of the headline is clipped to a circle that
  // follows the cursor — the page hides until you look at it. Reduced motion:
  // the bright copy is always visible (CSS removes the clip).
  const stage = document.querySelector('[data-spot="stage"]');
  const bright = stage.querySelector(".bright");

  stage.addEventListener("mousemove", (e) => {
    const r = stage.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    bright.style.setProperty("--sx", x + "%");
    bright.style.setProperty("--sy", y + "%");
  });
