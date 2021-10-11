const sectionReviewsReview = document.querySelectorAll('.section-reviews__review');

if(sectionReviewsReview) {
    sectionReviewsReview.forEach(function(elem, i) {
        let text = elem.innerHTML.trim();
        let limit = 200;
        if( text.length <= limit) return text;
        text = text.slice(0, limit);
        elem.innerHTML = text.trim() + "...";
    })
}