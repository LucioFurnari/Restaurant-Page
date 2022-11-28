
function homeComponent(){
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home");

    const card = document.createElement("div");
    card.classList.add("home-card");

    const cardUpperTitle = document.createElement("p");
    const cardTitle = document.createElement("h1")
    const cardImage = document.createElement("img");
    cardImage.src = "../src/images/card-image.jpg"
    cardUpperTitle.textContent = "WELCOME TO";
    cardTitle.textContent = "ELISEO RESTAURANT"
    card.append(cardUpperTitle, cardTitle,cardImage);

    homeContainer.appendChild(card);

    return homeContainer
}

export {homeComponent}