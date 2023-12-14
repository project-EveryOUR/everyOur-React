import React from "react";
import "./Email.scss";
import Backbtn from "../assets/Backbtn.svg";
import { Link, useNavigate } from "react-router-dom";
import everyOURLogo from "../assets/logo.svg";


const Email = () => {
  const handleButtonClick = () => {
    alert("수정되었습니다");
  };
  const navigate = useNavigate();

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
        <div className="email__email-input__email-group">
          <span className="email__email-input__email-group__email-oauth">
            이메일 인증 :{" "}
          </span>
          <input
            className="email__email-input__email-group__email-text"
            type="email"
            placeholder="이메일을 입력하세요"
          />
          <button>인증</button>
        </div>

        <div className="email__email-input__email-group">
          <span>이메일 변경 : </span>
          <input
            className="email__email-input__email-group__email-new"
            type="email"
            placeholder="이메일을 입력하세요"
          />
          <button onClick={handleButtonClick}>수정</button>
        </div>
      </div>
      <button className="email__email-btn">완료</button>
    </div>
  );
};
export default Email;
