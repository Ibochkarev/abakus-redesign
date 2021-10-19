const lessonConsistControl = document.querySelector('.lesson-consist__control');
const lessonConsistPlayer = document.querySelector('.lesson-consist__video video');
const lessonConsistTimeline = document.querySelectorAll('.lesson-consist__timeline img');
const lessonConsistVolume = document.querySelectorAll('.lesson-consist__volume img');
const lessonConsistScreenSize = document.querySelector('.lesson-consist__screensize');

if(lessonConsistControl) {

    lessonConsistPlayer.controls = false;
    lessonConsistPlayer.muted = true;

    let playerFlagPlay = true;
    let playerFlagVolume = true;

    lessonConsistScreenSize.addEventListener('click', () => {
        lessonConsistPlayer.requestFullscreen();
    })

    lessonConsistTimeline.forEach((el, i, arr) => {
        el.addEventListener('click', function() {
            toggleShowElem(arr);

            if (playerFlagPlay) {
                lessonConsistPlayer.pause();
                playerFlagPlay = false;
            } else {
                lessonConsistPlayer.play();
                playerFlagPlay = true;
            }
        })
    })

    lessonConsistVolume.forEach((el, i, arr) => {
        el.addEventListener('click', function() {
            toggleShowElem(arr);

            if (playerFlagVolume) {
                lessonConsistPlayer.muted = false;
                playerFlagVolume = false;
            } else {
                lessonConsistPlayer.muted = true;
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
