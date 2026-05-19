const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const preferredTheme = localStorage.getItem('theme');

if (preferredTheme) {
  root.setAttribute('data-theme', preferredTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.setAttribute('data-theme', 'dark');
}

const updateToggleIcon = () => {
  const currentTheme = root.getAttribute('data-theme');
  toggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
};

updateToggleIcon();

toggle.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateToggleIcon();
});

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray('.scroll-section');
  sections.forEach((section) => {
    const title = section.querySelector('.section-title');
    const kicker = section.querySelector('.section-kicker');
    const text = section.querySelector('.section-text');
    const introElements = [kicker, title, text].filter(Boolean);

    if (introElements.length) {
      gsap.set(introElements, { autoAlpha: 0, y: 36 });
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=100%',
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scrub: 1.1,
      },
    });

    if (kicker) {
      timeline.to(kicker, { autoAlpha: 1, y: 0, duration: 0.6 }, 0);
    }
    if (title) {
      timeline.to(title, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.1);
    }
    if (text) {
      timeline.to(text, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.2);
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

  gsap.from('.feature-card', {
    x: (index) => (index % 2 === 0 ? -85 : 85),
    autoAlpha: 0,
    stagger: 0.18,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.section-features',
      start: 'top 62%',
      end: 'bottom 45%',
      scrub: 0.9,
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
}
