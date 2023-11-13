import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
} from "firebase/auth";

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

// Google 로그인 함수
const signInWithGoogle = async () => {
  try {
    const result: UserCredential = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("로그인 성공:", user);
  } catch (error) {
    if (error instanceof Error) {
      console.error("로그인 실패:", error.message);
      // 사용자에게 에러 메시지 표시 등의 추가 작업 가능
    }
  }
};

// 로그아웃 함수
const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("로그아웃 성공");
  } catch (error) {
    if (error instanceof Error) {
      console.error("로그아웃 실패:", error.message);
      // 사용자에게 에러 메시지 표시 등의 추가 작업 가능
    }
  }
};

export { app, auth, provider, signInWithGoogle, signOutUser };
