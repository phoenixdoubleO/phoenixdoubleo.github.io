alert("heroshot.js LOADED");

document.addEventListener('DOMContentLoaded', () => {
  if (!window.weapons) {
    console.warn('No weapons array found');
    return;
  }

  const backButton = document.getElementById('backButton');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const imageElement = document.getElementById('carouselImage');
  const titleElement = document.getElementById('weaponTitle');
  const checkButton = document.getElementById('checkButton');

  if (!prevBtn || !nextBtn || !imageElement || !titleElement || !checkButton) {
    console.warn('Missing required elements');
    return;
  }

  const checkmarkImage = 'checkmark.png';
  let currentIndex = 0;

  function getWeaponKey() {
    return `checked-${weapons[currentIndex].name}`;
  }

  function updateCheckButton() {
    const key = getWeaponKey();
    const isChecked = localStorage.getItem(key) === 'true';
    checkButton.style.backgroundImage = isChecked
      ? `url('${checkmarkImage}')`
      : '';
  }

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

  // Back button
  if (backButton) {
    backButton.addEventListener('click', () => {
      history.back();
    });
  }

  // Checkbox
  checkButton.addEventListener('click', () => {
    const key = getWeaponKey();
    const isChecked = localStorage.getItem(key) === 'true';
    localStorage.setItem(key, isChecked ? 'false' : 'true');

    checkButton.classList.add('pop');
    setTimeout(() => checkButton.classList.remove('pop'), 300);

    updateCheckButton();
  });

  // Arrows
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

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });

  imageElement.style.transition = 'opacity 0.3s ease';
  setImage(currentIndex);
});
