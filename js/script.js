
// =================================
// MUTURI DIGITAL STUDIO
// JavaScript
// =================================

function initializeMobileNavigation() {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    // Stop if this page has no mobile navigation
    if (!menuToggle || !navLinks) return;

    // OPEN AND CLOSE MOBILE MENU
    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        const isOpen = navLinks.classList.contains("show");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });

    // CLOSE MENU AFTER CLICKING A LINK
    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "Open navigation");

        });

    });

}

// RUN AFTER HTML IS READY
if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", initializeMobileNavigation);

} else {

    initializeMobileNavigation();

}
