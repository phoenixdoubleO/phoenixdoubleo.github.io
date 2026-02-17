const toggleButton = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
});
