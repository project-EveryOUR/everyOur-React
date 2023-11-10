import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LangsetPage.scss";

const Langset: React.FC = () => {
  return (
    <div className="Langset">
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

    </div>
  );
};

export default Langset;