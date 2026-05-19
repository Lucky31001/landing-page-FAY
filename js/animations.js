export const initializeAnimations = () => {
  if (!window.gsap || !window.ScrollTrigger) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray('.scroll-section');

  sections.forEach((section) => {
    const copyElements = section.querySelectorAll('.section-kicker, .section-title, .section-text, .final-cta');
    const mediaElements = section.querySelectorAll(
      '.photo-card, .photo-chip, .parallax-layer, .parallax-photo, .cta-photo'
    );

    gsap.fromTo(
      section,
      { autoAlpha: 0, y: 32 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    if (copyElements.length) {
      gsap.fromTo(
        copyElements,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.55,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 74%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    if (mediaElements.length) {
      gsap.fromTo(
        mediaElements,
        { autoAlpha: 0, y: 28, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.72,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 76%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  });

  gsap.to('.floating-orb', {
    yPercent: -16,
    scale: 1.1,
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-intro',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
    },
  });

  gsap.to('.layer-back', {
    yPercent: -12,
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-parallax',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.to('.layer-mid', {
    yPercent: -22,
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-parallax',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};
