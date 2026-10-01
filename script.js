const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

// Open / Close mobile menu
menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Close menu after clicking a link
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open menu");
    });
});


