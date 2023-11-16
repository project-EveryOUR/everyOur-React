import React from "react";
import "./Pw.scss";
import Backbtn from "../assets/Backbtn.svg";
import { Link, useNavigate } from "react-router-dom";
const Pw = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="pw">
       <img src={Backbtn} alt="Backbtn" className="pw__Backbtn" onClick={goBack} />
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
