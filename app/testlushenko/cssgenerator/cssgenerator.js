"use strict";
document.getElementById("ranger1").oninput
    = function () {
        var element = document.getElementById("ranger1");
        var div = document.getElementById('rectangle');
        var out = document.getElementById('out');
        div.style.borderRadius = element.value + 'px';
        out.innerHTML = "-webkit-border-radius: " + element.value + 'px;\n';
        out.innerHTML += "border-radius: " + element.value + 'px;';
    };
