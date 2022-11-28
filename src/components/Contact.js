
function contactComponent() {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container")

    const contactCard = document.createElement("div");
    contactCard.classList.add("contact-card");

    const contactNumber = document.createElement("p");
    contactNumber.textContent = "2477134985";
    const contactDirection = document.createElement("p");
    contactDirection.textContent = "False Direction 1234"
    const contactMap = document.createElement("img");
    contactMap.src = "../src/images/map.png"

    contactCard.append(contactNumber,contactDirection,contactMap);
    contactContainer.appendChild(contactCard)

    return contactContainer
}

export {contactComponent};