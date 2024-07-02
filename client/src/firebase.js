// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-db0ac.firebaseapp.com",
    projectId: "mern-blog-db0ac",
    storageBucket: "mern-blog-db0ac.appspot.com",
    messagingSenderId: "236275520235",
    appId: "1:236275520235:web:92effa8a89dc07ed6164ae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
