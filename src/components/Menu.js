const Pizzas = [
    {id: 1, name: "Hamburger", ingredients: [],img: "../src/images/hamburger.jpg", price: 10 },
    {id: 2, name:"BBQ Ribs", ingredients: [],img: "../src/images/Bbq_Ribs.jpg", price: 25},
    {id: 3, name:"Caesar Salad", img:"../src/images/Caesar_Salad.jpg", price:10 },
    {id: 4, name:"Steak", img:"../src/images/steak.jpg", price:20},
    {id: 5, name:"Cheese Sandwich", img:"../src/images/cheese_sandwich.jpg", price:20},
];

function menuComponent(){
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuCardsContainer = document.createElement("div"); 
    menuCardsContainer.classList.add("cards-container");

    Pizzas.forEach(elem => {
        const card = document.createElement("div");
        card.classList.add("menu-card");

        const name = document.createElement("p");
        name.textContent = elem.name;

        const ingredients = document.createElement("p");
        ingredients.textContent = elem.ingredients;

        const price = document.createElement("p");
        price.textContent ="$ " + elem.price;

        const cardImage = document.createElement("img");
        cardImage.src = elem.img;

        card.append(name,ingredients,price,cardImage);
        menuCardsContainer.appendChild(card);
    })

    menuContainer.appendChild(menuCardsContainer);

    return menuContainer;
}

export {menuComponent}