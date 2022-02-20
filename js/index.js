import { url } from "./data/settings.js"

import { renderProducts } from "./utilities/productsToRender.js";
import { wishButton } from "./utilities/wishButtons.js";
import { errorMessage } from "./utilities/errorMessage.js";


async function fetchProducts() {
    try {
        const response = await fetch(url);
        const products = await response.json();

        renderProducts(products);
        wishButton();

    } catch (error) {
        console.log(error);
        errorMessage("Ops.. Something happened trying to call the API", ".product__container");
    }

}

fetchProducts();