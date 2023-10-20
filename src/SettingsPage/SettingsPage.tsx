import React, { useState } from "react";
import "./SettingsPage.scss";

interface SettingsPageProps {
  title?: string;
}

const CacheModal = ({ message, onCancel, onDelete }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p className="modal-msg">{message}</p>
        <button className="modal-btn" onClick={onDelete}>
          삭제
        </button>
        <button className="modal-btn" onClick={onCancel}>
          취소
        </button>
      </div>
    </div>
  );
};

const SettingsPage: React.FC<SettingsPageProps> = (props) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [pushNotificationEnabled, setPushNotificationEnabled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDelete = () => {
    // 여기에서 캐시를 삭제하는 로직을 추가할 수 있습니다.

    // 삭제가 완료된 후, 모달을 닫을 수 있습니다.
    setIsModalVisible(false);

    // 삭제 완료 메시지를 표시합니다.
    alert("캐시가 삭제되었습니다.");
  };

  const handleOpenModal = () => {
    // 모달을 열기 위한 함수
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    // 모달을 닫기 위한 함수
    setIsModalVisible(false);
  };

  return (
    <div className="position-relative">
      {/* .position-relative 클래스 추가 */}

      <h1 className="settings-title">{props.title || "Settings"}</h1>
      {/* 내용을 추가할 수 있습니다 */}
      <div className="gray-box-1">
        <svg
          width="80"
          height="70"
          viewBox="0 0 70 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ float: "left", marginTop: "20px", marginLeft: "15px" }}
        >
          <path
            d="M13.3146 45.9292C16.2542 43.9521 19.5396 42.3932 23.1708 41.2526C26.8021 40.112 30.6062 39.5417 34.5833 39.5417C38.5604 39.5417 42.3646 40.112 45.9958 41.2526C49.6271 42.3932 52.9125 43.9521 55.8521 45.9292C57.8694 43.8507 59.4401 41.4934 60.5641 38.8573C61.688 36.2212 62.25 33.4076 62.25 30.4167C62.25 23.6743 59.5554 17.9332 54.1661 13.1932C48.7769 8.4533 42.2493 6.08333 34.5833 6.08333C26.9174 6.08333 20.3898 8.4533 15.0005 13.1932C9.61128 17.9332 6.91667 23.6743 6.91667 30.4167C6.91667 33.4076 7.47865 36.2212 8.6026 38.8573C9.72656 41.4934 11.2972 43.8507 13.3146 45.9292ZM34.5833 33.4583C31.1826 33.4583 28.3151 32.4318 25.9807 30.3786C23.6464 28.3255 22.4792 25.8035 22.4792 22.8125C22.4792 19.8215 23.6464 17.2995 25.9807 15.2464C28.3151 13.1932 31.1826 12.1667 34.5833 12.1667C37.984 12.1667 40.8516 13.1932 43.1859 15.2464C45.5203 17.2995 46.6875 19.8215 46.6875 22.8125C46.6875 25.8035 45.5203 28.3255 43.1859 30.3786C40.8516 32.4318 37.984 33.4583 34.5833 33.4583ZM34.5833 60.8333C29.7993 60.8333 25.3035 60.0349 21.0958 58.438C16.8882 56.8411 13.2281 54.674 10.1156 51.9365C7.00312 49.199 4.53906 45.9799 2.72344 42.2792C0.907812 38.5785 0 34.6243 0 30.4167C0 26.209 0.907812 22.2549 2.72344 18.5542C4.53906 14.8535 7.00312 11.6344 10.1156 8.89688C13.2281 6.15938 16.8882 3.99219 21.0958 2.39531C25.3035 0.798437 29.7993 0 34.5833 0C39.3674 0 43.8632 0.798437 48.0708 2.39531C52.2785 3.99219 55.9385 6.15938 59.051 8.89688C62.1635 11.6344 64.6276 14.8535 66.4432 18.5542C68.2589 22.2549 69.1667 26.209 69.1667 30.4167C69.1667 34.6243 68.2589 38.5785 66.4432 42.2792C64.6276 45.9799 62.1635 49.199 59.051 51.9365C55.9385 54.674 52.2785 56.8411 48.0708 58.438C43.8632 60.0349 39.3674 60.8333 34.5833 60.8333ZM34.5833 54.75C37.6382 54.75 40.5201 54.3571 43.2292 53.5714C45.9382 52.7856 48.4167 51.6576 50.6646 50.1875C48.4167 48.7174 45.9382 47.5894 43.2292 46.8036C40.5201 46.0179 37.6382 45.625 34.5833 45.625C31.5285 45.625 28.6465 46.0179 25.9375 46.8036C23.2285 47.5894 20.75 48.7174 18.5021 50.1875C20.75 51.6576 23.2285 52.7856 25.9375 53.5714C28.6465 54.3571 31.5285 54.75 34.5833 54.75ZM34.5833 27.375C36.0819 27.375 37.3212 26.9441 38.301 26.0823C39.2809 25.2205 39.7708 24.1306 39.7708 22.8125C39.7708 21.4944 39.2809 20.4045 38.301 19.5427C37.3212 18.6809 36.0819 18.25 34.5833 18.25C33.0847 18.25 31.8455 18.6809 30.8656 19.5427C29.8858 20.4045 29.3958 21.4944 29.3958 22.8125C29.3958 24.1306 29.8858 25.2205 30.8656 26.0823C31.8455 26.9441 33.0847 27.375 34.5833 27.375Z"
            fill="#C5C5C5"
          />
        </svg>
        <p className="userinfo">김수아(suaring)</p>
        <p className="univinfo">경기남부 한세대 컴공 20</p>
      </div>
      <div className="gray-box-2">
        <p className="myinfo">내 정보</p>

        <p className="mypost">내가 쓴 글</p>

        <p className="myreply">내가 쓴 댓글</p>

        <p className="mylike">내가 좋아요 누른 글</p>
      </div>
      <div className="gray-box-3">
        <p className="accset">계정 설정</p>
        <p className="univset">학교 설정</p>
        <p className="pwshift">비밀번호 변경</p>

        <p className="emailshift">이메일 변경</p>
        <p className="nicknameshift">닉네임 변경</p>

        <p className="leave">탈퇴</p>
      </div>
      <div className="gray-box-4">
        <p className="sysset">시스템 설정</p>
        <label className="darkmod">
          다크 모드
          <input
            type="checkbox"
            checked={darkModeEnabled}
            onChange={() => setDarkModeEnabled(!darkModeEnabled)}
          />
          <span className="toggle-btn"></span>
        </label>

        <label className="alarm">
          푸시 알림
          <input
            type="checkbox"
            checked={pushNotificationEnabled}
            onChange={() =>
              setPushNotificationEnabled(!pushNotificationEnabled)
            }
          />
          <span className="toggle-btn"></span>
        </label>

        <p className="clear-cache" onClick={handleOpenModal}>
          캐시 삭제
        </p>

        {isModalVisible && (
          <div className="modal-backdrop">
            {" "}
            {/* 블러 효과가 적용될 부분 */}
            <CacheModal
              message="내가 쓴 글•댓글, 좋아요 누른 글에 대한 정보가 모두 삭제됩니다."
              onCancel={handleCloseModal}
              onDelete={handleDelete}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
