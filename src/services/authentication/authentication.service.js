// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcInD3zDLAfau8COt8CrfZleq1XSOz29U",
  authDomain: "mealstogo-2af32.firebaseapp.com",
  projectId: "mealstogo-2af32",
  storageBucket: "mealstogo-2af32.appspot.com",
  messagingSenderId: "1005770049477",
  appId: "1:1005770049477:web:99f64503629cedd34cadac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
