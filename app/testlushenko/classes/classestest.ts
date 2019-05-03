const p: HTMLCollectionOf<HTMLParagraphElement> = document.getElementsByTagName('p');
const one: HTMLCollectionOf<Element> = document.getElementsByClassName('one');
console.log(p);

for (let i = 0; i < p.length; i++) {
    p[i].onclick = () => f1(p[i])
}

for (let i = 0; i < one.length; i++) {
    (one[i] as HTMLElement).onclick = () => f2(one[i] as HTMLElement);
}

function f1(pElement: HTMLParagraphElement) {
    // alert('hello ');
    console.log(pElement);
    pElement.style.background = 'red';
}

function f2(pElement: HTMLElement) {
    // alert('hello ');
    console.log(pElement);
    pElement.style.fontWeight = 'bold';
}