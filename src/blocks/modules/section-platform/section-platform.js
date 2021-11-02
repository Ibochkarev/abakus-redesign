const sectionPlatformFullVideo = document.querySelector('.section-platform__full-video');


if(sectionPlatformFullVideo) {
    var sectionPlatformFrame = document.querySelector('#section-platform');
    var sectionPlatform = new Vimeo.Player(sectionPlatformFrame);
    sectionPlatform.setVolume(0);
    sectionPlatform.play();
    sectionPlatform.setAutopause(false);
}

