import React from "react";
import "./Nickname.scss";

const Nickname = () => {
  const handleButtonClick = () => {
    alert("수정되었습니다");
  };

  return (
    <div className="nickname">
      <h2 className="nickname__nick-title">닉네임 변경</h2>

      <div className="nickname__nick-input">
        <div className="nickname__nick-input__nick-group">
          <span>새 닉네임 : </span>
          <input
            className="nickname__nick-input__nick-group__nick-new"
            type="text"
            placeholder="새 닉네임을 입력하세요"
          />
          <button onClick={handleButtonClick}>수정</button>
        </div>
      </div>
      <button className="nickname__nick-btn">완료</button>
    </div>
  );
};

export default Nickname;
