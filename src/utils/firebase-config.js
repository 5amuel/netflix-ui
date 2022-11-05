// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyABU3SpIHHpibxW6bBa5O2VFfcaxkqDieg",
  authDomain: "react-netflix-clone-468fa.firebaseapp.com",
  projectId: "react-netflix-clone-468fa",
  storageBucket: "react-netflix-clone-468fa.appspot.com",
  messagingSenderId: "1066778080678",
  appId: "1:1066778080678:web:778c85c7838f00935ccb67",
  measurementId: "G-TMY5KC5L7Z"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)