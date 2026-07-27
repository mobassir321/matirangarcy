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
// Back To Top Button

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
