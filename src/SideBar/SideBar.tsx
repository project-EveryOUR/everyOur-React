import sidemenu from "../assets/sidemenu.svg";
import close from "../assets/close.svg";
import React, { useContext, useEffect, useRef } from "react";
import "./SideBar.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { signInWithGoogle } from "../firebase";

function SideBar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("mousedown", handlerOutsie);
    return () => {
      document.removeEventListener("mousedown", handlerOutsie);
    };
  });

  const handlerOutsie = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  const handleAccountSettings = () => {
    if (!currentUser) {
      alert("구글 로그인이 필요합니다.");
      signInWithGoogle()
        .then(() => {
          console.log("로그인 성공, settingspage로 이동 시도");
          navigate("/settingspage");
        })
        .catch((error) => {
          console.error("로그인 에러:", error);
        });
    } else {
      navigate("/settingspage");
    }
  };

  return (
    <div className="sideBar">
      <div
        id="sidebar"
        ref={outside}
        className={`sidebar-wrap ${isOpen ? "open" : ""}`}
      >
        <img
          className="sidebar-wrap__ul__X"
          src={close}
          alt="close"
          onClick={toggleSide}
          onKeyDown={toggleSide}
        />
        <ul className="sidebar-wrap__ul">
          <Link to={"/InfoPage"}>
            <p className="sidebar-wrap__ul">공지 사항</p>
          </Link>
          <Link to={"/UsePage"}>
            <p className="sidebar-wrap__ul">사용 문의</p>
          </Link>
          <Link to={"/langset"}>
            <p className="sidebar-wrap__ul">언어 설정</p>
          </Link>

          <p className="sidebar-wrap__ul" onClick={handleAccountSettings}>
            계정 설정
          </p>
          <Link to={"/hotarticlelist"}>
            <p className="sidebar-wrap__ul">Hot 게시글</p>
          </Link>
          <Link to={"/freearticlelist"}>
            <p className="sidebar-wrap__ul">자유 게시판</p>
          </Link>
          <Link to={"/secretarticlelist"}>
            <p className="sidebar-wrap__ul">비밀 게시판</p>
          </Link>
          <Link to={"/infoarticlelist"}>
            <p className="sidebar-wrap__ul">정보 게시판</p>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
