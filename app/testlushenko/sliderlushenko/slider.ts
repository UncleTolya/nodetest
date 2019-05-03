// document.getElementById('slider-left')!.onclick = sliderLeft;
autoSlider();
let left: number = 0;
let timer1: number;

function autoSlider() {
    timer1 = setTimeout(function () {
        const polosa: HTMLElement = document.getElementById("polosa")!;
        left = left - 128;
        if (left < -256) {
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left + "px";
        autoSlider();
    }, 2000);
}
