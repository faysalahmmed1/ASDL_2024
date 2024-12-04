// Add the 'loading' class to the body
document.body.classList.add("loading");

// Wait for the page to fully load
window.addEventListener("load", () => {
    // Remove the loading screen
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.opacity = "0";
    loadingScreen.style.transition = "opacity 0.5s ease";

    // Reveal the main content after the fade-out
    setTimeout(() => {
        loadingScreen.remove();
        document.body.classList.remove("loading");

        // Show the main content
        const mainContent = document.getElementById("main-content");
        mainContent.style.opacity = "1";
    }, 500);
});



const header = document.getElementById("main-header");
const toggle = document.getElementById("toggle");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("py-3", "border-b", "border-b-slate-500");
        header.classList.remove("py-8");
        toggle.classList.add("top-3");
        toggle.classList.remove("top-8");
    } else {
        header.classList.remove("py-3", "border-b", "border-b-slate-500");
        header.classList.add("py-8");
        toggle.classList.add("top-8");
        toggle.classList.remove("top-3");
    }
});
