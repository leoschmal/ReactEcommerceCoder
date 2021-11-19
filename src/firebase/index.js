import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHmaF3Q8zzFW-P3uukOPY1ZWN-OgWlUbw",
  authDomain: "coder-ecommerce-1d3eb.firebaseapp.com",
  projectId: "coder-ecommerce-1d3eb",
  storageBucket: "coder-ecommerce-1d3eb.appspot.com",
  messagingSenderId: "384632938572",
  appId: "1:384632938572:web:86f22fa9268b47c95494e9"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };


