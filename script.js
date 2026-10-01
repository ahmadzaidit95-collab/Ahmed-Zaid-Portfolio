const themeButton = document.getElementById("theme-btn");
const menuButton = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");


// =========================
// Theme Toggle (saved)
// =========================

function applyTheme(isLight) {
    document.body.classList.toggle("light-mode", isLight);
    themeButton.textContent = isLight ? "☀️" : "🌙";
}

// Load saved theme on page load
let savedTheme = null;
try {
    savedTheme = localStorage.getItem("theme");
} catch (e) {}

applyTheme(savedTheme === "light");


// =========================
// Mobile Menu
// =========================

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuButton.textContent = isOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );
});


// Close mobile menu after clicking a link

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");
    });
});
