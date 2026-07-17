import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const productList = document.getElementById("productList");

async function loadProducts() {

    const snapshot = await getDocs(collection(db, "products"));

    productList.innerHTML = "";

    snapshot.forEach(doc => {

        const product = doc.data();

        productList.innerHTML += `

        <div class="product-card">

            <div class="product-image">

                <img src="${product.image}" alt="${product.name}">

            </div>

            <div class="product-content">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="price">

                    ${product.price.toLocaleString()} so'm

                </div>

                <div class="pv">

                    PV : ${product.pv}

                </div>

            </div>

        </div>

        `;

    });

}

loadProducts();