// main.js

import { preloadImages } from './loader.js';
import { initCarousel } from './carousel.js';
import { renderRecommended } from './carouselRec.js';

window.addEventListener('DOMContentLoaded', () => {
  preloadImages();
  initCarousel();
  renderRecommended();
});
