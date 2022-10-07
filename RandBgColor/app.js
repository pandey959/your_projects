const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    // if ((r+b+g)<=400) {
    //     h1.style.color = "white";       // for setting inline css
    // }
    // else {
    //     h1.style.color = "black";
    // }
    if ((r+b+g)<=400) {
        h1.classList.add("white");          // for setting class from css file
        button.style.backgroundColor = "#000000";
    }
    else {
        h1.classList.remove("white");
        button.style.backgroundColor = "#7c4b4b";
    }
    return `rgb(${r}, ${g}, ${b})`;
};

