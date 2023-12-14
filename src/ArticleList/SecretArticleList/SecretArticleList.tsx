import "../ArticleList.scss";
import sidemenu from "../../assets/sidemenu.svg";
import React, { useEffect, useState } from "react";
import SideBar from "../../SideBar/SideBar";
import { Link } from "react-router-dom";
import everyOURLogo from "../../assets/logo.svg";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function ArticleList(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [articles, setArticles] = useState<any[]>([]);

  const toggleSide = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "posts"),
        where("category", "==", "비밀 게시판")
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
        <div className="boardName">비밀 게시판</div>
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
              </li>
            ))}
          </ul>
          {/* <pagination /> */}
        </div>
      </div>
    </div>
  );
}

export default ArticleList;
