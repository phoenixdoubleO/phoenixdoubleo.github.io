document.addEventListener("DOMContentLoaded", () => {
  if (!window.weapons || !Array.isArray(window.weapons)) {
    console.warn("No weapons array found on this page.");
    return;
  }

  const img = document.getElementById("carouselImage");
  const title = document.getElementById("weaponTitle");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const checkBtn = document.getElementById("checkButton");

  if (!img || !title || !prevBtn || !nextBtn || !checkBtn) {
    console.warn("Missing carousel elements.");
    return;
  }

  let index = 0;
  const pageKey = location.pathname;

  /* ---------- LOAD SAVED STATE ---------- */
  const savedIndex = localStorage.getItem(pageKey + ":index");
  if (savedIndex !== null) index = Number(savedIndex);

  const savedCheck = localStorage.getItem(pageKey + ":checked") === "true";
  if (savedCheck) {
    checkBtn.style.backgroundImage = "url('checkmark.png')";
  }

  /* ---------- FUNCTIONS ---------- */
  function updateCarousel() {
    img.style.opacity = "0";

    setTimeout(() => {
      img.src = weapons[index].src;
      title.textContent = weapons[index].name;
      img.style.opacity = "1";

      prevBtn.classList.toggle("disabled", index === 0);
      nextBtn.classList.toggle("disabled", index === weapons.length - 1);

      localStorage.setItem(pageKey + ":index", index);
    }, 150);
  }

  function toggleCheck() {
    const checked = localStorage.getItem(pageKey + ":checked") === "true";
    localStorage.setItem(pageKey + ":checked", (!checked).toString());

    checkBtn.style.backgroundImage = checked
      ? "none"
      : "url('checkmark.png')";

    checkBtn.classList.add("pop");
    setTimeout(() => checkBtn.classList.remove("pop"), 250);
  }

  /* ---------- EVENTS ---------- */
  prevBtn.onclick = () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  };

  nextBtn.onclick = () => {
    if (index < weapons.length - 1) {
      index++;
      updateCarousel();
    }
  };

  checkBtn.onclick = toggleCheck;

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
