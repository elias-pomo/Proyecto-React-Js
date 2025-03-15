import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLsUrH4SZ8kdJgpmyjBGRE6LzkQDc7KFM",
  authDomain: "eccove-shoes.firebaseapp.com",
  projectId: "eccove-shoes",
  storageBucket: "eccove-shoes.firebasestorage.app",
  messagingSenderId: "931892835302",
  appId: "1:931892835302:web:7829c32a4f88ac83f7dc27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);