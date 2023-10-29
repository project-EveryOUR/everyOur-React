import React from "react";
import "./Pw.scss";

const Pw = () => {
  return (
    <div className="pw">
      <h2 className="pw__pw-title">비밀번호 변경</h2>

      <div className="pw__pw-input">
        <div className="pw__pw-input__pw-group">
          <span>현재 PW : </span>
          <input
            className="pw__pw-input__pw-group__pw-pre"
            type="password"
            placeholder="현재 비밀번호를 입력하세요"
          />
          <button>확인</button>
        </div>

        <div className="pw__pw-input__pw-group">
          <span>새 PW : </span>
          <input
            className="pw__pw-input__pw-group__pw-new"
            type="password"
            placeholder="변경할 비밀번호를 입력하세요"
          />
          <button>확인</button>
        </div>
      </div>
      <button className="pw__pw-btn">완료</button>
    </div>
  );
};

export default Pw;
