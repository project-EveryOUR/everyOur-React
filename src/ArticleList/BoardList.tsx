import { query, collection, getDocs, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const BoardList: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "posts")
        // where("category", "==", "자유 게시판")
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
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData();
  }, []);
  return (
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
  );
};

export default BoardList;
