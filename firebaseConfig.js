import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlGFOV_eqn5rw_nSsFnFn2X_uJNx21BKs",
  authDomain: "fir-cf8b4.firebaseapp.com",
  projectId: "fir-cf8b4",
  storageBucket: "fir-cf8b4.appspot.com",
  messagingSenderId: "214129927870",
  appId: "1:214129927870:web:a27ce79707120165ad20ef",
  measurementId: "G-6R4LB3X388"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)


export  { db, auth }

