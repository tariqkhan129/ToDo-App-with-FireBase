// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Ug0F8G-J8Aydvp7OR-3Zk_uvT03irms",
  authDomain: "todo-app-bae32.firebaseapp.com",
  projectId: "todo-app-bae32",
  storageBucket: "todo-app-bae32.appspot.com",
  messagingSenderId: "48485969736",
  appId: "1:48485969736:web:91fb93fd32a6d9cd8f4d7d",
  measurementId: "G-H0EVYN09YH"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export  const db = getFirestore(app);