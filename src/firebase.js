// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlXsTFO8joyoDE5dTJ7BSJ3eoCxTV808s",
  authDomain: "meesho-kitto.firebaseapp.com",
  databaseURL: "https://stock-collection-4e8cf-default-rtdb.firebaseio.com",
  projectId: "meesho-kitto",
  storageBucket: "meesho-kitto.appspot.com",
  messagingSenderId: "280889992758",
  appId: "1:280889992758:web:1a45a74d8be59b4d5f9a97",
  measurementId: "G-8YYJ04X1SZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();