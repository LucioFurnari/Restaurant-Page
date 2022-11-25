
function headerComponent() {
    const navBar = document.createElement("nav");
    const navList = document.createElement("ul");
    const listHome = document.createElement("li");
    const listMenu = document.createElement("li");
    const listAbout = document.createElement("li");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("home-button");
    homeBtn.textContent = "Home";
    listHome.appendChild(homeBtn);
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("menu-button");
    menuBtn.textContent = "Menu";
    listMenu.appendChild(menuBtn);
    const aboutBtn = document.createElement("button");
    aboutBtn.textContent = "About";
    listAbout.appendChild(aboutBtn);
    aboutBtn.classList.add("about-button");
    
    navList.append(listHome,listMenu,listAbout);
    navBar.appendChild(navList)

    return navBar;
};

export {headerComponent}