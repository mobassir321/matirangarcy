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
    // 3. Dark Mode Toggle
    // ===========================
    const themeToggleBtn = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    // পূর্বের সেভ হওয়া থিম চেক
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggleBtn) themeToggleBtn.innerText = "☀️ লাইট মোড";
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            let theme = "light";
            if (document.body.classList.contains("dark-mode")) {
                theme = "dark";
                themeToggleBtn.innerText = "☀️ লাইট মোড";
            } else {
                themeToggleBtn.innerText = "🌙 ডার্ক মোড";
            }

            localStorage.setItem("theme", theme);
        });
    }

    // ===========================
    // 4. Smooth Image Slider
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
        slider.style.transition = "opacity 0.5s ease-in-out";

        setInterval(() => {
            slider.style.opacity = "0.3";

            setTimeout(() => {
                current = (current + 1) % images.length;
                slider.src = images[current];
                slider.style.opacity = "1";
            }, 500);

        }, 3500);
    }

    // ===========================
    // 5. Back To Top Button
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

// ===========================
// 6. Number Counter Animation
// ===========================
function animateCounters() {
    const counters = document.querySelectorAll('.card strong');
    counters.forEach(counter => {
        const valueText = counter.innerText;
        const target = parseInt(valueText.replace(/[^0-9]/g, ''));
        if (!isNaN(target) && !counter.classList.contains('counted')) {
            let count = 0;
            const speed = target / 50;
            const updateCount = () => {
                count += speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count) + "+";
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target + "+";
                    counter.classList.add('counted');
                }
            };
            updateCount();
        }
    });
}

// স্ক্রলে সেকশনটি আসলে কাউন্টার রান হবে
window.addEventListener('scroll', function() {
    const statsCard = document.querySelector('.card');
    if (statsCard) {
        const cardPosition = statsCard.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (cardPosition < screenPosition) {
            animateCounters();
        }
    }
});
