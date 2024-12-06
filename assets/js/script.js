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

// 
function setActive(activeId) {
    // Get all the <p> elements and reset their active state
    const allPElements = document.querySelectorAll('ul p');
    allPElements.forEach(p => {
        // Hide underline and reset the active color
        const span = p.querySelector('span');
        if (span) {
            span.classList.add('opacity-0'); // Hide underline
        }
        p.classList.remove('text-[#448C74]'); // Remove active color
        p.classList.remove('border-b-green-500'); // Remove active color
        p.classList.remove('border-b-2'); // Remove active color
    });

    // Find the clicked <p> element and set it as active
    const activeElement = document.getElementById(activeId);
    const activeSpan = activeElement.querySelector('span');
    if (activeSpan) {
        activeSpan.classList.remove('opacity-0'); // Show underline
        activeSpan.classList.add('opacity-100'); // Make underline visible
    }
    activeElement.classList.add('text-[#448C74]'); // Add active color
    activeElement.classList.add('border-b-green-500'); // Add active color
    activeElement.classList.add('border-b-2'); // Add active color
}
// 

const projectItem = document.getElementById("projectItem");
const div = document.createElement('div');
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('showAll').click();
})
const displayProjects = (category) => {
    // console.log(category);
    if (category === 'showAll') {
        projectItem.innerHTML = `
            <div class="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
                <div class="border border-[#77777D33] rounded-md shadow-md w-80">
                    <img src="/assets/images/exener.png" class="w-80 h-52"/>
                    <div class="pl-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Renewable Energy Projects</p>
                        <h3 class="text-lg  text-[#444444] poppins-font my-2">Exener Group</h3>

                    </div>
                </div>
                <div class="border border-[#77777D33] rounded-md shadow-md w-80">
                    <img src="/assets/images/pilsa.jpeg" class="w-80 h-52"/>
                    <div class="pl-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Educational Initiative</p>
                        <h3 class="text-lg text-[#444444] poppins-font my-2">Hospitality training and community development program.</h3>

                    </div>
                </div>
                <div class="border border-[#77777D33] rounded-md shadow-md w-80">
                    <img src="/assets/images/Young_Talent_Social_Project.png" class="w-80 h-52"/>
                    <div class="pl-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Web Application</p>
                        <h3 class="text-lg text-[#444444] poppins-font my-2 font-medium">Social project promoting young talent through technological and educational platforms.</h3>

                    </div>
                </div>
                <div class="border border-[#77777D33] rounded-md shadow-md w-80">
                    <img src="/assets/images/Medicaluxe.webp" class="w-80 h-52"/>
                    <div class="pl-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Medicaluxe</p>
                        <h3 class="text-lg text-[#444444] poppins-font my-2 font-medium">Focused on SPAs and medical clinics.</h3>

                    </div>
                </div>
                <div class="border border-[#77777D33] rounded-md shadow-md w-80">
                    <img src="/assets/images/Webinar.jpeg" class="w-80 h-52"/>
                    <div class="pl-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Knowledge Sharing / Webinar</p>
                        <h3 class="text-lg text-[#444444] poppins-font my-2 font-medium">Educational and industry insights. Ecotourism and sustainable luxury in a post-pandemic world.</h3>

                    </div>
                </div>
            </div>
        `;
    }
    else if (category === 'webApp') {
        projectItem.innerHTML = `
            <div class="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
                 <div class="border border-[#77777D33] rounded-md shadow-md w-80">
                    <img src="/assets/images/Young_Talent_Social_Project.png" class="w-80 h-52"/>
                    <div class="pl-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Web Application</p>
                        <h3 class="text-lg text-[#444444] poppins-font my-2 font-medium">Social project promoting young talent through technological and educational platforms.</h3>

                    </div>
                </div>
                <div class="border border-[#77777D33] rounded-md shadow-md w-80">
                    <img src="/assets/images/Medicaluxe.webp" class="w-80 h-52"/>
                    <div class="pl-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Medicaluxe</p>
                        <h3 class="text-lg text-[#444444] poppins-font my-2 font-medium">Focused on SPAs and medical clinics.</h3>

                    </div>
                </div>
            </div>
        `;
    }
    else if (category === 'webinar') {
        projectItem.innerHTML = `
            <div class="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
                 <div class="border border-[#77777D33] rounded-md shadow-md w-80">
                    <img src="/assets/images/Webinar.jpeg" class="w-80 h-52"/>
                    <div class="pl-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Knowledge Sharing / Webinar</p>
                        <h3 class="text-lg text-[#444444] poppins-font my-2 font-medium">Educational and industry insights. Ecotourism and sustainable luxury in a post-pandemic world.</h3>

                    </div>
                </div>
            </div>
        `;
    }
    else if (category === 'educationalInitiative') {
        projectItem.innerHTML = `
            <div class="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
                <div class="border border-[#77777D33] rounded-md shadow-md w-80">
                    <img src="/assets/images/pilsa.jpeg" class="w-80 h-52"/>
                    <div class="pl-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Educational Initiative</p>
                        <h3 class="text-lg text-[#444444] poppins-font my-2">Hospitality training and community development program.</h3>

                    </div>
                </div>
            </div>
        `;
    }
    else if (category === 'renewableEnergyProjects') {
        projectItem.innerHTML = `
            <div class="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
                 <div class="border border-[#77777D33] rounded-md shadow-md w-80">
                    <img src="/assets/images/exener.png" class="w-80 h-52"/>
                    <div class="pl-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Renewable Energy Projects</p>
                        <h3 class="text-lg  text-[#444444] poppins-font my-2">Exener Group</h3>

                    </div>
                </div>
            </div>
        `;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        spaceBetween: 20,
        slidesPerView: 1,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        },
    });
});


// Map
const toggleButton = document.getElementById('toggle-button');
const mapContainer = document.getElementById('map-container');

toggleButton.addEventListener('click', () => {
    if (mapContainer.classList.contains('hidden')) {
        mapContainer.classList.remove('hidden');
        toggleButton.textContent = 'Hide Map';
    } else {
        mapContainer.classList.add('hidden');
        toggleButton.textContent = 'View My Live Map Location';
    }
});