import { db } from "./firebase.js";

import {
addDoc,
collection
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const form = document.getElementById("productForm");

form.addEventListener("submit", async (e)=>{

e.preventDefault();

const product = {

name: document.getElementById("name").value,

price: Number(document.getElementById("price").value),

pv: Number(document.getElementById("pv").value),

category: document.getElementById("category").value,

image: document.getElementById("image").value,

description: document.getElementById("description").value

};

try{

const docRef = await addDoc(collection(db, "products"), product);

console.log("ID:", docRef.id);

alert("Mahsulot qo'shildi");

form.reset();

}catch(error){

console.log(error);

alert("Xatolik yuz berdi");

}

});
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

<td>

<img src="${product.image}" width="70">

</td>

<td>${product.name}</td>

<td>${product.price.toLocaleString()} so'm</td>

<td>${product.pv}</td>

<td>${product.category}</td>

<td>

<button
class="delete-btn"
onclick="deleteProduct('${item.id}')">

O'chirish

</button>

</td>

</tr>

`;

    });

}

window.deleteProduct = async function(id){

    if(!confirm("Mahsulotni o'chirishni tasdiqlaysizmi?")) return;

    await deleteDoc(doc(db,"products",id));

    loadProducts();

}

loadProducts();