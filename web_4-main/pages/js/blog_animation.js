const light = document.querySelector('.light');
const grid = document.querySelector('.hex-grid');
const container = document.querySelector('.container');

container.addEventListener('mousemove', moveLight);

function moveLight(e) {
    const scrolly = document.documentElement.scrollTop;
    light.style.left = `${e.clientX}px`; 
    light.style.top = `${e.clientY + scrolly}px`;
} 