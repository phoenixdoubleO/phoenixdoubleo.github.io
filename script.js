const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');
const fill = document.querySelector('.loading-fill');
const loadingText = document.getElementById('loading-text');

let progress = 0;

// Animate dots
let dotCount = 0;
const dotInterval = setInterval(() => {
  dotCount = (dotCount % 3) + 1; // cycles 1 → 2 → 3
  loadingText.textContent = 'Loading' + '.'.repeat(dotCount);
}, 500); // every 0.5s

// Fill loading bar randomly
function randomIncrement() {
  return Math.random() * 15;
}

const loadingInterval = setInterval(() => {
  progress += randomIncrement();
  if (progress > 100) progress = 100;

  fill.style.width = progress + '%';

  if (progress >= 100) {
    clearInterval(loadingInterval);
    clearInterval(dotInterval); // stop the dots animation

    // fade out loader
    loader.style.transition = 'opacity 0.5s ease';
    loader.style.opacity = '0';

    setTimeout(() => {
      loader.style.display = 'none';
      mainContent.style.display = 'block';
    }, 500);
  }
}, 200);
