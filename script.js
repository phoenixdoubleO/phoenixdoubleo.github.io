<script>
const loadingScreen = document.querySelector('.loading-screen'); // your loading overlay
const loadingBar = document.querySelector('.loading-bar-fill');   // the fill inside

// Check if the page has been visited in this session
let isFirstLoad = !sessionStorage.getItem('visited');

if (isFirstLoad) {
    sessionStorage.setItem('visited', 'true'); // mark as visited

    // Full loading duration (example: 3 seconds)
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1; // adjust speed
        loadingBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            loadingScreen.style.display = 'none';
        }
    }, 30); // 30ms per step = ~3 seconds total
} else {
    // Short loading duration (example: 0.5 seconds)
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5; // faster
        loadingBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            loadingScreen.style.display = 'none';
        }
    }, 10); // 10ms per step = ~0.5 seconds
}
</script>
