
// https://micromodal.vercel.app/
import MicroModal from "micromodal";

document.addEventListener("DOMContentLoaded", function () {

    MicroModal.init({
        awaitCloseAnimation: true,// set to false, to remove close animation
        onShow: function(modal) {
            console.log("micromodal open");
        },
        onClose: function(modal) {
            console.log("micromodal close");
            if (modal.id = "modal-review-video") {
                document.querySelector("#modal-review-video .youtube-player").contentWindow.postMessage(JSON.stringify({
                    "event": "command",
                    "func": "stopVideo",
                    "args": []
                }), "*");
            }
        }
    });

});