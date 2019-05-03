"use strict";
document.getElementById("myslide").onmousemove = function (event) {
    var x = event.offsetX;
    document.getElementById("two").style.width = x + "px";
};
document.getElementById("myslide").onmouseleave = function (event) {
    document.getElementById("two").style.width = "960px";
};
