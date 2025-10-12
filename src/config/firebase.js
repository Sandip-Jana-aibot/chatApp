import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  /* your config */ apiKey: "AIzaSyCvgYqixQnopf708hKNRrKK-7-Kg9bcydI",
  authDomain: "chatapp-94036.firebaseapp.com",
  projectId: "chatapp-94036",
  storageBucket: "chatapp-94036.firebasestorage.app",
  messagingSenderId: "822859981389",
  appId: "1:822859981389:web:b75070aad697799e697204",
  measurementId: "G-M48B9LR5M8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
