import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.scss";
import everyOURLogo from "../assets/logo.svg";
import Backbtn from "../assets/Backbtn.svg";
import { getFirestore, 
  collection, 
  doc, 
  setDoc, 
  DocumentReference, 
  FirestoreDataConverter, 
  QueryDocumentSnapshot, 
  DocumentData,
} from 'firebase/firestore';
import {
  signInWithGoogle,
  auth,
  provider,
  db,
  usersCollection,
  userConverter,
  signOutUser,
} from '../firebase';
interface UserData {
  nickname: string;
  email: string;
  major: string;
  name: string;
  studentId: string;
  univName: string;
  region: "경기 남부" | "경기 북부";
}

const SignupPage: React.FC = () => {
  const [Nicknametext, setNicknameText] = useState<string>("");
  const [Nametext, setNameText] = useState<string>("");
  const [Schooltext, setSchoolText] = useState<string>("");
  const [StudentIDtext, setStudentIDText] = useState<string>("");
  const [Departmenttext, setDepartmentText] = useState<string>("");
  const [region, setRegion] = useState<"경기 남부" | "경기 북부">("경기 남부");
  const userConverter: FirestoreDataConverter<UserData> = {
    toFirestore(user: UserData): DocumentData {
      return { ...user };
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot<DocumentData>,
      options: firebase.firestore.SnapshotOptions
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
  
  const navigate = useNavigate();
  const user = auth.currentUser;
  const addUserData = async () => {
    if (user) {
      const userRef: DocumentReference<UserData> = doc(usersCollection, user.uid).withConverter(userConverter);
      const userData: UserData = {
        nickname: Nicknametext,
        email: user.email || '',
        major: Departmenttext,
        name: Nametext,
        studentId: StudentIDtext,
        univName: Schooltext,
        region: region,
      };

      try {
        await setDoc(userRef, userData);
        console.log("회원가입 완료");
        navigate(`/loginpage/${region.toLowerCase()}`);
      } catch (error) {
        console.error("error", error);
      }}
    };
  


  const goBack = () => {
    navigate(-1);
  };

  const NicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) {
      setNicknameText(e.target.value);
    }
  };

  const NameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8) {
      setNameText(e.target.value);
    }
  };

  const SchoolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8) {
      setSchoolText(e.target.value);
    }
  };
  const StudentIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 12) {
      setStudentIDText(e.target.value);
    }
  };
  const DepartmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 12) {
      setDepartmentText(e.target.value);
    }
  };
  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value as "경기 남부" | "경기 북부");
  };

  return (
    <div className="SignupFrame">
      <Link to={"/"}>
        <img src={everyOURLogo} alt="everyOUR 메인 로고" className="everyOUR__Logo" />
      </Link>
      <div className="SignupFrame__SignUpbanner" onClick={addUserData}>
        Sign-Up
      </div>
      <div className="SignupFrame__InterFrame"></div>
      <div className="SignupFrame__Nickname">닉네임</div>
      <div className="SignupFrame__ID">Gmail</div>
      <div className="SignupFrame__Name">이름</div>
      <div className="SignupFrame__Location">지역</div>
      <div className="SignupFrame__School">학교</div>
      <div className="SignupFrame__StudentID">학번</div>
      <div className="SignupFrame__Department">학과</div>

      <input
        className="SignupFrame__Nicknametext"
        type="text"
        value={Nicknametext}
        onChange={NicknameChange}
      />
      <div className="SignupFrame__IDtext">{user?.email || 'No email available'}</div>

      <input className="SignupFrame__Nametext" type="text" value={Nametext} onChange={NameChange} />

      <select
        className="SignupFrame__Locationtext"
        value={region}
        onChange={handleRegionChange}
      >
        <option value="경기 남부">경기 남부</option>
        <option value="경기 북부">경기 북부</option>
      </select>

      <input
        className="SignupFrame__Schooltext"
        type="text"
        value={Schooltext}
        onChange={SchoolChange}
      />
      <input
        className="SignupFrame__StudentIDtext"
        type="number"
        value={StudentIDtext}
        onChange={StudentIDChange}
      />
      <input
        className="SignupFrame__Departmenttext"
        type="text"
        value={Departmenttext}
        onChange={DepartmentChange}
      />
      <img src={Backbtn} alt="Backbtn" className="SignupFrame__Backbtn" onClick={goBack} />
      <div className="SignupFrame__Submitbtn" onClick={addUserData}>
        Sign-Up
      </div>
    </div>
  );
};

export default SignupPage;