import "../ArticleList.scss";
import sidemenu from "../../assets/sidemenu.svg";
import React, { useEffect, useState } from "react";
import SideBar from "../../SideBar/SideBar";
import { Link } from "react-router-dom";
import everyOURLogo from "../../assets/logo.svg";
import $ from "jquery";
import BoardList from "../BoardList";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

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
  const [articles, setArticles] = useState<any[]>([]);

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

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "posts"),
        where("category", "==", "자유 게시판")
      );

      try {
        const querySnapshot = await getDocs(q);
        const fetchedArticles = querySnapshot.docs.map((doc) => {
          const createAtTimestamp = doc.data().createAt;
          const date = new Date(createAtTimestamp.seconds * 1000);
          const formattedDate = date.toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
          return {
            id: doc.id,
            ...doc.data(),
            formattedDate: formattedDate,
          };
        });
        fetchedArticles.sort((a, b) => {
          // Timestamp 비교하여 정렬, 최신 데이터가 앞에 오도록 설정
          if (a.createAt.seconds === b.createAt.seconds) {
            return b.createAt.nanoseconds - a.createAt.nanoseconds;
          }
          return b.createAt.seconds - a.createAt.seconds;
        });
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData();
  }, []);
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
          <ul className="boardArticleList__ul">
            {articles.map((article) => (
              <li key={article.id} className="boardArticleList__ul__li">
                <Link to={`/postIn/${article.id}`}>
                  <span className="boardArticleList__ul__li__title">
                    {article.title}
                  </span>
                  <span className="boardArticleList__ul__li__comment">
                    댓글 {article.comCnt}
                  </span>
                  <span className="boardArticleList__ul__li__like">
                    좋아요 {article.likeCnt}
                  </span>
                  <span className="boardArticleList__ul__li__nickname">
                    {article.author}
                  </span>
                  <span className="boardArticleList__ul__li__date">
                    {article.formattedDate}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {/* <pagination /> */}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
