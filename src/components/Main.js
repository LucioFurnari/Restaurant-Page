import { headerComponent } from "./Header";
import { homeComponent } from "./Home";


export function Main() {
    const mainContainer = document.querySelector("#content");
    mainContainer.appendChild(headerComponent())
    mainContainer.appendChild(homeComponent())
}