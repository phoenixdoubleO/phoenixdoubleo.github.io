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

// Truly random loading bar
let progress = 0;

function randomFill() {
  if (progress >= 100) {
    loadingScreen.style.display = 'none';
    return;
  }

  // Random increment: bigger variation for visible jumps
  const increment = 2 + Math.random() * 8; // 2–10%
  progress += increment;
  if (progress > 100) progress = 100;

  loadingBar.style.width = progress + '%';

  // Random next step time: 50–250ms
  const nextStep = 50 + Math.random() * 200;

  setTimeout(randomFill, nextStep);
}

// Start loading
randomFill();
</script>
