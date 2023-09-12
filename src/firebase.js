// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrQ5wFEmxmb2ufLR92u8Pf03XnzbJfD40",
  authDomain: "meesho-bb4be.firebaseapp.com",
  projectId: "meesho-bb4be",
  storageBucket: "meesho-bb4be.appspot.com",
  messagingSenderId: "33205164699",
  appId: "1:33205164699:web:76c07b04a927559b1cc43e",
  measurementId: "G-86LDENJKKR"

  
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
