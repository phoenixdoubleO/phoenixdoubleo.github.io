// List of images in order from Weapons/HeroShot
const images = [
  'Weapons/HeroShot/HSR.png',
  'Weapons/HeroShot/image2.png',
  'Weapons/HeroShot/image3.png',
  'Weapons/HeroShot/image4.png'
];

let currentIndex = 0;

const imageElement = document.getElementById('carouselImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateCarousel() {
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

// Initialize
updateCarousel();
