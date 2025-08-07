// carouselRec.js : Carrusel para elementos recomendados

import { recommendedList } from './recommendedData.js';

function getRandomItems(arr, n) {
  const result = [];
  const taken  = new Set();
  while (result.length < n && result.length < arr.length) {
    const idx = Math.floor(Math.random() * arr.length);
    if (!taken.has(idx)) {
      result.push(arr[idx]);
      taken.add(idx);
    }
  }
  return result;
}


export function renderRecommended() {
  const container = document.getElementById('carousel-rec');
  container.innerHTML = '';

  const items = getRandomItems(recommendedList, 10);

  items.forEach(item => {
    const div = document.createElement('div');
    div.className =
      'recommended-card flex-none bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 ' +
      'max-md:h-[16rem] max-md:w-[10rem] max-md:mr-3 ' +
      'md:h-[18rem] md:w-[12rem] md:mr-4 ' +
      'lg:mr-6 lg:h-[22rem] lg:w-[14rem] ' +
      'xl:h-[24rem] xl:w-[16rem]';
    div.innerHTML = `
      <div class="img-container w-full h-full relative">
        <img src="${item.img}" alt="${item.title}"
             class="recommended-img object-cover transition-all duration-300" />
        <div
          class="recommended-title-overlay transition-all duration-300
                 max-md:px-1 max-md:py-2 md:py-[0.75rem] md:px-2">
          <h3 class="line-clamp-1 max-md:text-sm xl:text-base font-bold">
            ${item.title}
          </h3>
          <p class="text-sm max-md:text-xs">${item.sub}</p>
        </div>
        <div class="recommended-desc flex flex-col">
          <h3 class="font-semibold text-sm mb-2">${item.title}</h3>
          <span class="text-sm max-lg:line-clamp-6 max-xl:line-clamp-10">
            ${item.desc}
          </span>
          <a href="${item.link}"
             class="btn-comenzar flex content-center bg-black text-white
                    hover:bg-white hover:text-black py-2 px-3 text-sm
                    rounded-md absolute left-3 bottom-4">
            <img src="src/assets/play.svg" alt="play" class="mr-2">
            ${item.start}
          </a>
        </div>
      </div>
    `;

    if (window.innerWidth < 768) {
      div.querySelector('.recommended-desc').style.display = 'none';
      div.querySelector('.recommended-img').style.filter   = 'none';
      div.querySelector('.recommended-img').style.transform= 'none';
      div.classList.remove('hover:scale-105');
      div.querySelector('.recommended-title-overlay').style.opacity        = '1';
      div.querySelector('.recommended-title-overlay').style.pointerEvents   = 'auto';
      div.onclick = () => window.location.href = item.link;
    }

    container.appendChild(div);
  });

  const prevBtn = document.getElementById('prevBtn-Rec');
  const nextBtn = document.getElementById('nextBtn-Rec');

  function getCardWidth() {
    if (window.innerWidth >= 1800) return 18 * 16 + 24;
    else if (window.innerWidth >= 1280) return 16 * 16 + 24;
    else if (window.innerWidth >= 1024) return 14 * 16 + 24;
    else if (window.innerWidth >= 768)  return 12 * 16 + 16;
    return 10 * 16 + 12;
  }

  prevBtn.onclick = () => {
    container.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
  };
  nextBtn.onclick = () => {
    container.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
  };
}
