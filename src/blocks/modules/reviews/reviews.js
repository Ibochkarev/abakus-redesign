const sectionReviewsReview = document.querySelectorAll(".section-reviews__review");
const sectionReviewsWrapper = document.querySelector(".section-reviews__wrapper");

const sectionReviewsItemText = sectionReviewsWrapper.querySelectorAll(".section-reviews__item--text");
const sectionReviewsWrapViseo = sectionReviewsWrapper.querySelectorAll(".section-reviews__item--wrap-video");

const sectionReviewsItemArray = [...sectionReviewsItemText, ...sectionReviewsWrapViseo];

if(sectionReviewsReview) {
    sectionReviewsReview.forEach(function(elem, i) {
        let text = elem.innerHTML.trim();
        let limit = 200;
        if( text.length <= limit) return text;
        text = text.slice(0, limit);
        elem.innerHTML = text.trim() + "...";
    });
}

if(sectionReviewsItemArray.length) {
    sectionReviewsItemArray.forEach((elem) => {
        if(!elem.innerHTML)elem.classList.add("hide-elem");
    });
}

const videoPopupTrigger = document.querySelector("a.section-reviews__item--video");

if (videoPopupTrigger) {
    videoPopupTrigger.addEventListener("click", (e) => {
        const videoLink = videoPopupTrigger.dataset.video;
        const modalReviewVideoFrame = document.querySelector("#modal-review-video .youtube-player");
        modalReviewVideoFrame.src = `https://www.youtube.com/embed/${videoLink}?wmode=opaque&autohide=1&autoplay=1&muted=1&enablejsapi=1`;
    });
}

document.querySelector(".section-reviews__more-btn").click(function(){
    document.querySelector(".section-reviews__item:hidden").slice(0,3).fadeIn();
    if (document.querySelector(".section-reviews__item:hidden").length < 1) document.querySelector(this).fadeOut();
});