//import { useState } from "react";
import React, { useState } from "react";
import everyOURLogo from "../assets/logo.svg";
import sidemenu from "../assets/sidemenu.svg";
import "../mainPage/mainPage.scss";
import { Link } from "react-router-dom";
import SideBar from "./../SideBar/SideBar";

// interface Props {
//   isOpen: isOpen
// }

function MainPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
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
      <button className="loginBtn">
        <Link to={"/loginpage"}>LOGIN</Link>
      </button>
      <button className="sideMenuBtn" onClick={toggleSide}>
        <img src={sidemenu} alt="사이드 메뉴 버튼" className="sideMenuBtn" />
      </button>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="hotposts">
        <div className="hotposts__ggNorth">
          <span className="hotposts__ggNorth__title">
            경기 북부 인기 게시글
          </span>
          <div className="hotposts__ggNorth__list">
            <ul className="hotposts__ggNorth__list__ul">
              <li className="hotposts__ggNorth__list__ul__li">
                <span className="hotposts__ggNorth__list__ul__li__title">
                  글1
                </span>
                <span className="hotposts__ggNorth__list__ul__li__comment">
                  댓글30
                </span>
                <span className="hotposts__ggNorth__list__ul__li__like">
                  좋아요10
                </span>
                <span className="hotposts__ggNorth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="hotposts__ggNorth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="hotposts__ggNorth__list__ul__li">
                <span className="hotposts__ggNorth__list__ul__li__title">
                  글1
                </span>
                <span className="hotposts__ggNorth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="hotposts__ggNorth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="hotposts__ggNorth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="hotposts__ggNorth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="hotposts__ggNorth__list__ul__li">
                <span className="hotposts__ggNorth__list__ul__li__title">
                  글1
                </span>
                <span className="hotposts__ggNorth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="hotposts__ggNorth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="hotposts__ggNorth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="hotposts__ggNorth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="hotposts__ggNorth__list__ul__li">
                <span className="hotposts__ggNorth__list__ul__li__title">
                  글1
                </span>
                <span className="hotposts__ggNorth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="hotposts__ggNorth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="hotposts__ggNorth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="hotposts__ggNorth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="hotposts__ggNorth__list__ul__li">
                <span className="hotposts__ggNorth__list__ul__li__title">
                  글1
                </span>
                <span className="hotposts__ggNorth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="hotposts__ggNorth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="hotposts__ggNorth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="hotposts__ggNorth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="hotposts__ggSouth">
          <span className="hotposts__ggSouth__title">
            경기 남부 인기 게시글
          </span>
          <div className="hotposts__ggSouth__list">
            <ul className="hotposts__ggSouth__list__ul">
              <li className="hotposts__ggSouth__list__ul__li">
                <span className="hotposts__ggSouth__list__ul__li__title">
                  글1
                </span>
                <span className="hotposts__ggSouth__list__ul__li__comment">
                  댓글30
                </span>
                <span className="hotposts__ggSouth__list__ul__li__like">
                  좋아요10
                </span>
                <span className="hotposts__ggSouth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="hotposts__ggSouth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="hotposts__ggSouth__list__ul__li">
                <span className="hotposts__ggSouth__list__ul__li__title">
                  글1
                </span>
                <span className="hotposts__ggSouth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="hotposts__ggSouth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="hotposts__ggSouth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="hotposts__ggSouth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="hotposts__ggSouth__list__ul__li">
                <span className="hotposts__ggSouth__list__ul__li__title">
                  글1
                </span>
                <span className="hotposts__ggSouth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="hotposts__ggSouth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="hotposts__ggSouth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="hotposts__ggSouth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="hotposts__ggSouth__list__ul__li">
                <span className="hotposts__ggSouth__list__ul__li__title">
                  글1
                </span>
                <span className="hotposts__ggSouth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="hotposts__ggSouth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="hotposts__ggSouth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="hotposts__ggSouth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
              <li className="hotposts__ggSouth__list__ul__li">
                <span className="hotposts__ggSouth__list__ul__li__title">
                  글1
                </span>
                <span className="hotposts__ggSouth__list__ul__li__comment">
                  댓글1
                </span>
                <span className="hotposts__ggSouth__list__ul__li__like">
                  좋아요1
                </span>
                <span className="hotposts__ggSouth__list__ul__li__nickname">
                  이크롱(의왕대18, 소프트웨어)
                </span>
                <span className="hotposts__ggSouth__list__ul__li__date">
                  2023-09-30 18:30
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
