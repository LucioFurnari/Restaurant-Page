
export function Main() {
    const main = document.createElement("div");
    const textTest = document.createElement("p");
    textTest.textContent = "Test";
    main.classList.add("main");
    main.appendChild(textTest);
    return main
}