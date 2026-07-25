document.addEventListener("DOMContentLoaded", function () {
    console.log("Youth Red Crescent Matiranga Website Loaded Successfully!");

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
});
const images = [
    IMG-20260710-WA0165.jpg,
    IMG-20260710-WA0113.jpg,
IMG-20260707-WA0043.jpg,
IMG-20260707-WA0041.jpg,
IMG-20260707-WA0022.jpg,
IMG-20260707-WA0005.jpg,
IMG-20260707-WA0004.jpg,
];

let current = 0;

setInterval(() => {
  current = (current + 1) % images.length;
  document.getElementById("slider").src = images[current];
}, 3000);
