import React from "react";
import "./UnivShift.scss";

const UnivShift = () => {
  const handleButtonClick = () => {
    alert("수정되었습니다");
  };
  return (
    <div className="univshift">
      <h2 className="univshift__univ-title">학교 설정</h2>
      <p className="univshift__univ-menual">
        학교 변경은 변경된 학교의 이메일 인증 후 자동으로 변경됩니다. 문의
        사항은 031-123-234으로 해주세요.
      </p>
      <div className="univshift__univ-container">
        <div className="univshift__univ-container__univ-form">
          <p>학교 변경 : </p>
          <input
            className="univshift__univ-container__univ-form__univ-input"
            type="text"
            placeholder="이메일을 입력하세요"
          />
          <button className="univshift__univ-container__univ-form__univ-okbtn">
            인증
          </button>
        </div>

        <div className="univshift__univ-container__univ-form">
          <p>학과 변경 : </p>
          <input
            className="univshift__univ-container__univ-form__univ-major"
            type="text"
            placeholder="학과를 입력하세요"
          />
          <button
            className="univshift__univ-container__univ-form__univ-modibtn"
            onClick={handleButtonClick}
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
          />
          <button
            className="univshift__univ-container__univ-form__univ-modibtn"
            onClick={handleButtonClick}
          >
            수정
          </button>
        </div>
      </div>
      <button className="univshift__univ-btn">완료</button>
    </div>
  );
};

export default UnivShift;