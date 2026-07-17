// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyDwMplqsFqFAZz5XgmQWN_An9Q_9hLNjeU",

    authDomain: "greenleaf-pro.firebaseapp.com",

    projectId: "greenleaf-pro",

    storageBucket: "greenleaf-pro.firebasestorage.app",

    messagingSenderId: "634132357460",

    appId: "1:634132357460:web:afc6e37ad95be7fb21e8c1"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };