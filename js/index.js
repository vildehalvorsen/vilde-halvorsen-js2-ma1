import { url } from "./data/settings.js"
import { getExistingWishes } from "./utilities/getExistingWishes.js";
import { handleWishes } from "./utilities/handleWishes.js";
import { errorMessage } from "./utilities/errorMessage.js";



const productContainer = document.querySelector(".product__container");

const wishlist = getExistingWishes();

async function fetchProducts() {
    try {
        const response = await fetch(url);
        const products = await response.json();

        productContainer.innerHTML = "";

        for (let i = 0; i < products.length; i++) {

            let starClass = "fa-regular";
            const doesProductExist = wishlist.find(function(wish) {
                console.log(wish);

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

        const wishButtons = document.querySelectorAll(".product__item i");

        wishButtons.forEach((button) => {
            button.addEventListener("click", handleWishes);
        });



    } catch (error) {
        console.log(error);
        productContainer.innerHTML = errorMessage("Ops.. Something happened trying to call the API");
    }

}

fetchProducts();