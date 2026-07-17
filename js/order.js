import { db } from "./firebase.js";

import {
  addDoc,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const form = document.getElementById("orderForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const order = {

        fullName: document.getElementById("fullName").value,

        phone: document.getElementById("phone").value,

        address: document.getElementById("address").value,

        comment: document.getElementById("comment").value,

        status: "Yangi",

        createdAt: serverTimestamp()

    };

    try{

        await addDoc(collection(db,"orders"),order);

        alert("Buyurtmangiz yuborildi ✅");

        form.reset();

    }catch(error){

        console.error(error);

        alert("Xatolik yuz berdi");

    }

});