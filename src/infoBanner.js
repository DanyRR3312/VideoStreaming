// Cambiar dinamicamente la informacion del Banner : infoBaner.js

import { slideData } from './contentSlideInfo.js';

export function updateInfo(index) {
  const info    = document.getElementById('info');
  const data    = slideData[index];
  const pageLink = data.page ?? '#';

  // Inicia el fade­out usando la transición CSS
  info.style.opacity = 0;

  // Espera a que termine la transición de opacidad
  function onTransitionEnd(e) {
    if (e.propertyName !== 'opacity') return;

    info.removeEventListener('transitionend', onTransitionEnd);

    // Inyecta el nuevo contenido
    info.innerHTML = `
      <img
        src="${data.img}"
        alt=""
        class="max-md:w-[12rem] md:w-[15rem] lg:w-[20rem] xl:w-[25rem] 2xl:w-full"
      />
      <h2
        id="info-h2"
        class="max-md:text-sm max-md:mx-2 md:mx-3 md:my-2 lg:flex lg:my-2 lg:mx-4 xl:text-[1.1rem] 2xl:text-lg"
      >${data.title}</h2>
      <p
        id="info-p"
        class="mb-6 max-md:text-sm max-md:line-clamp-3 max-md:mx-2 md:mx-3 md:line-clamp-4 lg:flex lg:mx-4 lg:text-[1rem] xl:text-[1.1rem] 2xl:text-lg"
      >${data.desc}</p>
      <a
        href="${pageLink}"
        id="btn-banner"
        class="max-md:mx-2 max-md:py-3 max-md:px-6 py-2 px-4 rounded-sm font-medium md:mx-3 lg:mx-4 lg:text-[1rem] xl:text-[1.2rem]"
      >Comenzar</a>
    `;

    // Vuelve a fundir con fade-in
    info.style.opacity = 1;
  }

  info.addEventListener('transitionend', onTransitionEnd);
}
