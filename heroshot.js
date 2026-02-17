const images = [
  { src: 'Weapons/HeroShot/image1.png', name: 'Splattershot' },
  { src: 'Weapons/HeroShot/image2.png', name: 'Splat Roller' },
  { src: 'Weapons/HeroShot/image3.png', name: 'Charger' },
  { src: 'Weapons/HeroShot/image4.png', name: 'Blaster' }
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

  prevBtn.classList.toggle('disabled', currentIndex === 0);
  nextBtn.classList.toggle('disabled', currentIndex === images.length - 1);
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < images.length - 1) currentIndex++;
  updateCarousel();
});

updateCarousel();
