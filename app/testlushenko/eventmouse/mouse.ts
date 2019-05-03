document.onmousemove = () => {
    document.getElementsByTagName("body")[0]
        .insertAdjacentHTML("beforeend", '<img src="https://cdn0.iconfinder.com/data/icons/mage-s-workstation/500/Mushroom-48.png" alt="" id="mush">');

    const mush: HTMLElement = document.getElementById("mush")!;
    mush.style.position = "fixed";

    document.onmousemove = (event: MouseEvent) => {
        mush.style.left = event.clientX + "px";
        mush.style.top = event.clientY + "px";
    };
};



