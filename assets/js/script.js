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
        header.classList.add("py-3", "border-b", "border-b-slate-300");
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

});
const displayProjects = (category) => {
    // console.log(category);
    if (category === 'showAll') {
        projectItem.innerHTML = `
            <div class="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
                <div class="border border-[#77777D33] rounded-md shadow-md  ">
                    <img src="/assets/images/exener.png" class="   "/>
                    <div class="px-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Renewable Energy Projects</p>
                        <h3 class="text-lg  text-[#444444] poppins-font my-2">Exener Group</h3>
                        <p class="text-sm font-light">Associated with De Castro Projects | Regenerative Luxury Boutique Hotels</p>
                        <button class="inline-flex items-center gap-2 rounded-full border border-gray-500 mt-3 px-3 py-1 text-sm text-gray-600 hover:text-white focus:relative hover:bg-[#448c74]">
                        <a class='tracking-wider' href='https://www.exener.es/' target='_blank'>Live View</a> <svg
                         xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                         viewBox="0 0 24 24"
                        stroke-width="1.5"
                         stroke="currentColor"
                         class="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </button>
                    </div>
                </div>
                <div class="border border-[#77777D33] rounded-md shadow-md  ">
                    <img src="/assets/images/pilsa.jpeg" class="   "/>
                    <div class="px-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Educational Initiative</p>
                        <h3 class="text-lg text-[#444444] poppins-font my-2">Ptlsa Hospitaly School</h3>
                        <p class="text-sm font-light"> Associated with Pilsa Hospitality Solutions (Hotel projects) </p>
                        <button class="inline-flex items-center gap-2 rounded-full border border-gray-500 mt-3 px-3 py-1 text-sm text-gray-600 hover:text-white focus:relative hover:bg-[#448c74]">
                        <a class='tracking-wider' href='http://pilsaeduca.com/' target='_blank'>Live View</a> <svg
                         xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                         viewBox="0 0 24 24"
                        stroke-width="1.5"
                         stroke="currentColor"
                         class="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </button>
                    </div>
                </div>
                <div class="border border-[#77777D33] rounded-md shadow-md  ">
                    <img src="/assets/images/Young_Talent_Social_Project.png" class="   "/>
                    <div class="px-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Web Application</p>
                        <h3 class="text-lg text-[#444444] poppins-font my-2 font-medium">Global Educational Platforms.</h3>
                                         <p class="text-sm font-light">Commercial and Marketing Director.
Social project to promote young talent.
</p>
                        <button class="inline-flex items-center gap-2 rounded-full border border-gray-500 mt-3 px-3 py-1 text-sm text-gray-600 hover:text-white focus:relative hover:bg-[#448c74]">
                        <a class='tracking-wider' href='http://www.slideshare.net/GlobalIndevices/dossier-prensa-mwc15-v6
' target='_blank'>Live View</a> <svg
                         xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                         viewBox="0 0 24 24"
                        stroke-width="1.5"
                         stroke="currentColor"
                         class="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </button>
                    </div>
                </div>
                <div class="border border-[#77777D33] rounded-md shadow-md  ">
                    <img src="/assets/images/Medicaluxe.webp" class="   "/>
                    <div class="px-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Medicaluxe</p>
                        <h3 class="text-lg text-[#444444] poppins-font my-2 font-medium">Beauty & Health Care</h3>
                                         <p class="text-sm font-light">Distribución de productos dermoestéticos de lujo.</p>
                        <button class="inline-flex items-center gap-2 rounded-full border border-gray-500 mt-3 px-3 py-1 text-sm text-gray-600 hover:text-white focus:relative hover:bg-[#448c74]">
                        <a class='tracking-wider' href='http://www.medicaluxe.com/
' target='_blank'>Live View</a> <svg
                         xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                         viewBox="0 0 24 24"
                        stroke-width="1.5"
                         stroke="currentColor"
                         class="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </button>
                    </div>
                </div>
                <div class="border border-[#77777D33] rounded-md shadow-md  ">
                    <img src="/assets/images/Webinar.jpeg" class="   "/>
                    <div class="px-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Knowledge Sharing / Webinar</p>

<h3 class="text-lg text-[#444444] poppins-font my-2 font-medium">Knowledge is Power!</h3>
                                         <p class="text-sm font-light">Commercial and Marketing Director.
Social project to promote young talent.
</p>
                        <button class="inline-flex items-center gap-2 rounded-full border border-gray-500 mt-3 px-3 py-1 text-sm text-gray-600 hover:text-white focus:relative hover:bg-[#448c74]">
                        <a class='tracking-wider' href='http://www.slideshare.net/GlobalIndevices/dossier-prensa-mwc15-v6' target='_blank'>Live View</a> <svg
                         xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                         viewBox="0 0 24 24"
                        stroke-width="1.5"
                         stroke="currentColor"
                         class="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </button>
                    </div>
                </div>
            </div>
        `;

    } else if (category === 'webApp') {

    }
    else if (category === 'webApp') {
        projectItem.innerHTML = `
            <div class="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
                  <div class="border border-[#77777D33] rounded-md shadow-md  ">
                    <img src="/assets/images/Young_Talent_Social_Project.png" class="   "/>
                    <div class="px-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Web Application</p>
                        <h3 class="text-lg text-[#444444] poppins-font my-2 font-medium">Global Educational Platforms.</h3>
                                         <p class="text-sm font-light">Commercial and Marketing Director.
Social project to promote young talent.
</p>
                        <button class="inline-flex items-center gap-2 rounded-full border border-gray-500 mt-3 px-3 py-1 text-sm text-gray-600 hover:text-white focus:relative hover:bg-[#448c74]">
                        <a class='tracking-wider' href='http://www.slideshare.net/GlobalIndevices/dossier-prensa-mwc15-v6' target='_blank'>Live View</a> <svg
                         xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                         viewBox="0 0 24 24"
                        stroke-width="1.5"
                         stroke="currentColor"
                         class="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </button>
                    </div>
                </div>
               <div class="border border-[#77777D33] rounded-md shadow-md  ">
                    <img src="/assets/images/Medicaluxe.webp" class="   "/>
                    <div class="px-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Medicaluxe</p>
                        <h3 class="text-lg text-[#444444] poppins-font my-2 font-medium">Beauty & Health Care</h3>
                                         <p class="text-sm font-light">Distribución de productos dermoestéticos de lujo.</p>
                        <button class="inline-flex items-center gap-2 rounded-full border border-gray-500 mt-3 px-3 py-1 text-sm text-gray-600 hover:text-white focus:relative hover:bg-[#448c74]">
                        <a class='tracking-wider' href='http://www.medicaluxe.com/
' target='_blank'>Live View</a> <svg
                         xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                         viewBox="0 0 24 24"
                        stroke-width="1.5"
                         stroke="currentColor"
                         class="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </button>
                    </div>
                </div>
            </div>
        `;
    } else if (category === 'webinar') {
        projectItem.innerHTML = `
            <div class="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
                 <div class="border border-[#77777D33] rounded-md shadow-md  ">
                    <img src="/assets/images/Webinar.jpeg" class="   "/>
                    <div class="px-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Knowledge Sharing / Webinar</p>

<h3 class="text-lg text-[#444444] poppins-font my-2 font-medium">Knowledge is Power!</h3>
                                         <p class="text-sm font-light">Commercial and Marketing Director.
Social project to promote young talent.
</p>
                        <button class="inline-flex items-center gap-2 rounded-full border border-gray-500 mt-3 px-3 py-1 text-sm text-gray-600 hover:text-white focus:relative hover:bg-[#448c74]">
                        <a class='tracking-wider' href='http://www.slideshare.net/GlobalIndevices/dossier-prensa-mwc15-v6' target='_blank'>Live View</a> <svg
                         xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                         viewBox="0 0 24 24"
                        stroke-width="1.5"
                         stroke="currentColor"
                         class="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </button>
                    </div>
                </div>
            </div>
        `;
    } else if (category === 'educationalInitiative') {
        projectItem.innerHTML = `
             <div class="border border-[#77777D33] rounded-md shadow-md  ">
                    <img src="/assets/images/pilsa.jpeg" class="   "/>
                    <div class="px-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Educational Initiative</p>
                        <h3 class="text-lg text-[#444444] poppins-font my-2">PILSA HOSPITALITY SCHOOL</h3>
                        <p class="text-sm"> Associated with Pilsa Hospitality Solutions (Hotel projects) </p>
                        <button class="inline-flex items-center gap-2 rounded-full border border-gray-500 mt-3 px-3 py-1 text-sm text-gray-600 hover:text-white focus:relative hover:bg-[#448c74]">
                        <a class='tracking-wider' href='http://pilsaeduca.com/' target='_blank'>Live View</a> <svg
                         xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                         viewBox="0 0 24 24"
                        stroke-width="1.5"
                         stroke="currentColor"
                         class="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </button>
                    </div>
                </div>
        `;
    } else if (category === 'renewableEnergyProjects') {
        projectItem.innerHTML = `
            <div class="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
                  <div class="border border-[#77777D33] rounded-md shadow-md  ">
                    <img src="/assets/images/exener.png" class="   "/>
                    <div class="px-5 pb-5">
                        <p class="poppins-font text-base text-[#444444] mt-2">Renewable Energy Projects</p>
                        <h3 class="text-lg  text-[#444444] poppins-font my-2">Exener Group</h3>
                        <p class="text-sm font-light">Associated with De Castro Projects | Regenerative Luxury Boutique Hotels</p>
                        <button class="inline-flex items-center gap-2 rounded-full border border-gray-500 mt-3 px-3 py-1 text-sm text-gray-600 hover:text-white focus:relative hover:bg-[#448c74]">
                        <a class='tracking-wider' href='https://www.exener.es/' target='_blank'>Live View</a> <svg
                         xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                         viewBox="0 0 24 24"
                        stroke-width="1.5"
                         stroke="currentColor"
                         class="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </button>
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



// Function to toggle visibility and manage "..." and button text
function toggleSlide(slideId, button) {
    const slide = document.getElementById(slideId); // Get the slide element
    const dots = button.previousElementSibling.querySelector('.dots'); // Find the dots element

    if (slide.classList.contains('hidden')) {
        // If hidden, show the extra content and remove dots
        slide.classList.remove('hidden');
        if (dots) dots.classList.add('hidden'); // Hide the dots
        button.innerText = 'See Less'; // Update button text
    } else {
        // If visible, hide the extra content and show dots
        slide.classList.add('hidden');
        if (dots) dots.classList.remove('hidden'); // Show the dots
        button.innerText = 'See More'; // Reset button text
    }
}

// Add event listeners to all toggle buttons
const buttons = document.querySelectorAll('.toggle-btn');
buttons.forEach((button) => {
    const targetId = button.getAttribute('data-target'); // Get the associated slide ID
    button.addEventListener('click', () => {
        toggleSlide(targetId, button);
    });
});
