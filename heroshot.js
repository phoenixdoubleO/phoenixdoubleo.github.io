const images = [
  { src: 'image1.png', name: 'Hero Shot Replica' }
];

let currentIndex = 0;

const imageElement = document.getElementById('carouselImage');
const titleElement = document.getElementById('weaponTitle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const checkButton = document.getElementById('checkButton');

const checkImage = 'checkmark.png'; // Put this in the main repo
const emptyImage = ''; // no image for unchecked

// Function to generate unique key per weapon
function getWeaponKey() {
  return `checked-${images[currentIndex].name}`;
}

// Update check button appearance
function updateCheckButton() {
  const key = getWeaponKey();
  const isChecked = localStorage.getItem(key) === 'true';

  if (isChecked) {
    checkButton.style.backgroundImage = `url('${checkImage}')`;
    checkButton.classList.add('pop'); // trigger pop animation
    // remove pop class after animation ends so it can pop again
    setTimeout(() => checkButton.classList.remove('pop'), 300);
  } else {
    checkButton.style.backgroundImage = emptyImage;
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

// Update carousel and check button
function updateCarousel() {
  const current = images[currentIndex];
  imageElement.src = current.src;
  titleElement.textContent = current.name;

  prevBtn.classList.toggle('disabled', currentIndex === 0);
  nextBtn.classList.toggle('disabled', currentIndex === images.length - 1);

  updateCheckButton();
}

// Arrow button click events
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
