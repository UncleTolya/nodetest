document.getElementById('slider-left')!.onclick = sliderLeft;
autoSlider();
let left: number = 0;
let timer: number;

function autoSlider() {
    timer = setTimeout(sliderLeft, 1000);
}

function sliderLeft() {
    const polosa: HTMLElement = document.getElementById("polosa")!;
    left = left - 128;
    if (left < -256) {
        left = 0;
    }
    polosa.style.left = left + "px";
}
