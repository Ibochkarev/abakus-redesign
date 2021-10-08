import Swiper from "swiper/swiper-bundle";

const lessonConsist = new Swiper(".lesson-consist__carousel", {
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
        },
        991: {
            spaceBetween: 50,
        },
    },
});
