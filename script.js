const loadingScreen = document.querySelector('.loading-screen');
const loadingBar = document.querySelector('.loading-bar-fill');
const dots = document.querySelector('.dots');

let progress = 0;

// Animate dots (1-3)
let dotCount = 0;
setInterval(() => {
  dotCount = (dotCount + 1) % 4;
  dots.textContent = '.'.repeat(dotCount);
}, 500);

// Truly random loading bar
function randomFill() {
  if (progress >= 100) {
    progress = 100;
    loadingBar.style.width = '100%';
    loadingScreen.style.display = 'none';
    return;
  }

  // Random increment: bigger jumps for visible randomness
  const increment = Math.random() * 15 + 5; // 5–20%
  progress += increment;
  if (progress > 100) progress = 100;

  loadingBar.style.width = progress + '%';

  // Random next tick: 30–150ms
  const nextTick = 30 + Math.random() * 120;
  setTimeout(randomFill, nextTick);
}

// Start loading
randomFill();
