import React from "react";
import "./Pw.scss";

const Pw = () => {
  return (
    <div className="position-relative">
      <h2>비밀번호 변경</h2>

      <div className="input-container">
        <div className="form-group">
          <p>현재 PW : </p>
          <input
            className="school-input"
            type="text"
            placeholder="현재 비밀번호를 입력하세요"
          />
          <button>확인</button>
        </div>

        <div className="form-group">
          <p>새 PW : </p>
          <input
            className="school-input"
            type="text"
            placeholder="변경할 비밀번호를 입력하세요"
          />
          <button>확인</button>
        </div>
      </div>
      <button className="submit-btn">완료</button>
    </div>
  );
};

export default Pw;
//ㅇㅇ
