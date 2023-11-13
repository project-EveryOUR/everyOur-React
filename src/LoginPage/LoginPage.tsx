// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./LoginPage.scss";

// const LoginPage: React.FC = () => {
//   const [idText, setIdText] = useState<string>("");
//   const [pwText, setPwText] = useState<string>("");

//   const handleIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.value.length <= 16) {
//       setIdText(e.target.value);
//     }
//   };

//   const handlePwInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.value.length <= 16) {
//       setPwText(e.target.value);
//     }
//   };

//   return (
//     <div className="iFrame">
//       <div className="iFrame__InternalFrame"></div>
//       <div className="iFrame__Loginbanner">Login</div>
//       <div className="iFrame__ID">ID :</div>
//       <div className="iFrame__PW">PW :</div>

//       <div className="iFrame__Loginbtn">Login</div>
//       <Link to={"/Signuppage"}>
//         <div className="iFrame__Signupbtn"> SignUp</div>
//       </Link>

//       <div className="iFrame__GyeonggiSouth">경기 남부</div>
//       <div className="iFrame__GyeonggiSouthframe"></div>
//       <input
//         className="iFrame__IDtext"
//         type="text"
//         value={idText}
//         onChange={handleIdInputChange}
//       />
//       <input
//         className="iFrame__PWtext"
//         type="password"
//         value={pwText}
//         onChange={handlePwInputChange}
//       />
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase";
import "./LoginPage.scss";

const LoginPage: React.FC = () => {
  const [idText, setIdText] = useState<string>("");

  const handleIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 16) {
      setIdText(e.target.value);
    }
  };

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle().then(() => {
      // 로그인 성공 시 메인 페이지로 이동
      navigate("/"); // '/main'은 메인 페이지의 경로에 맞게 수정해주세요
    });
  };

  return (
    <div className="iFrame">
      <div className="iFrame__InternalFrame"></div>
      <div className="iFrame__Loginbanner">Login</div>
      <div className="iFrame__ID">ID :</div>
      <div className="iFrame__GmailLoginbtn" onClick={handleGoogleLogin}>
        Gmail
      </div>
      <Link to={"/Signuppage"}>
        <div className="iFrame__Signupbtn"> SignUp</div>
      </Link>
      <div className="iFrame__GyeonggiSouth">경기 남부</div>
      <div className="iFrame__GyeonggiSouthframe"></div>
      <input
        className="iFrame__IDtext"
        type="text"
        value={idText}
        onChange={handleIdInputChange}
      />
      <div className="iFrame__Loginbtn">Login</div>
    </div>
  );
};

export default LoginPage;
