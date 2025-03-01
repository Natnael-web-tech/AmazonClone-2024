import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ7h1V02LZUQ6TKh8fTi_a8IJZyjhCFHo",
  authDomain: "clone-2d68f.firebaseapp.com",
  projectId: "clone-2d68f",
  storageBucket: "clone-2d68f.firebasestorage.app",
  messagingSenderId: "552769282246",
  appId: "1:552769282246:web:e015b2fa109c25f19337c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//  Export Auth and Firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app); 