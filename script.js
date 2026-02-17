// Grab the button and sidebar
const toggleButton = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

// On click, toggle the "closed" class
toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
});
