import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase";
import everyOURLogo from "../assets/logo.svg";
import "./LoginPage.scss";
import Backbtn from "../assets/Backbtn.svg";
import { getFirestore, doc, getDoc, DocumentReference } from "firebase/firestore";
import { auth, db } from "../firebase";

const LoginPage: React.FC = () => {
  const [region, setRegion] = useState<"경기 남부" | "경기 북부">("경기 남부");
  const [loginAttempted, setLoginAttempted] = useState(false);

  const handleRegionClick = () => {
    const newRegion = region === "경기 남부" ? "경기 북부" : "경기 남부";
    setRegion(newRegion);

    navigate(`/loginpage/${newRegion.toLowerCase()}`);
  };

  const navigate = useNavigate();

  useEffect(() => {
    setRegion("경기 남부");
  }, []);

  const goBack = () => {
    navigate(-1);
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(async (user) => {
        if (user) {
          console.log('사용자 이메일:', user.email);
          const userRef: DocumentReference<UserData> = doc(db, 'users', user.uid);
          
          try {
            
            const docSnap = await getDoc(userRef);
            if (docSnap.exists()) {
              navigate('/');
            } else {
              navigate('/signuppage');
            }
          } catch (error) {
            console.error('에러', error.message);
          }
        }
      })
      .catch((error) => {
        console.error('에러', error.message);
      });
  };
  

  return (
    <div className="iFrame">
      <Link to={"/"}>
        <img src={everyOURLogo} alt="everyOUR 메인 로고" className="iFrame__Logo" />
      </Link>
      <img src={Backbtn} alt="Backbtn" className="iFrame__Backbtn" onClick={goBack} />
      <div className="iFrame__InternalFrame"></div>
      <div className="iFrame__Loginbanner">Login</div>
      <div className="iFrame__EmailInput">
        테스트를 위해 signup 버튼은 남겨놓고 진행<br />
        로그인할때 최초 1회는 정보기입이 필요하며...<br />
        멘트는 수아시치숙제
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