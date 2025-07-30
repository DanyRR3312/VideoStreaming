// Logica para el carrusel : carousel.js 

import { slideData } from './contentSlideInfo.js';
import { updateInfo } from './infoBanner.js';

const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

let currentIndex = 0;
let autoPlayInterval;

function showImage(index) {

    carouselItems.forEach(item => item.classList.remove('active'));
    carouselItems[index].classList.add('active');
    updateDots(index);
    updateInfo(index);

}

function updateDots(index) {

    dotsContainer.innerHTML = '';

    carouselItems.forEach((_, i) => {

        const dot = document.createElement('span');
        dot.classList.add('dot');

        if (i === index) dot.classList.add('active');

        dot.addEventListener('click', () => {
            currentIndex = i;
            showImage(currentIndex);
            resetAutoPlay();
        });

        dotsContainer.appendChild(dot);
    });

}

function startAutoPlay() {

    autoPlayInterval = setInterval(() => {

        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);

    }, 10000);

}

function resetAutoPlay() {

    clearInterval(autoPlayInterval);
    startAutoPlay();

}

prevBtn.addEventListener('click', () => {

    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    showImage(currentIndex);
    resetAutoPlay();

});

nextBtn.addEventListener('click', () => {

    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
    resetAutoPlay();

});

export function initCarousel() {

    showImage(currentIndex);
    startAutoPlay();

}