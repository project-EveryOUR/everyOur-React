import sidemenu from "../assets/sidemenu.svg";
import close from "../assets/close.svg";
import React, { useEffect, useRef } from "react";
import "./SideBar.scss";
import { Link } from "react-router-dom";

function SideBar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();

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

  return (
    <div className="sideBar">
      <div
        id="sidebar"
        ref={outside}
        className={`sidebar-wrap ${isOpen ? "open" : ""}`}
      >
        <img
          src={close}
          alt="close"
          onClick={toggleSide}
          onKeyDown={toggleSide}
        />
        <ul className="sidebar-wrap__ul">
          <span className="sidebar-wrap__ul__li">
            <Link to={"/InfoPage"}>공지 사항</Link>
          </span>
          <span className="sidebar-wrap__ul__li">
            <Link to={"/UsePage"}>사용 문의</Link>
          </span>
          <span className="sidebar-wrap__ul__li">
            <Link to={"/langset"}>언어 설정</Link>
          </span>
          <span className="sidebar-wrap__ul__li">
            <Link to={"/settingspage"}>계정 설정</Link>
          </span>

          <span className="sidebar-wrap__ul__li">
            <Link to={"/hotarticlelist"}>Hot 게시글</Link>
          </span>
          <span className="sidebar-wrap__ul__li">
            <Link to={"/freearticlelist"}>자유 게시판</Link>
          </span>
          <span className="sidebar-wrap__ul__li">
            <Link to={"/secretarticlelist"}>비밀 게시판</Link>
          </span>
          <span className="sidebar-wrap__ul__li">
            <Link to={"/infoarticlelist"}>정보 게시판</Link>
          </span>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
