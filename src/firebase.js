// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Iegq1XtU6x0FMJaeQSxw58AJMeW_fvg",
  authDomain: "disneyplus-clone-35805.firebaseapp.com",
  projectId: "disneyplus-clone-35805",
  storageBucket: "disneyplus-clone-35805.appspot.com",
  messagingSenderId: "90514306747",
  appId: "1:90514306747:web:8eb9524df230032c049b9e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const provider = new GoogleAuthProvider();
const db = getFirestore();
// const app = firebase.initializeApp(firebaseConfig);
// const db = app.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
export default db;
