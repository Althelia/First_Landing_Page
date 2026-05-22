/**
 * PIXOPET — script.js
 * ===================
 * PURPOSE: Adds behavior the HTML cannot do alone:
 *   1. Mobile navigation menu (open/close on small screens)
 *   2. Auto-rotating pet images in the "Choose Your Pet" feature card
 *   3. Smooth scrolling when clicking nav links (#home, #features, etc.)
 *
 * CONTENT EDITORS — what to change:
 *   • Carousel images & speed → petImages array and rotationInterval below
 *   • Menu / scroll → usually leave as-is unless removing features
 *
 * TEXT & STATIC IMAGES → edit index.html, not this file.
 */

// =============================================================================
// 1. MOBILE MENU TOGGLE
// =============================================================================
// PURPOSE: Shows/hides the nav link list when the ☰ button is tapped (phones/tablets).
// REQUIRES in index.html: id="menuBtn", id="navLinks", class "active" toggled on menu open.
// TO DISABLE: Remove initializeMenuToggle() from initializeApp() at the bottom.
// =============================================================================
const initializeMenuToggle = () => {
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (!menuBtn || !navLinks) {
        console.warn("Menu button or nav links not found");
        return;
    }

    menuBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = navLinks.classList.toggle("active");
        menuBtn.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".navbar")) {
            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
        }
    });
};

// =============================================================================
// 2. PET IMAGE CAROUSEL (Features section)
// =============================================================================
// PURPOSE: Cycles images inside #pet-feature-img every few seconds with a fade effect.
// EDIT HERE to change which images rotate (must match files in image/ folder).
// Also update the first <img src="..."> in index.html if you change the starting image.
//
// rotationInterval — milliseconds between slides (5000 = 5 seconds)
// fadeTransitionDuration — fade speed in ms (500 = half second)
//
// TO STOP ROTATION: Comment out the setInterval(...) line near the bottom of this function.
// =============================================================================
const initializePetCarousel = () => {
    const petImageElement = document.getElementById("pet-feature-img");

    if (!petImageElement) {
        console.warn("Pet image element not found");
        return;
    }

    // ▼ EDIT: Add, remove, or reorder image paths (one string per slide)
    const petImages = [
        "image/cats.png",
        "image/Dogs.png",
        "image/Bird.png",
        "image/fish.png",
        "image/Rep.png"
    ];

    let currentIndex = 0;
    const rotationInterval = 5000;      // ▼ EDIT: Time between image changes (ms)
    const fadeTransitionDuration = 500; // ▼ EDIT: Fade animation length (ms)

    const rotatePetImage = () => {
        petImageElement.style.opacity = "0";

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % petImages.length;
            petImageElement.src = petImages[currentIndex];
            petImageElement.style.opacity = "1";
        }, fadeTransitionDuration);
    };

    setInterval(rotatePetImage, rotationInterval);
};

// =============================================================================
// 3. SMOOTH SCROLL
// =============================================================================
// PURPOSE: Smoothly scrolls to sections when clicking links like href="#pricing".
// Works with nav items in index.html. No content edits needed here.
// =============================================================================
const initializeSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");
            if (href !== "#" && document.querySelector(href)) {
                event.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
};

// =============================================================================
// STARTUP — runs once when the page loads
// =============================================================================
const initializeApp = () => {
    try {
        initializeMenuToggle();
        initializePetCarousel();
        initializeSmoothScroll();
    } catch (error) {
        console.error("Error initializing app:", error);
    }
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeApp);
} else {
    initializeApp();
}
