import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LangsetPage.scss";
import Backbtn from "../assets/Backbtn.svg";
import everyOURLogo from "../assets/logo.svg";

const Langset: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="Langset">
      <Link to={"/"}>
        <img
          src={everyOURLogo}
          alt="everyOURLogo"
          className="Langset__Logo"
        />
      </Link>
      <div className="Langset__InternalFrame"></div>
      <div className="Langset__Langsetbanner">언어설정</div>
      <div className="Langset__Korean">한국어</div>
      <div className="Langset__English">English(영어)</div>
      <div className="Langset__Chinese">汉语(중국어)</div>
      <div className="Langset__Japanese">日本語(일본어)</div>
      <Link to={"/"}>
        <div className="Langset__K-Langsetbtn">선택</div>
      </Link>
      <Link to={"/"}>
        <div className="Langset__C-Langsetbtn">선택</div>
      </Link>
      <Link to={"/"}>
        <div className="Langset__J-Langsetbtn">선택</div>
      </Link>
      <Link to={"/"}>
        <div className="Langset__E-Langsetbtn">선택</div>
      </Link>
      <img src={Backbtn} alt="Backbtn" className="Langset__Backbtn" onClick={goBack} />
    </div>
  );
};

export default Langset;