const images = [
  { src: 'image1.png', name: 'Hero Shot Replica' }
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

const checkButton = document.getElementById('checkButton');

// Function to generate a unique key for each weapon
function getWeaponKey() {
  return `checked-${images[currentIndex].name}`;
}

// Initialize button state on load
function updateCheckButton() {
  if (localStorage.getItem(getWeaponKey()) === 'true') {
    checkButton.textContent = 'Checked ✅';
    checkButton.style.backgroundColor = '#8BC34A'; // green
  } else {
    checkButton.textContent = 'Mark as Checked ✅';
    checkButton.style.backgroundColor = '#FFD700'; // yellow
  }
}

// Handle button click
checkButton.addEventListener('click', () => {
  const key = getWeaponKey();
  const isChecked = localStorage.getItem(key) === 'true';

  if (!isChecked) {
    localStorage.setItem(key, 'true');
  } else {
    localStorage.setItem(key, 'false');
  }

  updateCheckButton();
});

// Update button every time the carousel changes
function updateCarousel() {
  const current = images[currentIndex];
  imageElement.src = current.src;
  titleElement.textContent = current.name;

  prevBtn.classList.toggle('disabled', currentIndex === 0);
  nextBtn.classList.toggle('disabled', currentIndex === images.length - 1);

  // Update check button for current weapon
  updateCheckButton();
}
