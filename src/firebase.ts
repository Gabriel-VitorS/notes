// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnCP56xlq2xGyHZQVfcR8g2CLYqB9A9L4",
  authDomain: "notes-f5386.firebaseapp.com",
  projectId: "notes-f5386",
  storageBucket: "notes-f5386.firebasestorage.app",
  messagingSenderId: "1046791250425",
  appId: "1:1046791250425:web:b8427224b32a54a2ca9d28"
};


const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export {firebaseApp, auth, db}