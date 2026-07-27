document.addEventListener("DOMContentLoaded", function () {

    console.log("Youth Red Crescent Matiranga Website Loaded Successfully!");

    // ===========================
    // 1. Mobile Menu Toggle
    // ===========================
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });
    }

    // ===========================
    // 2. Active Page Highlighting
    // ===========================
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("#navbar a");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentLocation || (currentLocation === "" && linkPath === "index.html")) {
            link.classList.add("active");
        }
    });

    // ===========================
    // 3. Smooth Image Slider
    // ===========================
    const images = [
        "images/IMG-20260710-WA0165.jpg",
        "images/IMG-20260710-WA0113.jpg",
        "images/IMG-20260707-WA0043.jpg",
        "images/IMG-20260707-WA0041.jpg",
        "images/IMG-20260707-WA0024.jpg",
        "images/IMG-20260707-WA0023.jpg",
        "images/IMG-20260707-WA0022.jpg",
        "images/IMG-20260707-WA0008.jpg",
        "images/IMG-20260707-WA0005.jpg",
        "images/IMG-20260707-WA0004.jpg"
    ];

    let current = 0;
    const slider = document.getElementById("slider");

    if (slider && images.length > 0) {
        // Smooth Fade Effect Transition
        slider.style.transition = "opacity 0.5s ease-in-out";

        setInterval(() => {
            slider.style.opacity = "0.3"; // কিছুটা ঝাপসা হয়ে ছবি পরিবর্তন হবে

            setTimeout(() => {
                current = (current + 1) % images.length;
                slider.src = images[current];
                slider.style.opacity = "1"; // আবার আগের স্পষ্ট অবস্থায় ফিরবে
            }, 500);

        }, 3500);
    }

    // ===========================
    // 4. Back To Top Button
    // ===========================
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 200) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        });

        topBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
