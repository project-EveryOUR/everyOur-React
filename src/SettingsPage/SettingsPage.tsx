import React, { useState, useEffect } from "react"; // Add useEffect import
import "./SettingsPage.scss";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Backbtn from "../assets/Backbtn.svg";
import everyOURLogo from "../assets/logo.svg";
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { auth } from '../firebase'; // Assuming you have a firebase file with auth export

const SettingsPage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const auth = getAuth();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        onAuthStateChanged(auth, (currentUser) => {
          console.log('Current User:', currentUser);
          
          const userData = currentUser ? currentUser.toJSON() : null;
          console.log('User Data:', userData);
          
          setUser(userData);
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUserData();
  }, [auth]);

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
        <img
          src={everyOURLogo}
          alt="everyOURLogo"
          className="usepage__Logo"
        />
      </Link>
      <img src={Backbtn} alt="Backbtn" className="usepage__Backbtn" onClick={goBack} />
      <h1 className="settingspage__settings-title">계정 설정</h1>
      <div className="settingspage__gray-box-1">
      <p className="settingspage__gray-box-1__userinfo">
  <br />{user?.lastLoginAt || ''} ({user?.uid || ''})<br />
</p>
<p className="settingspage__gray-box-1__userinfo">
  {user?.region || ''} {user?.displayName || ''} {user?.studentId || ''}
</p>

      </div>
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
