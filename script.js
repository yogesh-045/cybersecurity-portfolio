// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const sections = document.querySelectorAll(".section");

const revealSections = () => {
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealSections);

revealSections();


// ===============================
// TERMINAL TYPING EFFECT
// ===============================

const terminalSuccess = document.querySelector(".terminal-success");

if (terminalSuccess) {

    const originalText = terminalSuccess.textContent;

    terminalSuccess.textContent = "";

    let index = 0;

    const typeText = () => {

        if (index < originalText.length) {

            terminalSuccess.textContent += originalText.charAt(index);

            index++;

            setTimeout(typeText, 45);
        }
    };

    setTimeout(typeText, 800);
}


// ===============================
// CURRENT YEAR
// ===============================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Yogesh. Built with HTML, CSS & JavaScript.`;
}

// ===============================
// MOBILE NAVBAR
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Close menu after clicking a link

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}