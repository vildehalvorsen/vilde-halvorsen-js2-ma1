import { getExistingWishes } from "./getExistingWishes.js";

export

function handleWishes() {
    this.classList.toggle("fa-regular");
    this.classList.toggle("fa-solid");

    const id = this.dataset.id;
    const name = this.dataset.name;
    const price = this.dataset.price;

    const currentWishes = getExistingWishes();

    const wishExists = currentWishes.find(function(wish) {
        return wish.id === id;
    })

    if (!wishExists) {
        const product = { id: id, name: name, price: price };
        currentWishes.push(product);
        saveWishes(currentWishes);
    } else {
        const newWishes = currentWishes.filter((wish) => wish.id !== id);
        saveWishes(newWishes);
    }

}



function saveWishes(wishes) {
    localStorage.setItem("wishes", JSON.stringify(wishes));
}