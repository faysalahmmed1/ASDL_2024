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


// Scroller
document.querySelectorAll('.scroller').forEach((scroller) => {
    const speed = scroller.getAttribute('data-speed') || '100s';
    const direction = scroller.getAttribute('data-direction') || 'left';

    const inner = scroller.querySelector('.scroller__inner');
    inner.style.animationDuration = speed;
    inner.style.animationDirection = direction === 'left' ? 'normal' : 'reverse';
});


const projectItem = document.getElementById("projectItem");
const div = document.createElement('div');
const displayProjects = (category) => {
    // console.log(category);
    if (category === 'showAll') {
        projectItem.innerHTML = `
            <div class="grid md:grid-cols-2 lg:grid-cols-3">
                <div class="border border-[#77777D33] rounded-md shadow-md w-96">
                    <img src="/assets/images/exener.png" class="w-96 h-52"/>
                    <div class="pl-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Renewable Energy Projects</p>
                        <h3 class="text-xl poppins-font mb-2">Exener Group</h3>

                    </div>
                </div>
                <div class="border border-[#77777D33] rounded-md shadow-md w-96">
                    <img src="/assets/images/pilsa.jpeg" class="w-96 h-52"/>
                    <div class="pl-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Educational Initiative</p>
                        <h3 class="text-xl poppins-font mb-2">Hospitality training and community development program.</h3>

                    </div>
                </div>
                <div class="border border-[#77777D33] rounded-md shadow-md w-96">
                    <img src="/assets/images/Young_Talent_Social_Project.png" class="w-96 h-52"/>
                    <div class="pl-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Web Application</p>
                        <h3 class="text-xl poppins-font mb-2">Social project promoting young talent through technological and educational platforms.</h3>

                    </div>
                </div>
            </div>
        `;
    }
    else if (category === 'webApp') {
        projectItem.innerHTML = `
            <div>
                <p>Web Application</p>
            </div>
        `;
    }
    else if (category === 'educationalInitiative') {
        projectItem.innerHTML = `
            <div>
                <p>Educational Initiative</p>
            </div>
        `;
    }
    else if (category === 'renewableEnergyProjects') {
        projectItem.innerHTML = `
            <div>
                <p>Renewable Energy Projects</p>
            </div>
        `;
    }
}