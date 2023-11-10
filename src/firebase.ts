import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2mDPEm_VB5lrBjxK63edG7bqFa4neMJ4",
  authDomain: "everyour-c94bd.firebaseapp.com",
  projectId: "everyour-c94bd",
  storageBucket: "everyour-c94bd.appspot.com",
  messagingSenderId: "897603136697",
  appId: "1:897603136697:web:e4e9a831e85b1d7f14ff68",
  measurementId: "G-KMPGFNZL7W",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };