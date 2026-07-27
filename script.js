document.addEventListener("DOMContentLoaded", function () {

    console.log("Youth Red Crescent Matiranga Website Loaded Successfully!");

    // Card Animation
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 200);
    });

    // Image Slider
    
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

    if (slider) {
        setInterval(() => {
            current = (current + 1) % images.length;
            slider.src = images[current];
        }, 3000);
    }

});
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
// ===== Hamburger Menu =====

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if(menuToggle){
    menuToggle.addEventListener("click", function(){
        navbar.classList.toggle("active");
    });
}
