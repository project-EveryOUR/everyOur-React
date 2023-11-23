import "../ArticleList.scss";
import sidemenu from "../../assets/sidemenu.svg";
import React, { useState } from "react";
import SideBar from "../../SideBar/SideBar";
import { Link } from "react-router-dom";
import everyOURLogo from "../../assets/logo.svg";

function ArticleList(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };
  return (
    <div className="articleList">
      <Link to={"/"}>
        <img
          src={everyOURLogo}
          alt="everyOUR 메인 로고"
          className="smallLogo"
        />
      </Link>
      <div className="sideMenuBtn" onClick={toggleSide}>
          <img src={sidemenu} alt="사이드 메뉴 버튼" className="sideMenuBtn" />
        </div>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="listBox">
        <div className="boardName">공지 사항</div>
        <button className="articleSearch">검색</button>

        <div className="boardArticleList">
          <ul className="boardArticleList__ul">
            <li className="boardArticleList__ul__li">
              <span className="boardArticleList__ul__li__title">
                상업 광고 금지 안내
              </span>
              <span className="boardArticleList__ul__li__nickname">관리자</span>
              <span className="boardArticleList__ul__li__date">
                2023-09-30 18:30
              </span>
            </li>
          </ul>
          <ul className="boardArticleList__ul">
            <li className="boardArticleList__ul__li">
              <span className="boardArticleList__ul__li__title">
                상업 광고 금지 안내
              </span>
              <span className="boardArticleList__ul__li__nickname">관리자</span>
              <span className="boardArticleList__ul__li__date">
                2023-09-30 18:30
              </span>
            </li>
          </ul>
          <ul className="boardArticleList__ul">
            <li className="boardArticleList__ul__li">
              <span className="boardArticleList__ul__li__title">
                상업 광고 금지 안내
              </span>
              <span className="boardArticleList__ul__li__nickname">관리자</span>
              <span className="boardArticleList__ul__li__date">
                2023-09-30 18:30
              </span>
            </li>
          </ul>
          <ul className="boardArticleList__ul">
            <li className="boardArticleList__ul__li">
              <span className="boardArticleList__ul__li__title">
                상업 광고 금지 안내
              </span>
              <span className="boardArticleList__ul__li__nickname">관리자</span>
              <span className="boardArticleList__ul__li__date">
                2023-09-30 18:30
              </span>
            </li>
          </ul>
          <ul className="boardArticleList__ul">
            <li className="boardArticleList__ul__li">
              <span className="boardArticleList__ul__li__title">
                상업 광고 금지 안내
              </span>
              <span className="boardArticleList__ul__li__nickname">관리자</span>
              <span className="boardArticleList__ul__li__date">
                2023-09-30 18:30
              </span>
            </li>
          </ul>
          <ul className="boardArticleList__ul">
            <li className="boardArticleList__ul__li">
              <span className="boardArticleList__ul__li__title">
                상업 광고 금지 안내
              </span>
              <span className="boardArticleList__ul__li__nickname">관리자</span>
              <span className="boardArticleList__ul__li__date">
                2023-09-30 18:30
              </span>
            </li>
          </ul>
          <ul className="boardArticleList__ul">
            <li className="boardArticleList__ul__li">
              <span className="boardArticleList__ul__li__title">
                상업 광고 금지 안내
              </span>
              <span className="boardArticleList__ul__li__nickname">관리자</span>
              <span className="boardArticleList__ul__li__date">
                2023-09-30 18:30
              </span>
            </li>
          </ul>
          <ul className="boardArticleList__ul">
            <li className="boardArticleList__ul__li">
              <span className="boardArticleList__ul__li__title">
                상업 광고 금지 안내
              </span>
              <span className="boardArticleList__ul__li__nickname">관리자</span>
              <span className="boardArticleList__ul__li__date">
                2023-09-30 18:30
              </span>
            </li>
          </ul>
          <ul className="boardArticleList__ul">
            <li className="boardArticleList__ul__li">
              <span className="boardArticleList__ul__li__title">
                상업 광고 금지 안내
              </span>
              <span className="boardArticleList__ul__li__nickname">관리자</span>
              <span className="boardArticleList__ul__li__date">
                2023-09-30 18:30
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ArticleList;
