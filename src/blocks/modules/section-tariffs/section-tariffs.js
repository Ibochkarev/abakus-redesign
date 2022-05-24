import Swiper from "../../../../node_modules/swiper/swiper-bundle";

let init = false,
    tarifsSlider = undefined;

if( document.querySelector(".section-tariffs__wrapper") ) {
    function swiperMode() {
        if (window.matchMedia("(max-width: 1439px)").matches) {
            if (!init) {
                init = true;
                tarifsSlider = new Swiper(".section-tariffs__wrapper", {
                    grabCursor: true,
                    slidesPerView: "auto",
                    spaceBetween: 15,
                    resistance: true,
                    resistanceRatio: 0,
                });
            }
        } else {
            if (tarifsSlider) tarifsSlider.destroy();
            init = false;
        }
    }

    window.addEventListener("load", function () {
        swiperMode();
    });

    window.addEventListener("resize", function () {
        swiperMode();
    });
}


const tarifButtons = document.querySelectorAll(".section-tariffs__item-button");

if (tarifButtons.length > 0) {
    tarifButtons.forEach((button) => {
        button.addEventListener("click", function(e) {
            const modal = document.querySelector("#modal-form"),
                packageName = e.target.dataset.package;
            modal.querySelector("input[name=\"package\"]").value = packageName;
            // console.log(modal, packageName, modal.querySelector("input[name=\"package\"]"));
        });
    });
}