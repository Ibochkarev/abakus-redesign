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
    },
});

modules.define("section-tariffs", ["i-bem-dom"], function (provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {

                }
            }
        }
    }));

});
