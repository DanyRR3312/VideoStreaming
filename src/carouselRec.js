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

  const items = getRandomItems(recommendedList, 10); // Cambia 6 por la cantidad que quieras mostrar

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "recommended-card flex-none h-[28rem] w-[18rem] mr-6 bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105";
    div.innerHTML = `
    <div class="img-container w-full h-full relative">
      <img src="${item.img}" alt="${item.title}" class="recommended-img object-cover transition-all duration-300" />
      <div class="recommended-title-overlay transition-all duration-300">
        <h3 class="text-xl font-bold">${item.title}</h3>
        <p class="text-sm">${item.sub}</p>
      </div>
      <div class="recommended-desc flex flex-col">
        <h3 class="font-semibold text-sm mb-2">${item.title}</h3>
        <span class="text-sm">${item.desc}</span>
        <a href="${item.link}" class="btn-comenzar flex content-center bg-black text-white py-2 px-4 text-sm rounded-md absolute left-4 bottom-4"><img src="assets/play.svg" alt="play" class="mr-2"> ${item.start}</a>
      </div>
    </div>
  `;
    container.appendChild(div);
  });

  const prevBtn = document.getElementById("prevBtn-Rec");
  const nextBtn = document.getElementById("nextBtn-Rec");

  // El scroll por tarjeta (ajusta el valor si cambias el ancho de las tarjetas)
  const cardWidth = 18 * 16 + 24; // 18rem * 16px + mr-6 (1.5rem * 16px)

  prevBtn.onclick = () => {
    container.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };
  nextBtn.onclick = () => {
    container.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

}