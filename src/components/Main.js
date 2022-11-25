import { headerComponent } from "./Header";


export function Main() {
    const mainContainer = document.querySelector("#content");
    mainContainer.appendChild(headerComponent())
    console.log(headerComponent());
}