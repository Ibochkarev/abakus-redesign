
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
        }
    });

});