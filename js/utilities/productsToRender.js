import { getExistingWishes } from "./getExistingWishes.js";

export function renderProducts(products) {
    const productContainer = document.querySelector(".product__container");
    const wishlist = getExistingWishes();

    productContainer.innerHTML = "";

    for (let i = 0; i < products.length; i++) {

        let starClass = "fa-regular";
        const doesProductExist = wishlist.find(function(wish) {

            return parseInt(wish.id) === products[i].id;
        });

        if (doesProductExist) {
            starClass = "fa-solid";
        }

        productContainer.innerHTML += `<div class="product__item">
                                            <div class="product__item--info">
                                            <h4>${products[i].title}</h4>
                                            <p>$ ${products[i].price}</p>
                                            </div>
                                            <div>
                                            <i class="${starClass} fa-star" data-id="${products[i].id}" data-name="${products[i].title}" data-price="${products[i].price}"></i>
                                            </div>
                                        </div>`;
    }
}