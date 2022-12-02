
function headerComponent() {
    const navBar = document.createElement("nav");
    const navTitle = document.createElement("h2");
    const navList = document.createElement("ul");
    const listHome = document.createElement("li");
    const listMenu = document.createElement("li");
    const listAbout = document.createElement("li");

    navTitle.textContent = "Restaurant"

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("home-button");
    homeBtn.textContent = "Home";
    listHome.appendChild(homeBtn);
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("menu-button");
    menuBtn.textContent = "Menu";
    listMenu.appendChild(menuBtn);
    const aboutBtn = document.createElement("button");
    aboutBtn.textContent = "Contact";
    listAbout.appendChild(aboutBtn);
    aboutBtn.classList.add("contact-button");
    
    navList.append(listHome,listMenu,listAbout);
    navBar.append(navTitle,navList)

    return navBar;
};

export {headerComponent}