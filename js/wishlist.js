import { getExistingWishes } from "./utilities/getExistingWishes.js";

const wishlist = getExistingWishes();
const productContainer = document.querySelector(".product__container");


if (wishlist.length === 0) {
    productContainer.innerHTML = "Your wishlist is empty..";
}


wishlist.forEach(wishes => {
    productContainer.innerHTML += `<div class="product__item">
                                        <div class="product__item--info">
                                        <h4>${wishes.name}</h4>
                                        <p>$ ${wishes.price}</p>
                                        </div>
                                        <div>
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>`;

});