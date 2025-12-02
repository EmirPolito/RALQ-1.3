// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVVRJG1PGWBXkBCadR-qhiiWTGkikzlnY",
  authDomain: "ralq-1ee4b.firebaseapp.com",
  projectId: "ralq-1ee4b",
  storageBucket: "ralq-1ee4b.firebasestorage.app",
  messagingSenderId: "919603618766",
  appId: "1:919603618766:web:4b251d9c6f15ed887f019f",
  measurementId: "G-F4P71ZT3C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);