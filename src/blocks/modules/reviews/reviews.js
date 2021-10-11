const sectionReviewsReview = document.querySelectorAll(".section-reviews__review");
const sectionReviewsWrapper = document.querySelector(".section-reviews__wrapper");

const sectionReviewsItemText = sectionReviewsWrapper.querySelectorAll(".section-reviews__item--text");
const sectionReviewsWrapViseo = sectionReviewsWrapper.querySelectorAll(".section-reviews__item--wrap-video");

if(sectionReviewsReview) {
    sectionReviewsReview.forEach(function(elem, i) {
        let text = elem.innerHTML.trim();
        let limit = 200;
        if( text.length <= limit) return text;
        text = text.slice(0, limit);
        elem.innerHTML = text.trim() + "...";
    });
}

if(sectionReviewsWrapper) {
    sectionReviewsItemText.forEach((elem) => {
        if(!elem.innerHTML)elem.classList.add("hide-elem");
    });

    sectionReviewsWrapViseo.forEach((elem) => {
        if(!elem.innerHTML)elem.classList.add("hide-elem");
    });
}