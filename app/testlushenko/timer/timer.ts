let delta: number = 0;
const test: HTMLElement = document.getElementById("test")!;

function move() {
    test.style.marginLeft = delta + "px";
    delta = delta + 3;
}

const timer = setInterval(move, 50);