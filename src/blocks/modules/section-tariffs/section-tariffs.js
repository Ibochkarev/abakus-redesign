import Swiper from "../../../../node_modules/swiper/swiper-bundle";

const tarifs = new Swiper(".section-tariffs__wrapper", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    resistance: true,
    resistanceRatio: 0,
    breakpoints: {
        360: {
            spaceBetween: 36,
        },
        991: {
            spaceBetween: 20,
        },
    },
});

document.querySelector(".section-tariffs__item-button").addEventListener("click", function() {
    const modal = document.querySelector(".modal"),
        packageName = document.querySelector(this).data("package");
    console.log("test");

    modal.querySelector("input[name=package-name]").value(packageName);
});