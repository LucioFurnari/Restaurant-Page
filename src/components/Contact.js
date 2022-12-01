
function contactComponent() {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container")

    const contactCard = document.createElement("div");
    contactCard.classList.add("contact-card");

    const contactNumber = document.createElement("p");
    const contactPhoneImg = document.createElement("img");
    contactPhoneImg.src = "../src/images/cellphone.png"
    contactNumber.textContent = "02477 13-4985";
    contactNumber.appendChild(contactPhoneImg)
    const contactDirection = document.createElement("p");
    const contactDirectionMarker = document.createElement("img");

    contactDirectionMarker.src = "../src/images/map-marker.svg"
    contactDirection.textContent =  "False Direction 1234"

    const textContainer = document.createElement("div");
    textContainer.append(contactNumber,contactDirection)
    contactDirection.appendChild(contactDirectionMarker)
    const contactMap = document.createElement("iframe");

    contactMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.9948683619381!2d-60.58076497076253!3d-33.890182485529046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9caaa9c065109%3A0x956e798b7344be8d!2sBlvd.%20Col%C3%B3n%20397%20b2700%2C%20B2700%20Pergamino%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1669758908685!5m2!1ses!2sar"
    contactMap.setAttribute("allowfullscreen","")
    contactMap.setAttribute("loading","lazy");
    contactMap.setAttribute("referrerpolicy","no-referrer-when-downgrade")
    contactCard.append(textContainer,contactMap);
    contactContainer.appendChild(contactCard)

    return contactContainer
}

export {contactComponent};