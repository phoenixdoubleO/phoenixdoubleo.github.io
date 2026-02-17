const images = [
  { src: 'image1.png', name: 'Hero Shot Replica' }
];

let currentIndex = 0;

// DOM elements
const imageElement = document.getElementById('carouselImage');
const titleElement = document.getElementById('weaponTitle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const checkButton = document.getElementById('checkButton');

// Checkmark image (place in main repo)
const checkImage = 'checkmark.png';
const emptyImage = ''; // no image when unchecked

// ==========================
// Helper: unique key per weapon
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
    checkButton.classList.add('pop'); // trigger pop animation
    // remove pop class so next toggle can animate again
    setTimeout(() => checkButton.classList.remove('pop'), 300);
  } else {
    checkButton.style.backgroundImage = emptyImage;
  }
}

// ==========================
// Toggle checkmark on click
// ==========================
checkButton.addEventListener('click', () => {
  const key = getWeaponKey();
  const isChecked = localStorage.getItem(key) === 'true';

  localStorage.setItem(key, !isChecked ? 'true' : 'false');
  updateCheckButton();
});

// ==========================
// Carousel update function
// ==========================
function updateCarousel() {
  const current = images[currentIndex];
  imageElement.src = current.src;
  titleElement.textContent = current.name;

  prevBtn.classList.toggle('disabled', currentIndex === 0);
  nextBtn.classList.toggle('disabled', currentIndex === images.length - 1);

  // Update checkmark for current weapon
  updateCheckButton();
}

// ==========================
// Arrow button click events
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
// Initialize carousel on page load
// ==========================
updateCarousel();
