// Weapons list
const weapons = [
  { src: 'image1.png', name: 'Hero Shot Replica' }
];

let currentIndex = 0;

// ----- Elements -----
document.addEventListener('DOMContentLoaded', () => {
  // Check if carousel exists on this page
  const imageElement = document.getElementById('carouselImage');
  const titleElement = document.getElementById('weaponTitle');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const checkButton = document.getElementById('checkButton');
  const backButton = document.getElementById('backButton');

  if (!imageElement || !titleElement || !prevBtn || !nextBtn || !checkButton || !backButton) {
    // If any element is missing, stop running
    return;
  }

  const checkmarkImage = 'checkmark.png'; // Make sure this is in the same folder
  let currentIndex = 0;

  // LocalStorage key for each weapon
  function getWeaponKey() {
    return `checked-${weapons[currentIndex].name}`;
  }

  function updateCheckButton() {
    const key = getWeaponKey();
    const isChecked = localStorage.getItem(key) === 'true';
    checkButton.style.backgroundImage = isChecked ? `url('${checkmarkImage}')` : '';
  }

  // Back button
  backButton.addEventListener('click', () => {
    window.history.back(); // or location.href = 'shooters.html';
  });

  // Checkmark toggle
  checkButton.addEventListener('click', () => {
    const key = getWeaponKey();
    const isChecked = localStorage.getItem(key) === 'true';
    localStorage.setItem(key, !isChecked ? 'true' : 'false');

    // Pop animation
    checkButton.classList.add('pop');
    setTimeout(() => checkButton.classList.remove('pop'), 300);

    updateCheckButton();
  });

  // Carousel image update with fade
  function setImage(index) {
    const weapon = weapons[index];
    imageElement.style.opacity = 0;

    setTimeout(() => {
      imageElement.src = weapon.src;
      titleElement.textContent = weapon.name;
      imageElement.style.opacity = 1;

      prevBtn.classList.toggle('disabled', index === 0);
      nextBtn.classList.toggle('disabled', index === weapons.length - 1);

      updateCheckButton();
    }, 200);
  }

  // Arrow buttons
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

  // Initialize
  imageElement.style.transition = 'opacity 0.3s ease';
  setImage(currentIndex);
});