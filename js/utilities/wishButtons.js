import { handleWishes } from "./handleWishes.js";

export function wishButton() {

    const wishButtons = document.querySelectorAll(".product__item i");

    wishButtons.forEach((button) => {
        button.addEventListener("click", handleWishes);
    });
}