
function homeComponent(){
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home");
    const card = document.createElement("div");
    card.classList.add("home-card");
    homeContainer.appendChild(card)

    return homeContainer
}

export {homeComponent}