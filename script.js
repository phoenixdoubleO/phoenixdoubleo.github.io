<script>
const loadingScreen = document.querySelector('.loading-screen');
const loadingBar = document.querySelector('.loading-bar-fill');
const dots = document.querySelector('.dots');

// Animate dots (1-3)
let dotCount = 0;
setInterval(() => {
  dotCount = (dotCount + 1) % 4;
  dots.textContent = '.'.repeat(dotCount);
}, 500);

// Full loading animation every time (~3s)
let progress = 0;
const interval = setInterval(() => {
  progress += 1; // adjust speed
  loadingBar.style.width = progress + '%';
  if (progress >= 100) {
    clearInterval(interval);
    loadingScreen.style.display = 'none';
  }
}, 30); // 30ms per step = ~3 seconds total
</script>
