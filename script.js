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

// Randomized loading bar
let progress = 0;

function randomStep() {
  // Increase progress by random amount (1–3%)
  progress += Math.random() * 3;
  if (progress > 100) progress = 100;
  loadingBar.style.width = progress + '%';

  if (progress < 100) {
    // Call next step after random 20–50ms
    setTimeout(randomStep, 20 + Math.random() * 30);
  } else {
    loadingScreen.style.display = 'none';
  }
}

// Start the loading
randomStep();
</script>
