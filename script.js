const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');
const fill = document.querySelector('.loading-fill');
const splat = document.getElementById('splat');

let progress = 0;

function randomIncrement() {
  return Math.random() * 15; // random speed per step
}

const loadingInterval = setInterval(() => {
  progress += randomIncrement();
  if (progress > 100) progress = 100;

  fill.style.width = progress + '%';

  if (progress >= 100) {
    clearInterval(loadingInterval);

    // fade out loader
    loader.style.transition = 'opacity 0.5s ease';
    loader.style.opacity = '0';

    setTimeout(() => {
      loader.style.display = 'none';
      mainContent.style.display = 'block';

      // fade in splat
      splat.style.opacity = '1';
    }, 500);
  }
}, 200);
