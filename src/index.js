import { Main } from "./components/Main";
import { homeComponent } from "./components/Home";
import { contactComponent } from "./components/Contact";
import { headerComponent } from "./components/Header";
import "./styles/main.css"
import "./styles/header.css"
import "./styles/home.css"
import "./styles/contact.css"

const mainContainer = document.querySelector("#content");
mainContainer.appendChild(headerComponent())
mainContainer.appendChild(homeComponent())

const homeBtn = document.querySelector(".home-button");
const menuBtn = document.querySelector(".menu-button");
const aboutBtn = document.querySelector(".about-button");

function tabbedBrowsing(component) {
    mainContainer.removeChild(mainContainer.children[1]);
    mainContainer.appendChild(component)
}

aboutBtn.addEventListener("click",()=> tabbedBrowsing(contactComponent()))
homeBtn.addEventListener("click",() => tabbedBrowsing(homeComponent()))