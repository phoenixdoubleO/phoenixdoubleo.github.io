const imageElement = document.getElementById('carouselImage');
const titleElement = document.getElementById('weaponTitle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let images = [];
let currentIndex = 0;

// Load images from JSON
fetch('Weapons/HeroShot/images.json')
  .then(response => response.json())
  .then(data => {
    images = data.map(item => ({
      src: `Weapons/HeroShot/${item.file}`,
      name: item.name
    }));
    updateCarousel();
  })
  .catch(err => console.error('Failed to load images:', err));

function updateCarousel() {
  if (images.length === 0) return;

  imageElement.src = images[currentIndex].src;
  titleElement.textContent = images[currentIndex].name;

  // Left arrow
  if (currentIndex === 0) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }

  // Right arrow
  if (currentIndex === images.length - 1) {
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
  }
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});
