"use strict";
var radio = document.getElementsByName('prim');
var _loop_1 = function (i) {
    radio[i].onchange = function () {
        console.log(radio[i].value);
    };
};
for (var i = 0; i < radio.length; i++) {
    _loop_1(i);
}
document.getElementById("one").onclick = function () {
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            alert(radio[i].value);
            break;
        }
    }
};
