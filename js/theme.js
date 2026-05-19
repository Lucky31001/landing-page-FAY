import { root, toggle } from './constants.js';

const updateToggleIcon = () => {
  if (!toggle) {
    return;
  }

  const currentTheme = root.getAttribute('data-theme');
  toggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
};

const applyPreferredTheme = () => {
  const preferredTheme = localStorage.getItem('theme');

  if (preferredTheme) {
    root.setAttribute('data-theme', preferredTheme);
    return;
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
  }
};

const setupThemeToggle = () => {
  if (!toggle) {
    return;
  }

  toggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateToggleIcon();
  });
};

export const initializeTheme = () => {
  applyPreferredTheme();
  updateToggleIcon();
  setupThemeToggle();
};
