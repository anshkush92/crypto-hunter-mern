import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseConfig from "./config/firebaseConfig";

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp); // For Authentication
export const db = getFirestore(firebaseApp); // For Using Database
