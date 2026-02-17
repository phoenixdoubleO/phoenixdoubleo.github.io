// Weapons list
const weapons = [
  { src: 'image1.png', name: 'Hero Shot Replica' }
];

let currentIndex = 0;

// ----- Elements -----
const backButton = document.getElementById('backButton');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageElement = document.getElementById('carouselImage');
const titleElement = document.getElementById('weaponTitle');
const checkButton = document.getElementById('checkButton');

const checkmarkImage = 'checkmark.png'; // Make sure this is in the same folder
let currentIndex = 0;

// ----- Helper functions -----
function getWeaponKey() {
  return `checked-${weapons[currentIndex].name}`;
}

function updateCheckButton() {
  const key = getWeaponKey();
  const isChecked = localStorage.getItem(key) === 'true';
  checkButton.style.backgroundImage = isChecked ? `url('${checkmarkImage}')` : '';
}

// ----- Carousel -----
function setImage(index) {
  const weapon = weapons[index];

  // Fade out
  imageElement.style.opacity = 0;

  setTimeout(() => {
    // Update image and title
    imageElement.src = weapon.src;
    titleElement.textContent = weapon.name;

    // Fade in
    imageElement.style.opacity = 1;

    // Disable arrows at ends
    prevBtn.classList.toggle('disabled', index === 0);
    nextBtn.classList.toggle('disabled', index === weapons.length - 1);

    // Update checkmark
    updateCheckButton();
  }, 200);
}

// ----- Arrow buttons -----
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

// ----- Keyboard navigation -----
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevBtn.click();
  if (e.key === 'ArrowRight') nextBtn.click();
});

// ----- Back button -----
backButton.addEventListener('click', () => {
  window.history.back(); // goes back to shooters.html or previous page
});

// ----- Checkmark button -----
checkButton.addEventListener('click', () => {
  const key = getWeaponKey();
  const isChecked = localStorage.getItem(key) === 'true';
  localStorage.setItem(key, !isChecked ? 'true' : 'false');

  // Pop animation
  checkButton.classList.add('pop');
  setTimeout(() => checkButton.classList.remove('pop'), 300);

  updateCheckButton();
});

// ----- Initialize -----
imageElement.style.transition = 'opacity 0.3s ease';
setImage(currentIndex);
