
  // Design note: each word turns from dim to full ink as the scroll passes —
  // the reader "spends" the text at reading pace. Reduced motion: the whole
  // passage is simply readable (no dim state applied).
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const copy = document.querySelector('[data-read="copy"]');
    const split = new SplitText(copy, { type: "words", wordsClass: "word" });

    gsap.fromTo(split.words,
      { color: "rgba(242,237,227,0.18)" },
      {
        color: "#f2ede3",
        ease: "none",
        stagger: 1, // one unit of scrub time per word, in reading order
        scrollTrigger: {
          trigger: copy,
          start: "top 70%",
          end: "bottom 55%",
          scrub: true
        }
      });
  }
