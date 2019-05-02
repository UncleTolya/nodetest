"use strict";
var prNum = Math.floor((Math.random() * 10) + 1);
// const tempOut: HTMLElement = document.getElementById('temp-out')!;
// tempOut.innerText = prNum.toString();
console.log(prNum);
function tr() {
    var out = document.getElementById('out');
    var num = parseInt(document.getElementById("my-num").value);
    if (prNum === num) {
        out.innerText = "Вы угадали!";
    }
    else if (num > prNum) {
        out.innerText = "Ваше число больше загаданного!";
    }
    else {
        out.innerText = "Число меньше заданного!";
    }
}
