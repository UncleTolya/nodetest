"use strict";
var p = document.getElementsByTagName('p');
var one = document.getElementsByClassName('one');
console.log(p);
var _loop_1 = function (i) {
    p[i].onclick = function () { return f1(p[i]); };
};
for (var i = 0; i < p.length; i++) {
    _loop_1(i);
}
var _loop_2 = function (i) {
    one[i].onclick = function () { return f2(one[i]); };
};
for (var i = 0; i < one.length; i++) {
    _loop_2(i);
}
function f1(pElement) {
    // alert('hello ');
    console.log(pElement);
    pElement.style.background = 'red';
}
function f2(pElement) {
    // alert('hello ');
    console.log(pElement);
    pElement.style.fontWeight = 'bold';
}
