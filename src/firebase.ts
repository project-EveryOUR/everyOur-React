import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  DocumentReference,
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
} from "firebase/firestore";

type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

const firebaseConfig: FirebaseConfig = {
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
const db = getFirestore(app);

interface UserData {
  nickname: string;
  email: string;
  major: string;
  name: string;
  studentId: string;
  univName: string;
  region: "경기 남부" | "경기 북부";
}
interface PostData {
  content: string;
  createAt: Date;
  title: string;
  updateAt: Date;
  comCnt: number;
  likeCnt: number;
  views: number;
}
interface PostInData {
  content: string;
  createAt: Date;
  updateAt: Date;
}
const postInConverter: FirestoreDataConverter<PostInData> = {
  toFirestore(user: PostInData): DocumentData {
    return { ...user };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options: FirestoreDataConverter.Options
  ): PostInData {
    const data = snapshot.data(options);
    return {
      content: data.content,
      createAt: data.createAt,
      updateAt: data.updateAt,
    };
  },
};
const postConverter: FirestoreDataConverter<PostData> = {
  toFirestore(user: PostData): DocumentData {
    return { ...user };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options: FirestoreDataConverter.Options
  ): PostData {
    const data = snapshot.data(options);
    return {
      comCnt: data.comCnt,
      likeCnt: data.likeCnt,
      views: data.views,
      content: data.content,
      createAt: data.createAt,
      title: data.title,
      updateAt: data.updateAt,
    };
  },
};
const userConverter: FirestoreDataConverter<UserData> = {
  toFirestore(user: UserData): DocumentData {
    return { ...user };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options: FirestoreDataConverter.Options
  ): UserData {
    const data = snapshot.data(options);
    return {
      nickname: data.nickname,
      email: data.email,
      major: data.major,
      name: data.name,
      studentId: data.studentId,
      univName: data.univName,
      region: data.region,
    };
  },
};

const usersCollection = collection(db, "users");

const signInWithGoogle = async (): Promise<User | null> => {
  try {
    const result: UserCredential = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("로그인 성공:", user);
    return user;
  } catch (error: any) {
    console.error("로그인 실패:", error.message || "Unexpected error");
    return null;
  }
};

const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log("로그아웃 성공");
  } catch (error: any) {
    console.error("로그아웃 실패:", error.message || "Unexpected error");
  }
};

export { auth, provider, db, usersCollection, userConverter };
export { signInWithGoogle, signOutUser };