// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnX6LoE9zR3_Ccu9iWi31r5Oa5Max6ozk",
    authDomain: "blissful-cravings.firebaseapp.com",
    projectId: "blissful-cravings",
    storageBucket: "blissful-cravings.appspot.com",
    messagingSenderId: "323667781642",
    appId: "1:323667781642:web:e0e81b70bf1c2df0e2d7f3",
    measurementId: "G-QSNWLMSLHD"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);