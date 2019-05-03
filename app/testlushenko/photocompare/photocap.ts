document.getElementById("myslide")!.onmousemove = (event: MouseEvent) => {
    const x = event.offsetX;
    document.getElementById("two")!.style.width = x + "px";
};

document.getElementById("myslide")!.onmouseleave = (event: MouseEvent) => {
    document.getElementById("two")!.style.width = "960px";
}