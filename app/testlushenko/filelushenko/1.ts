function out1() {
    let p: HTMLElement;
    p = document.getElementById("out")!;
    // p.innerText += " innerText";
    p.innerHTML += " <b>innerHTML<b>";
    // p.insertAdjacentHTML("beforebegin", "<span>insertAdjacentHTML beforebegin<span>");
    // p.insertAdjacentHTML("afterend", "<p></p><b>Кукарача afterend</b></p>");
    p.outerHTML = '<div class="one"><p>outer html<p></div>'
}