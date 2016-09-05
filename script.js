/**
 * Created by HP on 29.08.2016.
 */
var i = 0;
document.getElementById("Plus").addEventListener("click", createNewSticker);
function createNewSticker (event) {
    var elementSticker = document.createElement("div");
    elementSticker.className = "Sticker";
    elementSticker.id = ("idSticker"+i++);
    document.getElementById("Board").appendChild(elementSticker);
}

document.getElementById("Board").addEventListener("mousedown", dragAndDrop);
        function dragAndDrop(event) {
            var currentSticker = document.getElementById(event.target.id);
            var board = document.getElementById("Board");
            if (event.target && event.target.matches(".Sticker")) {
                function moveAt(event) {
                    currentSticker.style.left = event.pageX - currentSticker.offsetWidth / 2 + 'px';
                    currentSticker.style.top = event.pageY - currentSticker.offsetHeight / 2 + 'px';

                }

                currentSticker.style.position = "absolute";
                moveAt(event);
                currentSticker.style.zIndex = "1000";


                document.onmousemove = function (e) {
                    moveAt(e);
                }

                currentSticker.onmouseup = function () {
                    document.onmousemove = null;
                    currentSticker.onmouseup = null;
                }

                sticker.ondragstart = function () {
                    return false;
                };

            }

    }

document.getElementById("Board").addEventListener("click", addTextAreaToSticker);
function addTextAreaToSticker (event) {
    var currentSticker = event.target.id;
    //var sticker = document.getElementById(i);

    if (event.target && event.target.matches(".Sticker")) {
        var textArea = document.createElement("TEXTAREA");
        textArea.className = "textAreaClass";
        var text = document.createTextNode("");
        textArea.appendChild(text);
        var catchedSticker = document.getElementById(currentSticker);
        catchedSticker.appendChild(textArea);


    }
}



