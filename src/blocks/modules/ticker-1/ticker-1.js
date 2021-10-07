import Swiper from "swiper/swiper-bundle";

document.querySelectorAll(".ticker .swiper-container").forEach(el => {
    var swiper = new Swiper(el, {
        spaceBetween: 20,
        centeredSlides: true,
        speed: 7000,
        autoplay: {
            delay: 0,
        },
        loop: true,
        loopedSlides: 4,
        slidesPerView: "auto",
        allowTouchMove: false,
        disableOnInteraction: false
    });
});
