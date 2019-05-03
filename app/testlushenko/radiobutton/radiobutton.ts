const radio: NodeListOf<HTMLElement> = document.getElementsByName('prim');

for (let i = 0; i < radio.length; i++) {
    radio[i].onchange = () => {
        console.log((<HTMLInputElement>radio[i]).value);
    }
}

document.getElementById("one")!.onclick = () => {
    for (let i = 0; i < radio.length; i++) {
        if ((<HTMLInputElement>radio[i]).checked) {
            alert((<HTMLInputElement>radio[i]).value);
            break;
        }
    }
};