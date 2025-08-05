// main.js


import { load } from './loader.js'; 
import { initCarousel } from './carousel.js';
import { renderRecommended } from './carouselRec.js';

window.addEventListener('DOMContentLoaded', () => {

  initCarousel();
  renderRecommended();

});