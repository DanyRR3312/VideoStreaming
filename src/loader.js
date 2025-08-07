// loader.js : logica para ocultar el loader al cargar la pagina

import { slideData } from './contentSlideInfo.js';

/**
 * Pre­carga todas las imágenes del hero banner
 * para evitar parpadeos al cambiar slides.
 */
export function preloadImages() {
  slideData.forEach(({ img }) => {
    const image = new Image();
    image.src = img;
  });
}

/**
 * Oculta el loader una vez que la página completa
 * sus recursos (imágenes, fuentes, etc.).
 */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});
