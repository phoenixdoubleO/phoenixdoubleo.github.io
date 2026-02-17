const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');
const fill = document.querySelector('.loading-fill');

let progress = 0;

function randomIncrement() {
  return Math.random() * 15; // random step between 0 and 15%
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
    }, 500);
  }
}, 200); // update every 0.2s
