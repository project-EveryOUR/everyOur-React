import React, { useState, useEffect } from "react"; // Add useEffect import
import "./SettingsPage.scss";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Backbtn from "../assets/Backbtn.svg";
import everyOURLogo from "../assets/logo.svg";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { auth, db } from "../firebase"; // Assuming you have a firebase file with auth export
import {
  Firestore,
  QuerySnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "@firebase/firestore";

const SettingsPage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState<any>(null);
  const [region, setRegion] = useState<any>(null);
  const [studentId, setStudentId] = useState<any>(null);
  const [univName, setUnivName] = useState<any>(null);
  const [nickname, setNickname] = useState<any>(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User:", currentUser);
      const userData = currentUser ? currentUser.toJSON() : null;
      console.log("User Data:", userData);
      setUser(userData);
      console.log(userData?.uid);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);
  const fetchData = async () => {
    if (user && user.uid) {
      const collectionRef = collection(db, "users"); // users 컬렉션 참조
      const docRef = doc(collectionRef, user.uid); // 해당 사용자의 문서 참조

      try {
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          console.log(userData);
          console.log(userData.name);

          // 상태 업데이트가 이 부분에서 이루어져야 합니다.

          setName(userData.name || "");
          setRegion(userData.region || "");
          setStudentId(userData.studentId || "");
          setUnivName(userData.univName || "");
          setNickname(userData.nickname || "");
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    } else {
      return []; // user가 null이거나 uid가 없는 경우 빈 배열 반환
    }
  };

  useEffect(() => {
    const getData = async () => {
      await fetchData();
      // fetchData는 이미 setState를 통해 값을 설정하므로 따로 setData로 설정할 필요가 없습니다.
    };
    getData();
  }, [user]);

  const isDarkModeStored = localStorage.getItem("darkMode");
  const [isDarkMode, setIsDarkMode] = useState(isDarkModeStored === "true");

  const handleDarkModeToggle = () => {
    const newDarkMode = !isDarkMode;
    localStorage.setItem("darkMode", newDarkMode.toString());
    setIsDarkMode(newDarkMode);

    document.body.classList.toggle("dark-mode", newDarkMode);
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="settingspage">
      <Link to={"/"}>
        <img src={everyOURLogo} alt="everyOURLogo" className="usepage__Logo" />
      </Link>
      <img
        src={Backbtn}
        alt="Backbtn"
        className="usepage__Backbtn"
        onClick={goBack}
      />
      <h1 className="settingspage__settings-title">계정 설정</h1>
      {user ? (
        <div className="settingspage__gray-box-1">
          <p className="settingspage__gray-box-1__userinfo">
            <br />
            {name || ""} ({nickname || ""})
            <br />
          </p>
          <p className="settingspage__gray-box-1__userinfo">
            {univName || ""} {region || ""}
          </p>
        </div>
      ) : (
        <div className="settingspage__gray-box-1">
          <p className="settingspage__gray-box-1__userinfo">loading...</p>
          <p className="settingspage__gray-box-1__userinfo"></p>
        </div>
      )}
      <div className="settingspage__gray-box-2">
        <div className="settingspage__gray-box-2__myinfo">내 정보</div>

        <Link to={"/mypost"}>
          <p className="settingspage__gray-box-2__myinfo__mypost">내가 쓴 글</p>
        </Link>

        <Link to={"/myreply"}>
          <p className="settingspage__gray-box-2__myinfo__myreply">
            내가 쓴 댓글
          </p>
        </Link>

        <Link to={"/mylike"}>
          <p className="settingspage__gray-box-2__myinfo__mylikes">
            내가 좋아요 누른 글
          </p>
        </Link>
      </div>
      <div className="settingspage__gray-box-3">
        <div className="settingspage__gray-box-3__accset">계정 설정</div>
        <Link to={"/univshift"}>
          <p className="settingspage__gray-box-3__univset">학교 설정</p>
        </Link>

        <Link to={"/pw"}>
          <p className="settingspage__gray-box-3__pwshift">비밀번호 변경</p>
        </Link>

        <Link to={"/Email"}>
          <p className="settingspage__emailshift">이메일 변경</p>
        </Link>

        <Link to={"/nickname"}>
          <p className="settingspage__gray-box-3__nicknameshift">닉네임 변경</p>
        </Link>

        <Link to={"/leave"}>
          <p className="settingspage__gray-box-3__leave">탈퇴</p>
        </Link>
      </div>
      <div className="settingspage__gray-box-4">
        <p className="settingspage__gray-box-4__sysset">시스템 설정</p>
        <div className="settingspage__gray-box-4__dark-wrap">
          <p className="settingspage__gray-box-4__dark-wrap__darkset">
            다크 모드
          </p>
          <button
            className={`settingspage__gray-box-4__dark-wrap__ToggleBtn ${
              isDarkMode ? "active" : ""
            }`}
            onClick={handleDarkModeToggle}
          ></button>
        </div>

        <div className="settingspage__gray-box-4__cache-wrap">
          <p className="settingspage__gray-box-4__cache-wrap__cache">
            캐시 관리
          </p>
          <button
            className="settingspage__gray-box-4__cache-wrap__cachedel"
            onClick={() => alert("캐시가 삭제되었습니다.")}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
