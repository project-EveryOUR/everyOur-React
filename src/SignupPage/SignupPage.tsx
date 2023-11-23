import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.scss";
import { signInWithGoogle } from "../firebase";
import everyOURLogo from "../assets/logo.svg";
import Backbtn from "../assets/Backbtn.svg";
import { doc, setDoc, DocumentReference } from "firebase/firestore";
import { db, auth } from "../firebase";

interface UserData {
  nickname: string;
  email: string;
  major: string;
  name: string;
  studentId: string;
  univName: string;
}

const SignupPage: React.FC = () => {
  const [Nicknametext, setNicknameText] = useState<string>("");
  const [IDtext, setIDText] = useState<string>("");
  const [PWcontext, setPWconText] = useState<string>("");
  const [Nametext, setNameText] = useState<string>("");
  const [Locationtext, setLocationText] = useState<string>("");
  const [Schooltext, setSchoolText] = useState<string>("");
  const [StudentIDtext, setStudentIDText] = useState<string>("");
  const [Departmenttext, setDepartmentText] = useState<string>("");
  const [SchoolEmailtext, setSchoolEmailText] = useState<string>("");
  const [VerificationCodetext, setVerificationCodeText] = useState<string>("");

  const addUserData = async () => {
    const user = auth.currentUser;

    if (user) {
      const userRef: DocumentReference<UserData> = doc(db, "users", user.uid);

      const userData: UserData = {
        nickname: Nicknametext,
        email: IDtext,
        major: Departmenttext,
        name: Nametext,
        studentId: StudentIDtext,
        univName: Schooltext,
      };

      try {
        await setDoc(userRef, userData);
        console.log("Document successfully written!");
      } catch (error) {
        console.error("Error writing document: ", error);
      }
    } else {
      console.error("로그인이 필요합니다.");
    }
  };

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate("/");
    });
  };
  const goBack = () => {
    navigate(-1);
  };
  const NicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) {
      setNicknameText(e.target.value);
    }
  };
  const IDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 50) {
      setIDText(e.target.value);
    }
  };

  const NameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8) {
      setNameText(e.target.value);
    }
  };
  const LocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 16) {
      setLocationText(e.target.value);
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
  const SchoolEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 50) {
      setSchoolEmailText(e.target.value);
    }
  };
  const VerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) {
      setVerificationCodeText(e.target.value);
    }
  };

  return (
    <div className="SignupFrame">
      <Link to={"/"}>
        <img
          src={everyOURLogo}
          alt="everyOUR 메인 로고"
          className="everyOUR__Logo"
        />
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
      <input
        className="SignupFrame__IDtext"
        type="text"
        value={IDtext}
        onChange={IDChange}
      />

      <input
        className="SignupFrame__Nametext"
        type="text"
        value={Nametext}
        onChange={NameChange}
      />

      <select className="SignupFrame__Locationtext">
        <option>경기남부</option>
        <option>경기북부</option>
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
      <img
        src={Backbtn}
        alt="Backbtn"
        className="SignupFrame__Backbtn"
        onClick={goBack}
      />
      <div className="SignupFrame__Submitbtn" onClick={addUserData}>
        Sign-Up
      </div>
    </div>
  );
};

export default SignupPage;
