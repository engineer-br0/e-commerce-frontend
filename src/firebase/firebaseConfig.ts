// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUnLHndnN25AqAYAd86D5GwfTFFATQ3fc",
  authDomain: "e-commerce-a2d24.firebaseapp.com",
  projectId: "e-commerce-a2d24",
  storageBucket: "e-commerce-a2d24.appspot.com",
  messagingSenderId: "1036904848387",
  appId: "1:1036904848387:web:1e58b278dce9817f0f0236",
  measurementId: "G-YZT2YK7SG9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
