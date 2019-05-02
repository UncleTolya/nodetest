"use strict";
function plus() {
    var n1 = document.getElementById('n1');
    var n2 = document.getElementById('n2');
    var result = parseInt(n1.value) + parseInt(n2.value);
    document.getElementById("out").innerHTML = " " + result;
}
function minus() {
    var n1 = document.getElementById('n1');
    var n2 = document.getElementById('n2');
    var result = parseInt(n1.value) - parseInt(n2.value);
    document.getElementById("out").innerHTML = " " + result;
}
