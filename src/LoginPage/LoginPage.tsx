import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.scss';


const LoginPage: React.FC = () => {
  const [idText, setIdText] = useState<string>('');
  const [pwText, setPwText] = useState<string>('');

  const handleIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 16) {
      setIdText(e.target.value);
    }
  };

  const handlePwInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 16) {
      setPwText(e.target.value);
    }
  };

  return (
    <div className="iFrame">
      
      <div className="iFrame__InternalFrame"></div>
      <div className="iFrame__Loginbanner">Login</div>
      <div className="iFrame__ID">ID :</div>
      <div className="iFrame__PW">PW :</div>
      <div className="iFrame__Loginbtn">
        Login
      </div>
      <Link to={"/Signup"}> <div className="iFrame__Signupbtn" > SignUp
      </div></Link>
      
      <div className="iFrame__GyeonggiSouth">경기 남부</div>
      <div className="iFrame__GyeonggiSouthframe"></div>
      <input
        className="iFrame__IDtext"
        type="text"
        value={idText}
        onChange={handleIdInputChange}
      />
      <input
        className="iFrame__PWtext"
        type="password"
        value={pwText}
        onChange={handlePwInputChange}
      />
    </div>
  );
};

export default LoginPage;