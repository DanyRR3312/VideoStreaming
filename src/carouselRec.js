import { recommendedList } from "./recommendedData.js";

// Devuelve un array con N elementos aleatorios y sin repetir
function getRandomItems(arr, n) {
  const result = [];
  const taken = new Set();
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
  const container = document.getElementById("carousel-rec");
  container.innerHTML = "";

  const items = getRandomItems(recommendedList, 6); // Cambia 6 por la cantidad que quieras mostrar

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "flex-none h-[32rem] w-[22rem] mr-4 bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105";
    div.innerHTML = `
      <div class="w-full h-full">
        <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover">
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold text-white mb-2">${item.title}</h3>
        <p class="text-sm text-gray-400">${item.desc}</p>
        <a href="${item.link}" class="z-20 bottom-0 mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 block text-center">Ver ahora</a>
      </div>
    `;
    container.appendChild(div);
  });
}