// firebase-config.js

import { initializeApp } from "firebase/app"; import { getAuth } from "firebase/auth"; import { getFirestore } from "firebase/firestore"; import { getAnalytics } from "firebase/analytics";

const firebaseConfig = { apiKey: "AIzaSyAvN4yUg4EVLaC6Og5cgibi9eOLVv2mWLc", authDomain: "rahl-generator.firebaseapp.com", projectId: "rahl-generator", storageBucket: "rahl-generator.firebasestorage.app", messagingSenderId: "913870848495", appId: "1:913870848495:web:67b15c00386eec6b5df61a", measurementId: "G-FRKC597KR9" };

const app = initializeApp(firebaseConfig); const auth = getAuth(app); const db = getFirestore(app); const analytics = getAnalytics(app);

export { auth, db };

