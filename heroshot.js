const images = [
  { src: 'image1.png', name: 'Hero Shot Replica' }
];

let currentIndex = 0;

const imageElement = document.getElementById('carouselImage');
const titleElement = document.getElementById('weaponTitle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const checkButton = document.getElementById('checkButton');
const backButton = document.getElementById('backButton');

const checkImage = 'checkmark.png';
const emptyImage = '';

// ==========================
// Unique key per weapon
// ==========================
function getWeaponKey() {
  return `checked-${images[currentIndex].name}`;
}

// ==========================
// Update check button
// ==========================
function updateCheckButton() {
  const key = getWeaponKey();
  const isChecked = localStorage.getItem(key) === 'true';

  if (isChecked) {
    checkButton.style.backgroundImage = `url('${checkImage}')`;
    checkButton.classList.add('pop');
    setTimeout(() => checkButton.classList.remove('pop'), 300);
  } else {
    checkButton.style.backgroundImage = emptyImage;
  }
}

// ==========================
// Toggle checkmark
// ==========================
checkButton.addEventListener('click', () => {
  const key = getWeaponKey();
  const isChecked = localStorage.getItem(key) === 'true';
  localStorage.setItem(key, !isChecked ? 'true' : 'false');
  updateCheckButton();
});

// ==========================
// Update carousel
// ==========================
function updateCarousel() {
  const current = images[currentIndex];
  imageElement.src = current.src;
  titleElement.textContent = current.name;

  prevBtn.classList.toggle('disabled', currentIndex === 0);
  nextBtn.classList.toggle('disabled', currentIndex === images.length - 1);

  updateCheckButton();
}

// ==========================
// Arrow click events
// ==========================
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

// ==========================
// Back button event
// ==========================

const backButton = document.getElementById('backButton');

backButton.addEventListener('click', () => {
  // Go back to previous page
  window.history.back();
  // OR if you want a fixed page:
  // location.href = 'shooters.html';
});

// ==========================
// Initialize
// ==========================
updateCarousel();