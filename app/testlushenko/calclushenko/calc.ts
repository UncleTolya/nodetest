function plus() {
    const n1: HTMLInputElement = document.getElementById('n1') as HTMLInputElement;
    const n2: HTMLInputElement = document.getElementById('n2') as HTMLInputElement;

    const result: number =  parseInt(n1.value) + parseInt(n2.value);
    document.getElementById("out")!.innerHTML = " " + result;
}

function minus() {
    const n1: HTMLInputElement = document.getElementById('n1') as HTMLInputElement;
    const n2: HTMLInputElement = document.getElementById('n2') as HTMLInputElement;

    const result: number =  parseInt(n1.value) - parseInt(n2.value);
    document.getElementById("out")!.innerHTML = " " + result;
}