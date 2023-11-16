import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
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
