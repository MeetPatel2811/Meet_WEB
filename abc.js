// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed!");

    // Toggle navigation menu for mobile view
    const menuToggle = document.querySelector("#menu-toggle");
    const navLinks = document.querySelector("#nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Smooth scroll for navigation links
    const scrollLinks = document.querySelectorAll("a[href^='#']");
    scrollLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    const dynamicContent = document.querySelector("#dynamic-content");

    if (  dynamicContent) {
        dynamicButton.addEventListener("click", () => {
            dynamicContent.textContent = "You clicked the button! Here's some dynamic content.";
            dynamicContent.classList.add("highlight");
        });
    }
});


