import Swiper from "../../../../node_modules/swiper/swiper-bundle";

const tarifs = new Swiper(".section-tariffs__wrapper", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 15,
    resistance: true,
    resistanceRatio: 0,
});

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