import React from "react";
import "./Email.scss";
import Backbtn from "../assets/Backbtn.svg";
import { Link, useNavigate } from "react-router-dom";
import everyOURLogo from "../assets/logo.svg";


const email = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    alert("수정되었습니다");
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="email">
      <Link to={"/"}>
        <img
          src={everyOURLogo}
          alt="everyOURLogo"
          className="Langset__Logo"
        />
      </Link>
       <img src={Backbtn} alt="Backbtn" className="email__Backbtn" onClick={goBack} />
      <h2 className="email__email-title">이메일 변경</h2>

      <div className="email__email-input">
        <div className="email__email-now">
          이메일 인증 :
        </div>
        <div className="email__email-input__email-group">
          <input
            type="email"
            placeholder="이메일을 입력하세요"
          />
        </div>
        <button className="email__email-btnnn">
           인증
        </button>
        <div className="email__email-new">
          변경할 이메일 :
        </div>
        <div className="email__email-input2__email-group">
          <input
            type="email"
            placeholder="이메일을 입력하세요"
          />
        </div>
        <button className="email__email-btnn">
          수정
        </button>
      </div>
      <button className="email__email-btn" onClick={handleButtonClick}>완료</button>
    </div>
  );
};

export default email;
