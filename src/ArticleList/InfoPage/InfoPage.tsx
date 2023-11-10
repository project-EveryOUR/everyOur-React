import "../ArticleList.scss";
import React from "react";
import { Link } from "react-router-dom";
import everyOURLogo from "../../assets/logo.svg";

function InfoPage(): JSX.Element {
  return (
    <div className="articleList">
      <Link to={"/"}>
        <img
          src={everyOURLogo}
          alt="everyOUR 메인 로고"
          className="smallLogo"
        />
      </Link>
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
          {/* <pagination /> */}
        </div>
      </div>
    </div>
  );
}

export default InfoPage;