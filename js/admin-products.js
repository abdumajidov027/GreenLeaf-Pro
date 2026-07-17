import { db } from "./firebase.js";

import {
    collection,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const table = document.getElementById("productsTable");

async function loadProducts() {
    table.innerHTML = "";

    const snapshot = await getDocs(collection(db, "products"));

    snapshot.forEach((item) => {
        const product = item.data();

        table.innerHTML += `
      <tr>
        <td><img src="${product.image}" width="70"></td>
        <td>${product.name}</td>
        <td>${product.price.toLocaleString()} so'm</td>
        <td>${product.pv}</td>
        <td>${product.category}</td>
        <td>

<button
class="edit-btn"
onclick="location.href='edit-product.html?id=${item.id}'">

Tahrirlash

</button>

<button
class="delete-btn"
data-id="${item.id}">

O'chirish

</button>

</td>
      </tr>
    `;
    });

    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", async () => {
            const id = btn.dataset.id;

            if (!confirm("Mahsulotni o'chirishni tasdiqlaysizmi?")) return;

            await deleteDoc(doc(db, "products", id));

            loadProducts();
        });
    });
}

loadProducts();