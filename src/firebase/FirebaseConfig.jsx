// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "e-commerce-app-45f1d.firebaseapp.com",
  projectId: "e-commerce-app-45f1d",
  storageBucket: "e-commerce-app-45f1d.appspot.com",
  messagingSenderId: "587716665696",
  appId: "1:587716665696:web:334ec9cc3af35a7045fe05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;