import { db } from "./firebase.js";
import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const productList = document.getElementById("productList");

async function loadProducts() {

    if (!productList) return;

    productList.innerHTML = "";

    const snapshot = await getDocs(collection(db, "products"));

    snapshot.forEach((doc) => {

        const product = {
            id: doc.id,
            ...doc.data()
        };

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

                <button class="product-btn"
                onclick="location.href='product.html?id=${product.id}'">

                    Batafsil →

                </button>

            </div>

        </div>
        `;
    });

}

loadProducts();