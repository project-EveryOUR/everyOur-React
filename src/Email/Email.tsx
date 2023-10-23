import React from "react";
import "./Email.scss";

const Email = () => {
  const handleButtonClick = () => {
    alert("수정되었습니다");
  };
  return (
    <div className="position-relative">
      <h2>이메일 변경</h2>
      <div className="input-container">
        <div className="form-group">
          <p>이메일 인증 : </p>
          <input
            className="school-input"
            type="text"
            placeholder="이메일을 입력하세요"
          />
          <button>인증</button>
        </div>

        <div className="form-group">
          <p>이메일 변경 : </p>
          <input
            className="major-input-box"
            type="text"
            placeholder="이메일을 입력하세요"
          />
          <button onClick={handleButtonClick}>수정</button>
        </div>
      </div>
      <button className="submit-btn">완료</button>
    </div>
  );
};
export default Email;
// 엥
