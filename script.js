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

function randomFill() {
  // Increase progress by random amount (1–6%)
  progress += Math.random() * 6;
  if (progress > 100) progress = 100;
  loadingBar.style.width = progress + '%';

  if (progress < 100) {
    // Random next step between 20–80ms
    setTimeout(randomFill, 20 + Math.random() * 60);
  } else {
    // Fully loaded
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 200); // small delay before hiding
  }
}

// Start loading
randomFill();
</script>
