import Swiper from "swiper/swiper-bundle";

const lessonConsist = new Swiper(".lesson-consist__carousel", {
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        560: {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
        },
        991: {
            spaceBetween: 50,
        },
    },
});
