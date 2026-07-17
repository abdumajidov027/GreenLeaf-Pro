import { db } from "./firebase.js";

import {
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const form = document.getElementById("editForm");

const name = document.getElementById("name");
const price = document.getElementById("price");
const pv = document.getElementById("pv");
const category = document.getElementById("category");
const image = document.getElementById("image");
const description = document.getElementById("description");

async function loadProduct() {

    const ref = doc(db, "products", id);

    const snap = await getDoc(ref);

    if (!snap.exists()) {
        alert("Mahsulot topilmadi");
        return;
    }

    const product = snap.data();

    name.value = product.name;
    price.value = product.price;
    pv.value = product.pv;
    category.value = product.category;
    image.value = product.image;
    description.value = product.description;
}

loadProduct();

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    await updateDoc(doc(db, "products", id), {

        name: name.value,
        price: Number(price.value),
        pv: Number(pv.value),
        category: category.value,
        image: image.value,
        description: description.value

    });

    alert("Mahsulot yangilandi ✅");

    window.location.href = "products.html";

});