const sectionTeachersItem = document.querySelector('.section-teachers__item');
const sectionTeachersItemVideo = document.querySelector('.section-teachers__item--video');
const sectionTeachersSubItemVideo = document.querySelector('.section-teachers__sub-item--video');
const sectionTeachersItemMask = document.querySelector('.section-teachers__item--mask');
const sectionTeachersSubItemMask = document.querySelector('.section-teachers__sub-item--mask');

if(sectionTeachersItem) {

    sectionTeachersSubItemMask.addEventListener('click', function() {

        const sectionTeachersItemVideoPlayer = document.querySelector('.section-teachers__item--video video');
        const sectionTeachersSubItemVideoPlayer = document.querySelector('.section-teachers__sub-item--video video');

        const firstElem = sectionTeachersItemMask.nextElementSibling;
        const LastElem = sectionTeachersSubItemMask.nextElementSibling;

        sectionTeachersItemVideo.appendChild(LastElem);
        sectionTeachersSubItemVideo.appendChild(firstElem);

        sectionTeachersItemVideoPlayer.pause();
        sectionTeachersItemVideoPlayer.id = 'video-main';

        sectionTeachersSubItemVideoPlayer.play();
        sectionTeachersSubItemVideoPlayer.id = 'video-main';

    })
}