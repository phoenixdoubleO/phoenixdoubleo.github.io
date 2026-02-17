const images = [
  { src: 'Weapons/HeroShot/image1.png', name: 'Splattershot' },
  { src: 'Weapons/HeroShot/image2.png', name: 'Splat Roller' },
  { src: 'Weapons/HeroShot/image3.png', name: 'Charger' },
  { src: 'Weapons/HeroShot/image4.png', name: 'Blaster' },
  { src: 'Weapons/HeroShot/image5.png', name: 'Hero Shot V' }
];

let currentIndex = 0;

const imageElement = document.getElementById('carouselImage');
const titleElement = document.getElementById('weaponTitle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateCarousel() {
  const current = images[currentIndex];
  imageElement.src = current.src;
  titleElement.textContent = current.name;

  // Update arrow states
  prevBtn.classList.toggle('disabled', currentIndex === 0);
  nextBtn.classList.toggle('disabled', currentIndex === images.length - 1);
}

// Arrow click events
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

// Initialize carousel
updateCarousel();
