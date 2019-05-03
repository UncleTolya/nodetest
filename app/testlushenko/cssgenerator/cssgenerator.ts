(<HTMLInputElement>document.getElementById("ranger1")).oninput
    = () => {
    const element = <HTMLInputElement>document.getElementById("ranger1");
    const div = document.getElementById('rectangle')!;
    const out = document.getElementById('out')!
    div.style.borderRadius = element.value + 'px';
    out.innerHTML = "-webkit-border-radius: " + element.value + 'px;\n';
    out.innerHTML += "border-radius: " + element.value + 'px;';
};