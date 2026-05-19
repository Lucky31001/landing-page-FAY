import { imageFallback } from './constants.js';

export const initializeImageFallbacks = () => {
  document.querySelectorAll('img').forEach((image) => {
    image.addEventListener('error', () => {
      if (image.src !== imageFallback) {
        image.src = imageFallback;
      }
    });
  });
};
