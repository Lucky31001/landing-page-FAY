import { initializePartials } from './partials.js';
import { initializeTheme } from './theme.js';
import { initializeImageFallbacks } from './images.js';
import { initializeAnimations } from './animations.js';

const initializeApp = async () => {
  await initializePartials();
  initializeTheme();
  initializeImageFallbacks();
  initializeAnimations();
};

initializeApp();
