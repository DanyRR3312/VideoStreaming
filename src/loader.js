// loader.js : logica para ocultar el loader al cargar la pagina

export const load = window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});