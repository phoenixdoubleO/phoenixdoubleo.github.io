const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');
const fill = document.querySelector('.loading-fill');

let progress = 0;

// Simulate loading progress
const loadingInterval = setInterval(() => {
  progress += Math.random() * 10; // increase randomly for effect
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
