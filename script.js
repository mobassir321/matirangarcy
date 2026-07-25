// Youth Red Crescent Matiranga Website

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully");

    const hero = document.querySelector(".hero");

    if(hero){
        hero.style.opacity = "0";

        setTimeout(() => {
            hero.style.transition = "1s";
            hero.style.opacity = "1";
        }, 300);
    }
});
