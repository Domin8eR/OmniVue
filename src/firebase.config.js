import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { GoogleAuthProvider, getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD9hBN6iUPU2jVqDhC12hLoW334afy2Pw",
  authDomain: "omnivuenew.firebaseapp.com",
  projectId: "omnivuenew",
  storageBucket: "omnivuenew.appspot.com",
  messagingSenderId: "493782488066",
  appId: "1:493782488066:web:badd765610f167c3dd031b"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const firestore = getFirestore(app);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
