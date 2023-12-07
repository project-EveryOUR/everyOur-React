import React, { useEffect, useState } from "react";
import "./UnivShift.scss";
import Backbtn from "../assets/Backbtn.svg";
import { Link, useNavigate } from "react-router-dom";
import everyOURLogo from "../assets/logo.svg";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const UnivShift = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
        alert("로그인이 필요합니다.");
        navigate("/loginpage"); // 로그인 페이지로 리디렉션
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Firebase에서 univName을 업데이트하는 함수
  const post = auth.currentUser;
  const userUid = post ? post.uid : null;
  const [newUniversityName, setNewUniversityName] = useState<string>("");
  const [newMajor, setNewMajor] = useState<string>("");
  const [newStudentId, setNewStudentId] = useState<string>("");
  // Firebase에서 각 필드를 업데이트하는 함수
  const updateFields = async (userUid, data) => {
    try {
      const userRef = doc(db, "users", userUid);

      await updateDoc(userRef, data);

      console.log("필드 업데이트 완료");
    } catch (error) {
      console.error("필드 업데이트 중 오류 발생:", error);
    }
  };

  const handleUniversityInputChange = (e) => {
    setNewUniversityName(e.target.value);
  };

  const handleMajorInputChange = (e) => {
    setNewMajor(e.target.value);
  };

  const handleStudentIdInputChange = (e) => {
    setNewStudentId(e.target.value);
  };

  const handleUniversityButtonClick = () => {
    updateFields(userUid, { univName: newUniversityName });
    alert("대학명이 수정되었습니다");
    setNewUniversityName("");
  };

  const handleMajorButtonClick = () => {
    updateFields(userUid, { major: newMajor });
    alert("학과가 수정되었습니다");
    setNewMajor("");
  };

  const handleStudentIdButtonClick = () => {
    updateFields(userUid, { studentId: newStudentId });
    alert("학번이 수정되었습니다");
    setNewStudentId("");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="univshift">
      <Link to={"/"}>
        <img src={everyOURLogo} alt="everyOURLogo" className="Langset__Logo" />
      </Link>
      <h2 className="univshift__univ-title">학교 설정</h2>

      <div className="univshift__univ-container">
        <div className="univshift__univ-container__univ-menual">
          학교 변경은 변경된 학교의 이메일 인증 후 자동으로 변경됩니다. <br />
          문의 사항은 031-123-234으로 해주세요.
          <br />
        </div>
        <div className="univshift__univ-container__univ-form">
          <p>학교 변경 : </p>
          <input
            className="univshift__univ-container__univ-form__univ-input"
            type="text"
            placeholder="대학명을 입력하세요"
            value={newUniversityName} // 입력값과 상태를 바인딩합니다
            onChange={handleUniversityInputChange} // 입력값 변경 시 상태 업데이트
          />
          <button
            className="univshift__univ-container__univ-form__univ-okbtn"
            onClick={handleUniversityButtonClick} // 버튼 클릭 시 univName 업데이트
          >
            인증
          </button>
        </div>
        <div className="univshift__univ-container__univ-form">
          <p>학과 변경 : </p>
          <input
            className="univshift__univ-container__univ-form__univ-major"
            type="text"
            placeholder="학과를 입력하세요"
            value={newMajor}
            onChange={handleMajorInputChange}
          />
          <button
            className="univshift__univ-container__univ-form__univ-modibtn"
            onClick={handleMajorButtonClick}
          >
            수정
          </button>
        </div>
        <div className="univshift__univ-container__univ-form">
          <p>학번 변경 : </p>
          <input
            className="univshift__univ-container__univ-form__univ-id"
            type="text"
            placeholder="학번을 입력하세요"
            value={newStudentId}
            onChange={handleStudentIdInputChange}
          />
          <button
            className="univshift__univ-container__univ-form__univ-modibtn"
            onClick={handleStudentIdButtonClick}
          >
            수정
          </button>
        </div>
      </div>
      <img
        src={Backbtn}
        alt="Backbtn"
        className="univshift__Backbtn"
        onClick={goBack}
      />
      <button className="univshift__univ-btn">완료</button>
    </div>
  );
};

export default UnivShift;
