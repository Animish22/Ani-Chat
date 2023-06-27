import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "anichat-1f4ba.firebaseapp.com",
  projectId: "anichat-1f4ba",
  storageBucket: "anichat-1f4ba.appspot.com",
  messagingSenderId: "179419858725",
  appId: "1:179419858725:web:97c6e40ae8e419fac87ccc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
