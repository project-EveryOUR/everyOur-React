import "../ArticleList.scss";
import sidemenu from "../../assets/sidemenu.svg";
import React, { useState } from "react";
import SideBar from "../../SideBar/SideBar";
import { Link } from "react-router-dom";
import everyOURLogo from "../../assets/logo.svg";
import $ from "jquery";
import BoardList from "../BoardList";

interface list {
  _id: string;
  title: string;
  comments: number;
  viewers: number;
  likes: number;
  open_year: number;
  open_month: number;
  open_day: number;
  open_hour: number;
  open_minute: number;
  poster_url: string;
  info_url: string;
}
enum Sort {
  BY_LIKES = "likes",
  BY_VIEWERS = "viewers",
  BY_DATE = "date",
  BY_COMMENTS = "comments",
}
const ArticleList: React.FC = () => {
  const [sortMode, setSortMode] = useState<Sort>(Sort.BY_LIKES);
  const [isOpen, setIsOpen] = useState(false);
  const formatDate = (
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number
  ) => {
    return `${year}-${month}-${day} ${hour}:${minute}`;
  };
  const displaySorter = () => {
    document.getElementById("sorter-likes")!.classList.remove("active");
    document.getElementById("sorter-viewers")!.classList.remove("active");
    document.getElementById("sorter-date")!.classList.remove("active");
    document.getElementById(`sorter-${sortMode}`)!.classList.add("active");
  };
  const toggleSide = () => {
    setIsOpen(true);
  };
  $(document).ready(function () {});
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
        <div className="boardName">자유 게시판</div>
        <div className="ggArea">경기 남부</div>
        <div className="sideMenuBtn" onClick={toggleSide}>
          <img src={sidemenu} alt="사이드 메뉴 버튼" className="sideMenuBtn" />
        </div>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <button className="articleSearch">검색</button>
        <button className="writeBtn">
          <Link to={"/writepage"}>글쓰기</Link>
        </button>
        <div className="boardArticleList">
          <BoardList></BoardList>
          {/* <pagination /> */}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
