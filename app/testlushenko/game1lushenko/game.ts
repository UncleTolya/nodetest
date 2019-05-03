const prNum: number = Math.floor((Math.random()*10) + 1);
// const tempOut: HTMLElement = document.getElementById('temp-out')!;
// tempOut.innerText = prNum.toString();
console.log(prNum);

function tr() {
    const out: HTMLElement = document.getElementById('out')!;
    const num: number = parseInt((document.getElementById("my-num") as HTMLInputElement).value);

    if(prNum === num) {
        out.innerText = "Вы угадали!";
    } else if(num > prNum) {
        out.innerText = "Ваше число больше загаданного!";
    } else {
        out.innerText = "Число меньше заданного!";
    }
}