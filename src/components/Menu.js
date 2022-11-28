const Pizzas = [
    {id: 1, name: "Margarita", ingredients: ["Mozzarella","Salsa","Albahaca","Tomate"],img: "../src/images/pizza_Margarita.jpg", price: 500 },
    {id: 2, name:"Cuatro quesos", ingredients: ["Mozzarella","Queso azul","Parmesano","Provolone"],img: "../src/images/pizza_CuatroQuesos.jpg", price: 600},
    {id: 3, name:"Jamon cocido", ingredients:["Mozzarella","Salsa","Jamon cocido"],img: "../src/images/pizza_JamonCocido.jpg", price: 800},
    {id: 4, name:"Hawaiana", ingredients:["Mozzarella","Salsa","Jamon","Piña"],img: "../src/images/pizza_Hawaiana.jpg", price: 750},
    {id: 5, name:"Champiniones y pepperoni", ingredients:["Mozzarella","Champiniones","Pepperoni","Tomate"],img: "../src/images/pizza_PeperoniChampinones.jpg", price: 650},
    {id: 6, name:"Albahaca y cherry", ingredients:["Mozzarella","Albahaca","Tomate cherry"],img:"../src/images/pizza_AlbahacaCherry.jpg", price:550},
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
        price.textContent = elem.price + " $";

        const cardImage = document.createElement("img");
        cardImage.src = elem.img;

        card.append(name,ingredients,price,cardImage);
        menuCardsContainer.appendChild(card);
    })

    menuContainer.appendChild(menuCardsContainer);

    return menuContainer;
}

export {menuComponent}