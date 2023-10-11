//import { useState } from "react";
import everyOURLogo from "../assets/logo.svg";
import sidemenu from "../assets/sidemenu.svg";
import "../mainPage/mainPage.scss";

function MainPage(): JSX.Element {
  return (
    <div className="main">
      <a href="#!">
        <img
          src={everyOURLogo}
          alt="everyOUR 메인 로고"
          className="everyOURLogo"
        />
      </a>
      <button className="loginBtn">LOGIN</button>
      <button className="sideMenuBtn">
        <img src={sidemenu} alt="사이드 메뉴 버튼" className="sideMenuBtn" />
      </button>
      <div className="hotposts">
        <div className="hotposts__ggNorth">
          <span className="hotposts__ggNorth__title">
            경기 북부 인기 게시글
          </span>
          <div className="hotposts__ggNorth__list">
            <ul className="hotposts__ggNorth__list__ul">
              <li className="hotposts__ggNorth__list__ul__li">글1</li>
              <li className="hotposts__ggNorth__list__ul__li">글2</li>
              <li className="hotposts__ggNorth__list__ul__li">글3</li>
              <li className="hotposts__ggNorth__list__ul__li">글4</li>
              <li className="hotposts__ggNorth__list__ul__li">글5</li>
            </ul>
          </div>
        </div>
        <div className="hotposts__ggSouth">
          <span className="hotposts__ggSouth__title">
            경기 남부 인기 게시글
          </span>
          <div className="hotposts__ggSouth__list">
            <ul className="hotposts__ggSouth__list__ul">
              <li className="hotposts__ggSouth__list__ul__li">글1</li>
              <li className="hotposts__ggSouth__list__ul__li">글2</li>
              <li className="hotposts__ggSouth__list__ul__li">글3</li>
              <li className="hotposts__ggSouth__list__ul__li">글4</li>
              <li className="hotposts__ggSouth__list__ul__li">글5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
