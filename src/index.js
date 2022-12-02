import { Main } from "./components/Main";
import { homeComponent } from "./components/Home";
import { contactComponent } from "./components/Contact";
import { headerComponent } from "./components/Header";
import { menuComponent } from "./components/Menu";
import "./styles/main.css"
import "./styles/header.css"
import "./styles/home.css"
import "./styles/contact.css"
import "./styles/menu.css"

const mainContainer = document.querySelector("#content");
mainContainer.appendChild(headerComponent())
mainContainer.appendChild(homeComponent())

const homeBtn = document.querySelector(".home-button");
const menuBtn = document.querySelector(".menu-button");
const contactBtn = document.querySelector(".contact-button");
homeBtn.classList.add("button-active");

function tabbedBrowsing(component,target) {
    homeBtn.classList.remove("button-active")
    menuBtn.classList.remove("button-active")
    contactBtn.classList.remove("button-active")
    target.classList.add("button-active")
    mainContainer.removeChild(mainContainer.children[1]);
    mainContainer.appendChild(component)
}

contactBtn.addEventListener("click",(event)=> tabbedBrowsing(contactComponent(),event.target))
homeBtn.addEventListener("click",(event) => tabbedBrowsing(homeComponent(),event.target))
menuBtn.addEventListener("click",(event) => tabbedBrowsing(menuComponent(),event.target))