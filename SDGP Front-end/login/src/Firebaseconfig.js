// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyutESQe6BMu91u_k5DX-96jLCDgqeX34",
  authDomain: "cognicareplus-2d289.firebaseapp.com",
  projectId: "cognicareplus-2d289",
  storageBucket: "cognicareplus-2d289.appspot.com",
  messagingSenderId: "110548324407",
  appId: "1:110548324407:web:d04310e2f78d54d7b56fb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);