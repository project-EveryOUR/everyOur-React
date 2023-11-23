import React from "react";
import "./Nickname.scss";
import Backbtn from "../assets/Backbtn.svg";
import { Link, useNavigate } from "react-router-dom";
import everyOURLogo from "../assets/logo.svg";


const Nickname = () => {
  const handleButtonClick = () => {
    alert("수정되었습니다");
  };
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="nickname">
      <Link to={"/"}>
        <img
          src={everyOURLogo}
          alt="everyOURLogo"
          className="Langset__Logo"
        />
      </Link>
       <img src={Backbtn} alt="Backbtn" className="nickname__Backbtn" onClick={goBack} />
      <h2 className="nickname__nick-title">닉네임 변경</h2>

      <div className="nickname__nick-input">
        <div className="nickname__nick-input__nick-group">
          <span>새 닉네임 : </span>
          <input
            className="nickname__nick-input__nick-group__nick-new"
            type="text"
            placeholder="새 닉네임을 입력하세요"
          />
          <button onClick={handleButtonClick}>수정</button>
        </div>
      </div>
      <button className="nickname__nick-btn">완료</button>
    </div>
  );
};

export default Nickname;
