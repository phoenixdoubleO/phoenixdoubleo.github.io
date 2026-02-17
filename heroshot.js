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

// Function to generate unique key per weapon
function getWeaponKey() {
  return `checked-${images[currentIndex].name}`;
}

// Update button appearance based on localStorage
function updateCheckButton() {
  if (localStorage.getItem(getWeaponKey()) === 'true') {
    checkButton.classList.add('checked'); // show yellow checkmark
  } else {
    checkButton.classList.remove('checked'); // hide checkmark
  }
}

// Toggle checkmark on click
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

// Make sure checkmark updates whenever the carousel changes
function updateCarousel() {
  const current = images[currentIndex];
  imageElement.src = current.src;
  titleElement.textContent = current.name;

  prevBtn.classList.toggle('disabled', currentIndex === 0);
  nextBtn.classList.toggle('disabled', currentIndex === images.length - 1);

  updateCheckButton(); // update for current weapon
}
