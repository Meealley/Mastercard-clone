// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import App from "./App";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwYpBQEJK1cMrUQ_nLQjd5KpdDktwwm28",
  authDomain: "mastercard-a7ef8.firebaseapp.com",
  projectId: "mastercard-a7ef8",
  storageBucket: "mastercard-a7ef8.appspot.com",
  messagingSenderId: "724152614005",
  appId: "1:724152614005:web:c8c9df1e36d2e326134c3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

 export const provider = new GoogleAuthProvider();

