
export function Main() {
    const mainContainer = document.querySelector("#content");
    const textTest = document.createElement("p");
    textTest.textContent = "Test";
    mainContainer.appendChild(textTest);
}