/**
 * Created by HP on 29.08.2016.
 */
var i= 0;
document.getElementById("Plus").addEventListener("click", mySticker);
function mySticker (event) {
    var div = document.createElement("div");
    div.className = "Sticker";
    div.id = ("idSticker"+i++);
    document.getElementById("Board").appendChild(div);
}

        document.getElementById("Board").addEventListener("mousedown", mouseDown);
        function mouseDown(event) {
            //var i = event.target.id;
            var sticker = document.getElementById(event.target.id);
            var board = document.getElementById("Board");
            //var sticker = document.getElementsByClassName("Sticker")[i];


            if (event.target && event.target.matches(".Sticker")) {

                function moveAt(event) {
                    sticker.style.left = event.pageX - sticker.offsetWidth / 2 + 'px';
                    sticker.style.top = event.pageY - sticker.offsetHeight / 2 + 'px';

                }

                sticker.style.position = "absolute";
                moveAt(event);
                sticker.style.zIndex = "1000";


                document.onmousemove = function (e) {
                    moveAt(e);
                }

                sticker.onmouseup = function () {
                    document.onmousemove = null;
                    sticker.onmouseup = null;
                }

                sticker.ondragstart = function () {
                    return false;
                };

            }

    }

 document.getElementById("Board").addEventListener("click", clickOnSticker);

function clickOnSticker (event) {
    var i = event.target.id;
    var sticker = document.getElementById(i);

    if (event.target && event.target.matches(".Sticker")) {
        var textArea = document.createElement("TEXTAREA");
        textArea.className = "textAreaClass";
        var text = document.createTextNode("");
        textArea.appendChild(text);
        var a = document.getElementById(i);
        //var a = document.getElementsByClassName("Sticker");
        a.appendChild(textArea);
        //document.getElementById("idSticker").appendChild(textArea);


    }
}



