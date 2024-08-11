import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjTZ3QEODx2gTvE-lQrI2ejE5iWOY1Vvo",
    authDomain: "notion-clone-1f672.firebaseapp.com",
    projectId: "notion-clone-1f672",
    storageBucket: "notion-clone-1f672.appspot.com",
    messagingSenderId: "186492887944",
    appId: "1:186492887944:web:cedc59b0f04cb2b56f503d"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export {db}