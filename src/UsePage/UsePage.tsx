import React from "react";
import "./UsePage.scss";
import Backbtn from "../assets/Backbtn.svg";
import { Link, useNavigate } from "react-router-dom";
import everyOURLogo from "../assets/logo.svg";

const UsePage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="usepage">
      <Link to={"/"}>
        <img
          src={everyOURLogo}
          alt="everyOURLogo"
          className="usepage__Logo"
        />
      </Link>
      <h2 className="usepage__usepage-title">사용 문의</h2>
      <br></br>
      <div className="usepage__usebox">
        <p className="usepage__usebox__usepage_text">
          사용 문의는 DM으로 부탁드립니다.
        </p>
        <p className="usepage__usebox__usepage_insta">@chamwhea</p>
      </div>
      <img src={Backbtn} alt="Backbtn" className="usepage__Backbtn" onClick={goBack} />
      
    </div>
  );
};
export default UsePage;
