let menuButton = document.querySelector(".header__menu-button");
let menuButtonClose = document.querySelector(".header__menu-close");
let mobileMenu = document.querySelector(".header__menu");

menuButton.addEventListener("click", function() {
    mobileMenu.classList.toggle("_active");
});

menuButtonClose.addEventListener("click", function () {
    mobileMenu.classList.toggle("_active");
});