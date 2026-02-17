const imageElement = document.getElementById('carouselImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let images = [];
let currentIndex = 0;

// Load JSON
fetch('Weapons/HeroShot/images.json')
  .then(response => response.json())
  .then(data => {
    images = data.map(name => `Weapons/HeroShot/${name}`);
    updateCarousel(); // initialize
  })
  .catch(err => console.error('Failed to load images:', err));

function updateCarousel() {
  if (images.length === 0) return;

  imageElement.src = images[currentIndex];

  // Disable left arrow if at start
  if (currentIndex === 0) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }

  // Disable right arrow if at end
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
