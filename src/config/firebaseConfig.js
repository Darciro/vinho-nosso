import { initializeApp } from 'firebase/app';
// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD0yKixVWITioiT4FgRhXE0DlkWuTjJ7Ko",
    authDomain: "vinho-nosso.firebaseapp.com",
    databaseURL: "https://vinho-nosso-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vinho-nosso",
    storageBucket: "vinho-nosso.appspot.com",
    messagingSenderId: "1082453784149",
    appId: "1:1082453784149:web:60e750a297b6ab1041c6dc",
    measurementId: "G-DRWJJVCHH0"
};

initializeApp(firebaseConfig);