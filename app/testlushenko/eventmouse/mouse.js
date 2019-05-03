"use strict";
document.onmousemove = function () {
    document.getElementsByTagName("body")[0]
        .insertAdjacentHTML("beforeend", '<img src="https://cdn0.iconfinder.com/data/icons/mage-s-workstation/500/Mushroom-48.png" alt="" id="mush">');
    var mush = document.getElementById("mush");
    mush.style.position = "fixed";
    document.onmousemove = function (event) {
        mush.style.left = event.clientX + "px";
        mush.style.top = event.clientY + "px";
    };
};
