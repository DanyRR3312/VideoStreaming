// Cambiar dinamicamente la informacion del Banner : infoBaner.js

import { slideData } from "./contentSlideInfo.js";

export function updateInfo(index) {
    const info = document.getElementById('info');
    const data = slideData[index];

    info.innerHTML = `
        <img src="${data.img}" alt="" class="md:w-[15rem] lg:w-[20rem] xl:w-[25rem] 2xl:w-full" />
        <h2 class="md:mx-3 md:my-2 lg:flex lg:my-2 lg:mx-6 xl:text-[1.1rem] 2xl:text-lg">${data.title}</h2>
        <p class="md:mx-3 md:line-clamp-4 lg:flex lg:mx-6 lg:text-[1rem] xl:text-[1.1rem] 2xl:text-lg">${data.desc}</p>
        <div id="dotsContainer" class="flex p-4 mx-1"></div>
        <a href="${data.page}" id="btn-banner" class="py-2 px-4 rounded-sm font-medium md:mx-3 lg:mx-6 lg:text-[1rem] xl:text-[1.2rem] ">Comenzar</a>
    `;
}