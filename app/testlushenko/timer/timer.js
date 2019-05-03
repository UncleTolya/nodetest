"use strict";
var delta = 0;
var test = document.getElementById("test");
function move() {
    test.style.marginLeft = delta + "px";
    delta = delta + 3;
}
setInterval(move, 50);
