"use strict";
document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
var left = 0;
var timer;
function autoSlider() {
    timer = setTimeout(sliderLeft, 1000);
}
function sliderLeft() {
    var polosa = document.getElementById("polosa");
    left = left - 128;
    if (left < -256) {
        left = 0;
    }
    polosa.style.left = left + "px";
}
