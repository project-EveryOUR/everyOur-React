import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase";
import everyOURLogo from "../assets/logo.svg";
import "./LoginPage.scss";
import Backbtn from "../assets/Backbtn.svg";

const LoginPage: React.FC = () => {
  const [emailText, setEmailText] = useState<string>("");
  const [idText, setIdText] = useState<string>("");
  const [region, setRegion] = useState<string>("경기 남부");
  const handleIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 20) {
      setEmailText(e.target.value);
    }
  };
    const handleRegionClick = () => {
    const newRegion = region === "경기 남부" ? "경기 북부" : "경기 남부";

    window.history.pushState(null, "", `/loginpage/${newRegion.toLowerCase()}`);
    
    setRegion(newRegion);
  };
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const handleGoogleLogin = () => {
    signInWithGoogle().then(() => {
      // 로그인 성공 시 메인 페이지로 이동
      navigate("/"); // '/main'은 메인 페이지의 경로에 맞게 수정해주세요
    });
  };

  return (
    <div className="iFrame">
      <Link to={"/"}>
          <img
            src={everyOURLogo}
            alt="everyOUR 메인 로고"
            className="iFrame__Logo"
          />
      </Link>
      <img src={Backbtn} alt="Backbtn" className="iFrame__Backbtn" onClick={goBack} />
      <div className="iFrame__InternalFrame"></div>
      <div className="iFrame__Loginbanner">Login</div>
      <div className="iFrame__EmailInput">
        <span className="iFrame__EmailInput__Email">Email : </span>
        <input
          className="iFrame__EmailInput__Emailtext"
          type="text"
          value={emailText}
          onChange={handleIdInputChange}
        />
        <span className="iFrame__EmailInput__Loginbtn">Login</span>
      </div>
      <div className="iFrame__GmailLoginbtn" onClick={handleGoogleLogin}>
        Gmail
      </div>
      <Link to={"/Signuppage"}>
        <div className="iFrame__Signupbtn"> SignUp</div>
      </Link>
      <div className="iFrame__GyeonggiSouth" onClick={handleRegionClick}>
        {region}
      </div>
    </div>
  );
};

export default LoginPage;