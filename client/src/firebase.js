// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-mern-22968.firebaseapp.com",
  projectId: "realestate-mern-22968",
  storageBucket: "realestate-mern-22968.appspot.com",
  messagingSenderId: "725788425464",
  appId: "1:725788425464:web:e9a461e1482e50bf0a4f0d",
  measurementId: "G-TJELXT3RHS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);