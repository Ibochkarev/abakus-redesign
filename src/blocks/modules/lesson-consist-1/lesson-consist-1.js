const lessonConsistControl = document.querySelector('.lesson-consist__control');
const lessonConsistPlayer = document.querySelector('.lesson-consist__video video');
const lessonConsistTimeline = document.querySelectorAll('.lesson-consist__timeline img');
const lessonConsistVolume = document.querySelectorAll('.lesson-consist__volume img');
const lessonConsistScreenSize = document.querySelector('.lesson-consist__screensize');

if(lessonConsistControl) {

    var iframe2 = document.querySelector('#lesson-consist__1--video');
    var lessonConsist1Player = new Vimeo.Player(iframe2);

    lessonConsist1Player.setVolume(0);
    lessonConsist1Player.play();
    lessonConsist1Player.setAutopause(false);


    let playerFlagPlay = true;
    let playerFlagVolume = true;

    lessonConsistScreenSize.addEventListener('click', () => {
        lessonConsist1Player.requestFullscreen();
    })

    lessonConsistTimeline.forEach((el, i, arr) => {
        el.addEventListener('click', function() {
            toggleShowElem(arr);

            if (playerFlagPlay) {
                lessonConsist1Player.pause();
                playerFlagPlay = false;
            } else {
                lessonConsist1Player.play();
                playerFlagPlay = true;
            }
        })
    })

    lessonConsistVolume.forEach((el, i, arr) => {
        el.addEventListener('click', function() {
            toggleShowElem(arr);

            if (playerFlagVolume) {
                lessonConsist1Player.setVolume(1);
                playerFlagVolume = false;
            } else {
                lessonConsist1Player.setVolume(0);
                playerFlagVolume = true;
            }
        })
    })
}

function toggleShowElem(arr) {
    arr.forEach((el) => {
        (el.classList.contains('hide-elem')) ? el.classList.remove('hide-elem') : el.classList.add('hide-elem');
    })
}
