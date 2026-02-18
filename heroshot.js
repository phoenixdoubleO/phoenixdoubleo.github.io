document.addEventListener("DOMContentLoaded", () => {
  // REQUIRED ELEMENTS
  const img = document.getElementById("carouselImage");
  const title = document.getElementById("weaponTitle");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const checkBtn = document.getElementById("checkButton");

  if (!img || !title || !prevBtn || !nextBtn || !checkBtn || !window.weapons) {
    console.warn("HeroShot JS: Missing elements or weapons array");
    return;
  }

  let index = 0;
  const pageKey = location.pathname + "-checked";

  /* ---------- LOAD STATE ---------- */
  const savedIndex = localStorage.getItem(pageKey + "-index");
  if (savedIndex !== null) index = Number(savedIndex);

  const checked = localStorage.getItem(pageKey) === "true";
  if (checked) {
    checkBtn.style.backgroundImage = "url('checkmark.png')";
  }

  /* ---------- FUNCTIONS ---------- */
  function updateCarousel() {
    img.style.opacity = 0;

    setTimeout(() => {
      img.src = weapons[index].src;
      title.textContent = weapons[index].name;
      img.style.opacity = 1;

      prevBtn.classList.toggle("disabled", index === 0);
      nextBtn.classList.toggle("disabled", index === weapons.length - 1);

      localStorage.setItem(pageKey + "-index", index);
    }, 150);
  }

  function toggleCheck() {
    const isChecked = localStorage.getItem(pageKey) === "true";
    localStorage.setItem(pageKey, (!isChecked).toString());

    checkBtn.style.backgroundImage = !isChecked
      ? "url('checkmark.png')"
      : "none";

    checkBtn.classList.add("pop");
    setTimeout(() => checkBtn.classList.remove("pop"), 300);
  }

  /* ---------- EVENTS ---------- */
  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (index < weapons.length - 1) {
      index++;
      updateCarousel();
    }
  });

  checkBtn.addEventListener("click", toggleCheck);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && index > 0) {
      index--;
      updateCarousel();
    }
    if (e.key === "ArrowRight" && index < weapons.length - 1) {
      index++;
      updateCarousel();
    }
  });

  /* ---------- INIT ---------- */
  img.style.transition = "opacity 0.25s ease";
  updateCarousel();
});
