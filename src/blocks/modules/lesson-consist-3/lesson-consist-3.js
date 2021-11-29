import Swiper from "swiper/swiper-bundle";

const lessonConsist = new Swiper(".lesson-consist__carousel", {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    resistance: true,
    resistanceRatio: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            centeredSlides: true,
        },
        991: {
            spaceBetween: 20,
            slidesPerView: 3
        },
    },
});
