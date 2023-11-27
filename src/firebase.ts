import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  DocumentReference,
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  getDocs,
} from 'firebase/firestore';

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
  region: '경기 남부' | '경기 북부';
}

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

const usersCollection = collection(db, 'users');
const isEmailValid = async (user: User): Promise<boolean> => {
  const userEmail = user.email;

  if (!userEmail) {
    console.error('이메일 정보를 가져올 수 없습니다.');
    return false;
  }

  try {
    const querySnapshot = await getDocs(usersCollection);
    const userEmails = querySnapshot.docs.map((doc) => doc.data().email);

    if (userEmails.includes(userEmail)) {
      console.log('유효한 이메일입니다. 로그인 성공:', user);
      
      return true;
    } else {
      console.log('유효하지 않은 이메일입니다. 로그인 실패.');
      return false;
    }
  } catch (error) {
    console.error('이메일 유효성을 확인하는 중 오류가 발생했습니다.', error.message || 'Unexpected error');
    return false;
  }
};
const signInWithGoogle = async (): Promise<User | null> => {
  try {
    const result: UserCredential = await signInWithPopup(auth, provider);
    const user = result.user;

    if (user && (await isEmailValid(user))) {
      console.log('로그인 성공:', user);
      return user;
    } else {
      await signOut(auth);
      console.error('로그인 실패: 유효하지 않은 이메일');
      return null;
    }
  } catch (error: any) {
    console.error('로그인 실패:', error.message || 'Unexpected error');
    return null;
  }
};

const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log('로그아웃 성공');
  } catch (error: any) {
    console.error('로그아웃 실패:', error.message || 'Unexpected error');
  }
};
const handleGoogleLogin = async (): Promise<User | null> => {
  try {
    const result: UserCredential = await signInWithPopup(auth, provider);
    const user = result.user;

    if (user && (await isEmailValid(user))) {
      console.log('로그인 성공:', user);
      return user;
    } else {
      await signOut(auth);
      console.error('로그인 실패: 유효하지 않은 이메일');
      return null;
    }
  } catch (error: any) {
    console.error('로그인 실패:', error.message || 'Unexpected error');
    return null;
  }
};
export { auth, provider, db, usersCollection, userConverter, handleGoogleLogin, signInWithGoogle, signOutUser };