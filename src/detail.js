// pages/details/src/detail.js
import { seriesList } from './seriesList.js';

function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

function renderSeriesDetail(series) {
  // Actualizar título de la pestaña
  document.getElementById('page-title').textContent = `${series.title} – VideoStream`;

  // Hero images
  document.getElementById('hero-img').src = series.image;
  document.getElementById('hero-img-mobile').src = series.imageMobile;

  // Título y descripción
  document.getElementById('series-title-img').src = series.titleIMG;
  document.getElementById('series-title').textContent = series.title;
  document.getElementById('series-desc').textContent = series.description;

  // Botón de play redirige a la misma página o a un reproductor
  const playBtn = document.getElementById('btn-play');
  playBtn.onclick = () => {
    // Aquí podrías abrir un modal o enviar a player.html?id=...
    window.location.href = `player.html?series=${series.id}`;
  };
}

function showNotFound() {
  document.body.innerHTML = `
    <div class="flex h-screen items-center justify-center text-white">
      <h1 class="text-2xl">Serie no encontrada 😢</h1>
    </div>
  `;
}

(function init() {
  const id = getQueryParam('id');
  if (!id) return showNotFound();

  const serie = seriesList.find(s => s.id === id);
  if (!serie) return showNotFound();

  renderSeriesDetail(serie);
})();
