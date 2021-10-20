const menuButton = document.querySelector(".header__menu-button");
const menuButtonClose = document.querySelector(".header__menu-close");
const mobileMenu = document.querySelector(".header__menu");
const headerMenuOverlay = document.querySelector(".header__menu-overlay");

const headerArray = [headerMenuOverlay, mobileMenu];

if(headerArray.length) {
    menuButton.addEventListener("click", function() {
        headerArray.forEach((elem) => {
            elem.classList.toggle("_active");
        });
    });

    menuButtonClose.addEventListener("click", function () {
        headerArray.forEach((elem) => {
            elem.classList.toggle("_active");
        });
    });
}