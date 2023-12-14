import React from "react";
import "./Pw.scss";
import Backbtn from "../assets/Backbtn.svg";
import { Link, useNavigate } from "react-router-dom";
import everyOURLogo from "../assets/logo.svg";


const Pw = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="pw">
      <Link to={"/"}>
        <img
          src={everyOURLogo}
          alt="everyOURLogo"
          className="Langset__Logo"
        />
      </Link>
       <img src={Backbtn} alt="Backbtn" className="pw__Backbtn" onClick={goBack} />
      <h2 className="pw__pw-title">비밀번호 변경</h2>

      <div className="pw__pw-input">
        <div className="pw__pw-now">
          현재 비밀번호:
        </div>
        <div className="pw__pw-input__pw-group">
          <input
            type="password"
            placeholder="현재 비밀번호를 입력하세요"
          />
        </div>
        <button className="pw__pw-btnnn">
           확인
        </button>
        <div className="pw__pw-new">
          새 비밀번호:
        </div>
        <div className="pw__pw-input2__pw-group">
          <input
            type="password"
            placeholder="변경할 비밀번호를 입력하세요"
          />
        </div>
        <button className="pw__pw-btnn">
          확인
        </button>
      </div>
      <button className="pw__pw-btn">완료</button>
    </div>
  );
};

export default Pw;
