const images = [
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

// Checkmark image
const checkmarkImage = 'checkmark.png';

// Helper: unique key per weapon for localStorage
function getWeaponKey() {
  return `checked-${weapons[currentIndex].name}`;
}

// Update the check button based on localStorage
function updateCheckButton() {
  const key = getWeaponKey();
  const isChecked = localStorage.getItem(key) === 'true';
  if (isChecked) {
    checkButton.style.backgroundImage = `url('${checkmarkImage}')`;
  } else {
    checkButton.style.backgroundImage = '';
  }
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

// Update carousel image and title
function updateCarousel() {
  const weapon = weapons[currentIndex];
  imageElement.src = weapon.src;
  titleElement.textContent = weapon.name;

  prevBtn.classList.toggle('disabled', currentIndex === 0);
  nextBtn.classList.toggle('disabled', currentIndex === weapons.length - 1);

  updateCheckButton();
}

// Arrow navigation
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < weapons.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// Back button
backButton.addEventListener('click', () => {
  location.href = 'shooters.html'; // change to your main page
});

// Initialize page
updateCarousel();
