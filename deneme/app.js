var i = 0;
var elem = document.getElementById("myBar");
window.onload = dene;

function dene() {
    if (i == 0) {
        i = 1;

        var width = 10;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 300) {
                clearInterval(id);
                i = 0; 
                // window.location.href = "http://www.yusufsezer.com.tr";

            } else {
                width++;
                elem.style.width = width + "px";
                elem.innerHTML = width + "%";
            }
        }
    }
}
elem.onresize = function() {
    elem.style.width = "500px";
    if (elem.offsetWidth == 300) {
        console.log("rahim");
    }
}