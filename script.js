// Wait until the window fully loads
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('main-content');

  // fade out loader
  loader.style.transition = 'opacity 0.5s ease';
  loader.style.opacity = '0';

  setTimeout(() => {
    loader.style.display = 'none';
    mainContent.style.display = 'block';
  }, 500); // wait 0.5s for fade
});
