
  // Design note: the menu appears as a single disc that blooms from the
  // button's corner, flattening as it grows, with the links surfacing in its
  // wake. Reduced motion: the veil fades — no expansion, no travel.
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const burger = document.querySelector('[data-menu="burger"]');
  const veil = document.querySelector('[data-menu="veil"]');
  const links = document.querySelector('[data-menu="links"]');
  const items = gsap.utils.toArray(links.querySelectorAll("a"));
  let open = false, busy = false;

  const close = () => {
    open = false; busy = true;
    burger.setAttribute("aria-expanded", "false");
    links.setAttribute("aria-hidden", "true");
    if (reduced) {
      gsap.to(veil, { opacity: 0, duration: 0.2, onComplete: () => { busy = false; links.style.pointerEvents = "none"; } });
      return;
    }
    const tl = gsap.timeline({ onComplete: () => { busy = false; links.style.pointerEvents = "none"; } });
    tl.to(items, { opacity: 0, y: 18, duration: 0.25, stagger: 0.03, ease: "power2.in" })
      .to(veil, { borderRadius: "50%", scale: 1, duration: 0.5, ease: "power3.in" }, "-=0.1")
      .to(veil, { opacity: 0, duration: 0.35, ease: "power2.out" }, "-=0.15");
  };

  const openMenu = () => {
    open = true; busy = true;
    burger.setAttribute("aria-expanded", "true");
    links.setAttribute("aria-hidden", "false");
    if (reduced) {
      gsap.to(veil, { opacity: 0.92, duration: 0.2, onComplete: () => { busy = false; links.style.pointerEvents = "auto"; } });
      return;
    }
    const tl = gsap.timeline({ onComplete: () => { busy = false; links.style.pointerEvents = "auto"; } });
    tl.set(veil, { opacity: 1, scale: 0.001, borderRadius: "50%" })
      .set(veil, { transformOrigin: "100% 0%" })
      .to(veil, { scale: 60, borderRadius: "0%", duration: 0.75, ease: "power4.inOut" })
      .to(items, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" }, "-=0.3");
  };

  burger.addEventListener("click", () => { if (busy) return; open ? close() : openMenu(); });
