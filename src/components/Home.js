
function homeComponent(){
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home");

    const card = document.createElement("div");
    card.classList.add("home-card");

    const cardUpperTitle = document.createElement("p");
    const cardTitle = document.createElement("h1")

    cardUpperTitle.textContent = "WELCOME TO";
    cardTitle.textContent = "ELISEO RESTAURANT"
    card.append(cardUpperTitle, cardTitle);

    homeContainer.appendChild(card);

    return homeContainer
}

export {homeComponent}