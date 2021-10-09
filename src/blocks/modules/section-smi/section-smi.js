import Swiper from "../../../../node_modules/swiper/swiper-bundle";

// Todo не срабатывает проверка https://codepen.io/aaronkahlhamer/pen/GveaXP
const breakpoint = window.matchMedia("(min-width: 768px)");
let mySwiper;

const breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
        // clean up old instances and inline styles when available
        if (mySwiper !== undefined) mySwiper.destroy(true, true);
        // or/and do nothing
        return;
        // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
        // fire small viewport version of swiper
        return enableSwiper();
    }
};

const enableSwiper = function () {
    mySwiper = new Swiper(".section-smi .swiper-wrapper", {
        loop: true,

        slidesPerView: "auto",

        centeredSlides: true,

        a11y: true,
        keyboardControl: true,
        grabCursor: true,

        // pagination
        pagination: ".swiper-pagination",
        paginationClickable: true
    });
};

// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);

// kickstart
breakpointChecker();
