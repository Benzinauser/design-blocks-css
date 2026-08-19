
  // Design note: the section pins while the panel row slides east-to-west
  // with scrub — a book read sideways, with a live chapter counter.
  // Reduced motion: no pin; the panels keep their vertical stack.
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const section = document.querySelector('[data-hscroll="section"]');
    const track = document.querySelector('[data-hscroll="track"]');
    const panels = gsap.utils.toArray('[data-hscroll="track"] > .panel');
    const cur = document.querySelector('[data-hscroll="cur"]');

    track.style.flexDirection = "row";
    panels.forEach((p) => (p.style.minHeight = "100svh"));
    document.querySelector('[data-hscroll="tot"]').textContent = String(panels.length).padStart(2, "0");

    gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + (track.scrollWidth - window.innerWidth),
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          cur.textContent = String(Math.min(panels.length, Math.floor(self.progress * panels.length) + 1)).padStart(2, "0");
        }
      }
    });
  }
