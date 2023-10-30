import React, { useState } from "react";
import "./SettingsPage.scss";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const SettingsPage: React.FC = () => {
  // 다크 모드 설정을 로컬 스토리지에서 읽어옵니다.
  const isDarkModeStored = localStorage.getItem("darkMode");
  const [isDarkMode, setIsDarkMode] = useState(isDarkModeStored === "true");

  const handleDarkModeToggle = () => {
    // 토글 버튼을 누를 때, 다크 모드 설정을 업데이트하고 로컬 스토리지에 저장합니다.
    const newDarkMode = !isDarkMode;
    localStorage.setItem("darkMode", newDarkMode.toString());
    setIsDarkMode(newDarkMode);

    document.body.classList.toggle("dark-mode", newDarkMode);
  };

  return (
    <div className="settingspage">
      <h1 className="settingspage__settings-title">설정</h1>
      {/* 내용을 추가할 수 있습니다 */}
      <div className="settingspage__gray-box-1">
        <Profile />
        <p className="settingspage__gray-box-1__userinfo">
          김수아(suaring) <br />
          경기남부 한세대 컴공 20
        </p>
      </div>
      <div className="settingspage__gray-box-2">
        <p className="settingspage__gray-box-2__myinfo">내 정보</p>

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
        <p className="settingspage__gray-box-3__accset">계정 설정</p>
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
      <Link to={"/"}>
        <button className="settingspage__resetBtn">이전</button>
      </Link>
    </div>
  );
};

export default SettingsPage;
