// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB1GBWTzFslqr_aofeJo0IottujGnFeW84",
    authDomain: "evstationlocator-fb402.firebaseapp.com",
    projectId: "evstationlocator-fb402",
    storageBucket: "evstationlocator-fb402.appspot.com",
    messagingSenderId: "13780205679",
    appId: "1:13780205679:web:6cbce4de5a469fa0658d9a",
    measurementId: "G-QFMZQNY7W8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };