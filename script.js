const fill = document.getElementById("progressFill");
const text = document.getElementById("progressText");
const loader = document.getElementById("loader");
const content = document.getElementById("main-content");

let progress = 0;

const interval = setInterval(() => {
    progress++;

    fill.style.width = `${progress}%`;
    text.textContent = `${progress}%`;

    if (progress >= 100) {
        clearInterval(interval);
        loader.style.display = "none";
        content.style.transform = "translateY(0)";
    }
}, 30);
