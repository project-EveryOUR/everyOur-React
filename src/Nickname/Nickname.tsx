import React from "react";
import "./Nickname.scss";

const Nickname = () => {
  const handleButtonClick = () => {
    alert("수정되었습니다");
  };
  return (
    <div className="position-relative">
      <h2>닉네임 변경</h2>

      <div className="input-container">
        <div className="form-group">
          <p>새 닉네임 : </p>
          <input
            className="school-input"
            type="text"
            placeholder="새 닉네임을 입력하세요"
          />
          <button onClick={handleButtonClick}>수정</button>
        </div>
      </div>
      <button className="submit-btn">완료</button>
    </div>
  );
};

export default Nickname;
