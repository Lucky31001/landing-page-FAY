export const initializeAnimations = () => {
  if (!window.gsap || !window.ScrollTrigger) {
    return;
  }

  const splitTextIntoWords = (element) => {
    if (!element || element.dataset.wordsSplit === 'true') {
      return [];
    }

    const rawText = element.textContent?.trim() ?? '';
    if (!rawText) {
      return [];
    }

    const words = rawText.split(/\s+/);
    const fragment = document.createDocumentFragment();
    const wordElements = [];

    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.className = 'reveal-word';
      span.textContent = word;
      fragment.append(span);

      if (index < words.length - 1) {
        fragment.append(' ');
      }

      wordElements.push(span);
    });

    element.textContent = '';
    element.append(fragment);
    element.dataset.wordsSplit = 'true';

    return wordElements;
  };

  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray('.scroll-section');
  sections.forEach((section) => {
    const title = section.querySelector('.section-title');
    const kicker = section.querySelector('.section-kicker');
    const text = section.querySelector('.section-text');
    const textWords = splitTextIntoWords(text);
    const photoElements = section.querySelectorAll('.photo-card, .photo-chip, .parallax-photo, .cta-photo');
    const introElements = [kicker, title, text].filter(Boolean);

    gsap.set(section, { autoAlpha: 0.45, scale: 0.96, y: 48, filter: 'blur(3px)' });

    if (introElements.length) {
      gsap.set(introElements, { autoAlpha: 0, y: 30 });
    }
    if (photoElements.length) {
      gsap.set(photoElements, {
        autoAlpha: 0,
        y: 46,
        scale: 0.92,
        rotate: (index) => (index % 2 === 0 ? -4 : 4),
      });
    }
    if (textWords.length) {
      gsap.set(textWords, { autoAlpha: 0, y: 14 });
    }

    ScrollTrigger.create({
      trigger: section,
      start: 'top 72%',
      onEnter: () => section.classList.add('is-active'),
      onEnterBack: () => section.classList.add('is-active'),
      onLeave: () => section.classList.remove('is-active'),
      onLeaveBack: () => section.classList.remove('is-active'),
    });

    gsap.to(section, {
      autoAlpha: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 78%',
        toggleActions: 'play reverse play reverse',
      },
    });

    if (kicker) {
      gsap.to(kicker, {
        autoAlpha: 1,
        y: 0,
        duration: 0.45,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 76%',
          toggleActions: 'play reverse play reverse',
        },
      });
    }

    if (title) {
      gsap.to(title, {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 74%',
          toggleActions: 'play reverse play reverse',
        },
      });
    }

    if (text) {
      if (textWords.length) {
        gsap.to(textWords, {
          autoAlpha: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.045,
          ease: 'power2.out',
          delay: 0.06,
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            toggleActions: 'play reverse play reverse',
          },
        });
      } else {
        gsap.to(text, {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          delay: 0.06,
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            toggleActions: 'play reverse play reverse',
          },
        });
      }
    }

    if (photoElements.length) {
      gsap.to(photoElements, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 76%',
          toggleActions: 'play reverse play reverse',
        },
      });
    }
  });

  gsap.fromTo(
    '.floating-orb',
    { scale: 0.68, yPercent: 15, autoAlpha: 0.16 },
    {
      scale: 1.2,
      yPercent: -12,
      autoAlpha: 0.36,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-intro',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.4,
      },
    }
  );

  gsap.fromTo(
    '.feature-card',
    {
      autoAlpha: 0,
      y: 24,
      scale: 0.96,
      filter: 'blur(2px)',
    },
    {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      stagger: 0.12,
      duration: 0.72,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.section-features',
        start: 'top 68%',
        toggleActions: 'play reverse play reverse',
      },
    }
  );

  gsap.to('.photo-card-main', {
    yPercent: -14,
    scale: 1.08,
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-intro',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
    },
  });

  gsap.to('.photo-card-left', {
    yPercent: -22,
    xPercent: 10,
    rotate: -8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-intro',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.4,
    },
  });

  gsap.to('.photo-card-right', {
    yPercent: -18,
    xPercent: -10,
    rotate: 8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-intro',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.3,
    },
  });

  gsap.to('.photo-chip', {
    xPercent: (index) => (index % 2 === 0 ? -10 : 10),
    yPercent: (index) => (index === 1 ? -16 : -9),
    rotate: (index) => (index % 2 === 0 ? -4 : 4),
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-features',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.1,
    },
  });

  gsap.to('.layer-back', {
    yPercent: -18,
    scale: 1.05,
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-parallax',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.to('.layer-mid', {
    yPercent: -30,
    scale: 1.12,
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-parallax',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.to('.photo-a', {
    yPercent: -28,
    rotate: -8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-parallax',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.to('.photo-b', {
    yPercent: -34,
    rotate: 8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-parallax',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.to('.cta-photo', {
    yPercent: (index) => (index % 2 === 0 ? -22 : -14),
    rotate: (index) => (index % 2 === 0 ? -5 : 5),
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-cta',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.3,
    },
  });

  gsap.fromTo(
    '.final-cta',
    { scale: 0.86, autoAlpha: 0, y: 26 },
    {
      scale: 1,
      y: 0,
      autoAlpha: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.section-cta',
        start: 'top 68%',
        end: 'bottom 45%',
        scrub: 0.7,
      },
    }
  );
};
