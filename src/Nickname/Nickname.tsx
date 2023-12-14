import React, { useState, useEffect } from "react";
import "./Nickname.scss";
import Backbtn from "../assets/Backbtn.svg";
import { Link, useNavigate } from "react-router-dom";
import everyOURLogo from "../assets/logo.svg";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Nickname = () => {
  const [newNickname, setNewNickname] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // 사용자의 인증 상태 변화를 감지
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // 사용자가 로그인한 경우, UID를 가져와서 상태 업데이트
        setUserId(user.uid);
      }
    });

    // 컴포넌트가 언마운트되면 감지 해제
    return () => unsubscribe();
  }, []);

  const [userId, setUserId] = useState("");

  const handleButtonClick = async () => {
    if (!userId) {
      // 사용자 ID가 없으면 처리 중지
      return;
    }

    // Firestore 컬렉션과 문서 ID 설정
    const collectionName = "users";

    // Firestore 문서 업데이트
    const docRef = doc(getFirestore(), collectionName, userId);
    await updateDoc(docRef, {
      nickname: newNickname,
    });

    alert("수정되었습니다");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="nickname">
      <Link to={"/"}>
        <img src={everyOURLogo} alt="everyOURLogo" className="Langset__Logo" />
      </Link>
      <img
        src={Backbtn}
        alt="Backbtn"
        className="nickname__Backbtn"
        onClick={goBack}
      />
      <h2 className="nickname__nickname-title">닉네임 변경</h2>
      <div className="nickname__nickname-new">
        새 닉네임:
      </div>
      <div className="nickname__nickname-input">
        <div className="nickname__nickname-input__nickname-group">
          <input
            type="text"
            placeholder="새 닉네임을 입력하세요"
            value={newNickname}
            onChange={(e) => setNewNickname(e.target.value)}
          />
        </div>
      </div>
      <button className="nickname__nickname-btnn"onClick={handleButtonClick}>수정</button>
      <button className="nickname__nickname-btn">완료</button>
    </div>
  );
};

export default Nickname;