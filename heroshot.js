// Weapons list
const weapons = [
  { src: 'image1.png', name: 'Hero Shot Replica' }
];

let currentIndex = 0;

// Elements
const imageElement = document.getElementById('carouselImage');
const titleElement = document.getElementById('weaponTitle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const checkButton = document.getElementById('checkButton');
const backButton = document.getElementById('backButton');

const checkmarkImage = 'checkmark.png';

// Unique key per weapon for storage
function getWeaponKey() {
  return `checked-${weapons[currentIndex].name}`;
}

// Update check button based on localStorage
function updateCheckButton() {
  const key = getWeaponKey();
  const isChecked = localStorage.getItem(key) === 'true';
  checkButton.style.backgroundImage = isChecked ? `url('${checkmarkImage}')` : '';
}

// Toggle checkmark
checkButton.addEventListener('click', () => {
  const key = getWeaponKey();
  const isChecked = localStorage.getItem(key) === 'true';
  localStorage.setItem(key, !isChecked ? 'true' : 'false');

  // Pop animation
  checkButton.classList.add('pop');
  setTimeout(() => checkButton.classList.remove('pop'), 300);

  updateCheckButton();
});

// Function to smoothly change carousel images
function setImage(index) {
  const newSrc = weapons[index].src;

  // Fade out
  imageElement.style.opacity = 0;
  setTimeout(() => {
    imageElement.src = newSrc;
    titleElement.textContent = weapons[index].name;

    // Fade in
    imageElement.style.opacity = 1;
  }, 200);

  prevBtn.classList.toggle('disabled', index === 0);
  nextBtn.classList.toggle('disabled', index === weapons.length - 1);

  updateCheckButton();
}

// Arrow navigation
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    setImage(currentIndex);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < weapons.length - 1) {
    currentIndex++;
    setImage(currentIndex);
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevBtn.click();
  if (e.key === 'ArrowRight') nextBtn.click();
});

// Back button
backButton.addEventListener('click', () => {
  window.history.back(); // or location.href = 'shooters.html';
});

// Initialize carousel
imageElement.style.transition = 'opacity 0.3s ease'; // fade effect
setImage(currentIndex);