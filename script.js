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

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
