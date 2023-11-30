// import { useState } from "react";
import React, { useState, useEffect } from "react";
import everyOURLogo from "../assets/logo.svg";
import sidemenu from "../assets/sidemenu.svg";
import "../mainPage/mainPage.scss";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./../SideBar/SideBar";
import { signOutUser, auth, db, signInWithGoogle } from "../firebase";
import Backbtn from "../assets/Backbtn.svg";
import { getDoc, doc } from "firebase/firestore";

// interface Props {
//   isOpen: isOpen
// }

const MainPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // user가 있으면 로그인 상태, 없으면 로그아웃 상태
      console.log("로그인 상태 변경:", !!user);
    });
    return () => unsubscribe();
  }, []);

  const [isFirstLogin, setIsFirstLogin] = useState<boolean>(false);

  const handleGoogleLogin = async () => {
    try {
      // Gmail 로그인 처리
      await signInWithGoogle();

      // Firebase에서 로그인 상태 감지
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          // 사용자 정보 가져오기
          const userDoc = await getDoc(doc(db, "users", user.uid));

          // 사용자 정보가 없으면 최초 로그인으로 간주
          if (!userDoc.exists()) {
            navigate(`/signuppage?email=${encodeURIComponent(user.email)}`);
          } else {
            // 이미 정보가 있는 경우 메인페이지로 이동
            navigate("/");
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  // 로그아웃 처리 함수
  const handleLogout = async () => {
    try {
      await signOutUser();
      console.log("로그아웃 성공");
    } catch (error) {
      if (error instanceof Error) {
        console.error("로그아웃 실패:", error.message);
      }
    }
  };

  return (
    <div className="main">
      <div className="everyOUR">
        <Link to={"/"}>
          <img
            src={everyOURLogo}
            alt="everyOUR 메인 로고"
            className="everyOUR__Logo"
          />
        </Link>
        <a href="#!">
          <span className="everyOUR__Main">everyOUR</span>
        </a>
      </div>
      <img
        src={Backbtn}
        alt="Backbtn"
        className="main__Backbtn"
        onClick={goBack}
      />
      {/* 로그인 상태에 따라 다르게 렌더링 */}
      {isLoggedIn ? (
        <button className="loginBtn" onClick={handleLogout}>
          LOGOUT
        </button>
      ) : (
        <Link to={isFirstLogin ? "/signuppage" : "/"}>
          <button className="loginBtn" onClick={handleGoogleLogin}>
            LOGIN
          </button>
        </Link>
      )}

      <div className="sideMenuBtn" onClick={toggleSide}>
        <img src={sidemenu} alt="사이드 메뉴 버튼" className="sideMenuBtn" />
      </div>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="main__hotposts">
        <div className="main__hotposts__ggNorth">
          <span className="main__hotposts__ggNorth__title">
            경기 북부 인기 게시글
          </span>
          <div className="main__hotposts__ggNorth__list">
            <ul className="main__hotposts__ggNorth__list__ul">
              <li className="main__hotposts__ggNorth__list__ul__li">
                <span className="main__hotposts__ggNorth__list__ul__li__title">
                  글1
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__comment">
                  댓글30
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__like">
                  좋아요10
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="main__hotposts__ggNorth__list__ul__li">
                <span className="main__hotposts__ggNorth__list__ul__li__title">
                  글1
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="main__hotposts__ggNorth__list__ul__li">
                <span className="main__hotposts__ggNorth__list__ul__li__title">
                  글1
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="main__hotposts__ggNorth__list__ul__li">
                <span className="main__hotposts__ggNorth__list__ul__li__title">
                  글1
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="main__hotposts__ggNorth__list__ul__li">
                <span className="main__hotposts__ggNorth__list__ul__li__title">
                  글1
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="main__hotposts__ggNorth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="main__hotposts__ggSouth">
          <span className="main__hotposts__ggSouth__title">
            경기 남부 인기 게시글
          </span>
          <div className="main__hotposts__ggSouth__list">
            <ul className="main__hotposts__ggSouth__list__ul">
              <li className="main__hotposts__ggSouth__list__ul__li">
                <span className="main__hotposts__ggSouth__list__ul__li__title">
                  글1
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__comment">
                  댓글30
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__like">
                  좋아요10
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="main__hotposts__ggSouth__list__ul__li">
                <span className="main__hotposts__ggSouth__list__ul__li__title">
                  글1
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="main__hotposts__ggSouth__list__ul__li">
                <span className="main__hotposts__ggSouth__list__ul__li__title">
                  글1
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="main__hotposts__ggSouth__list__ul__li">
                <span className="main__hotposts__ggSouth__list__ul__li__title">
                  글1
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="main__hotposts__ggSouth__list__ul__li">
                <span className="main__hotposts__ggSouth__list__ul__li__title">
                  글1
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="main__hotposts__ggSouth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
