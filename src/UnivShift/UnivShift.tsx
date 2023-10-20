import React from "react";
import "./UnivShift.scss";

const UnivShift = () => {
  const handleButtonClick = () => {
    alert("수정되었습니다");
  };
  return (
    <div className="position-relative">
      <h2>학교 설정</h2>
      <p className="menual">
        학교 변경은 변경된 학교의 이메일 인증 후 자동으로 변경됩니다. 문의
        사항은 031-123-234으로 해주세요.
      </p>
      <div className="input-container">
        <div className="form-group">
          <p>학교 변경 : </p>
          <input
            className="school-input"
            type="text"
            placeholder="이메일을 입력하세요"
          />
          <button>인증</button>
        </div>

        <div className="form-group">
          <p>학과 변경 : </p>
          <input
            className="major-input-box"
            type="text"
            placeholder="학과를 입력하세요"
          />
          <button onClick={handleButtonClick}>수정</button>
        </div>

        <div className="form-group">
          <p>학번 변경 : </p>
          <input
            className="id-input-box"
            type="text"
            placeholder="학번을 입력하세요"
          />
          <button onClick={handleButtonClick}>수정</button>
        </div>
      </div>
      <button className="submit-btn">완료</button>
    </div>
  );
};

export default UnivShift;
