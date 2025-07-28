// Cambiar dinamicamente la informacion del Banner : infoBaner.js

import { slideData } from "./contentSlideInfo.js";

export function updateInfo(index) {
    const info = document.getElementById('info');
    const data = slideData[index];

    info.innerHTML = `
        <img src="${data.img}" alt="" />
        <h2 class="my-2 mx-6">${data.title}</h2>
        <p class="mx-6">${data.desc}</p>
        <div id="dotsContainer" class="flex p-4 mx-1"></div>
    `;
}