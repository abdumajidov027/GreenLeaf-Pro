import { db } from "./firebase.js";

import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const table = document.getElementById("ordersTable");

async function loadOrders(){

    table.innerHTML = "";

    const snapshot = await getDocs(collection(db,"orders"));

    snapshot.forEach(order=>{

        const data = order.data();

        table.innerHTML += `

<tr>

<td>${data.fullName}</td>

<td>${data.phone}</td>

<td>${data.address}</td>

<td>${data.status}</td>

<td>${data.createdAt?.toDate ?
data.createdAt.toDate().toLocaleString() :
"—"}</td>

<td>

<button class="edit-btn"
onclick="changeStatus('${order.id}')">

Status

</button>

<button class="delete-btn"
onclick="deleteOrder('${order.id}')">

Delete

</button>

</td>

</tr>

`;

    });

}

window.changeStatus = async function(id){

    const status = prompt(

"Yangi status kiriting:\n\nYangi\nTasdiqlandi\nYetkazildi\nBekor qilindi"

);

    if(!status) return;

    await updateDoc(doc(db,"orders",id),{

        status

    });

    loadOrders();

}

window.deleteOrder = async function(id){

    if(!confirm("Buyurtmani o'chirishni tasdiqlaysizmi?")) return;

    await deleteDoc(doc(db,"orders",id));

    loadOrders();

}

loadOrders();