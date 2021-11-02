const sectionTeachersItem = document.querySelector('.section-teachers__item');
const sectionTeachersItemVideo = document.querySelector('.section-teachers__item--video');
const sectionTeachersSubItemVideo = document.querySelector('.section-teachers__sub-item--video');
const sectionTeachersItemMask = document.querySelector('.section-teachers__item--mask');
const sectionTeachersSubItemMask = document.querySelector('.section-teachers__sub-item--mask');


if(sectionTeachersItem) {

    const sectionTeachersItemVideoFrame = document.querySelector('#section-teachers__item--video');
    const sectionTeachersItemVideoPlayer = new Vimeo.Player(sectionTeachersItemVideoFrame);

    const sectionTeachersSubItemVideoFrame = document.querySelector('#section-teachers__sub-item--video');
    const sectionTeachersSubItemVideoPlayer = new Vimeo.Player(sectionTeachersSubItemVideoFrame);

    sectionTeachersItemVideoPlayer.setVolume(0);
    sectionTeachersItemVideoPlayer.setAutopause(false);

    sectionTeachersSubItemVideoPlayer.setVolume(0);
    sectionTeachersSubItemVideoPlayer.setAutopause(false);

    sectionTeachersItemVideoPlayer.play();

    sectionTeachersSubItemMask.addEventListener('click', function() {

        const firstElem = sectionTeachersItemMask.nextElementSibling;
        const LastElem = sectionTeachersSubItemMask.nextElementSibling;

        sectionTeachersItemVideo.appendChild(LastElem);
        sectionTeachersSubItemVideo.appendChild(firstElem);

        sectionTeachersItemVideoPlayer.setVolume(0);
        sectionTeachersItemVideoPlayer.setAutopause(false);
        sectionTeachersItemVideoPlayer.play();

    })
}