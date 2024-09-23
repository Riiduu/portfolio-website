// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJSJuqjUoGhzzv-bKGGIFWGegRfl4PefM",
    authDomain: "portfolio-website-64cf9.firebaseapp.com",
    projectId: "portfolio-website-64cf9",
    storageBucket: "portfolio-website-64cf9.appspot.com",
    messagingSenderId: "84740835215",
    appId: "1:84740835215:web:5017ccb177df3b0889edfa",
    measurementId: "G-7F4SETL4G5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);

export default db