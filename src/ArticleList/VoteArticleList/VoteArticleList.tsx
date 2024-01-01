import "../ArticleList.scss";

import sidemenu from "../../assets/sidemenu.svg";
import React, { useEffect, useState, useContext } from "react";
import SideBar from "../../SideBar/SideBar";
import { Link, useNavigate } from "react-router-dom";
import everyOURLogo from "../../assets/logo.svg";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../AuthContext";

function ArticleList(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [articles, setArticles] = useState<any[]>([]);
  const [filteredArticles, setFilteredArticles] = useState([]); // 필터링된 게시글을 저장할 상태
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm) {
      const filtered = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles);
    }
  };

  useEffect(() => {
    setFilteredArticles(articles);
  }, [articles]);

  const toggleSide = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "posts"),
        where("category", "==", "Hot 게시판")
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

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleWriteButtonClick = () => {
    if (!currentUser) {
      alert("구글 로그인이 필요합니다.");
    } else {
      navigate("/writepage");
    }
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
      <div className="listBox">
        <div className="boardName">투표 게시판</div>
        <div className="ggArea">경기 남부</div>
        <div className="sideMenuBtn" onClick={toggleSide}>
          <img src={sidemenu} alt="사이드 메뉴 버튼" className="sideMenuBtn" />
        </div>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <button
          onClick={() => setShowSearchInput((prev) => !prev)}
          className="articleSearch"
        >
          검색
        </button>
        {showSearchInput && (
          <form onSubmit={handleSearch} className="searchForm">
            <input
              type="text"
              placeholder="검색어 입력"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="searchBar"
            />
            <input type="submit" value="검색" className="searchBtn" />
          </form>
        )}
        <button className="writeBtn" onClick={handleWriteButtonClick}>
          글쓰기
        </button>
      </div>
      <div className="articleList__gray-box-3 "><p>12월 21일 투표</p></div>
      <div className="articleList__gray-box-3__accset ">우리학교의 음료자판기의 음료메뉴 중<br></br>(이것)이 생겼으면 좋겠다.</div>
      <div className="articleList__gray-box-3__accs">1. 파워에이드<br></br><br></br>2. 포카리스웨트<br></br><br></br>3. 게토레이</div>
      <label htmlFor="checkbox1">
  <input
    type="checkbox"
    id="checkbox1"
    className="articleList__gray-box-3__accse1 "
    onChange={(e) => console.log('Checkbox 1 checked:', e.target.checked)}
  />
</label>

<label htmlFor="checkbox2">
  <input
    type="checkbox"
    id="checkbox2"
    className="articleList__gray-box-3__accse2 "
    onChange={(e) => console.log('Checkbox 2 checked:', e.target.checked)}
  />
</label>

<label htmlFor="checkbox3">
  <input
    type="checkbox"
    id="checkbox3"
    className="articleList__gray-box-3__accse3 "
    onChange={(e) => console.log('Checkbox 3 checked:', e.target.checked)}
  />
</label>

<button className="articleList__btn">제출</button>
    </div>
  );
}

export default ArticleList;
