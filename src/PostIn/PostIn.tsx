import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import send from "./send.svg";
import heart from "./heart.svg";
import Eheart from "./Eheart.svg";
import deleteI from "./delete.svg";
import border_color from "./border_color.svg";
import reply from "./reply.svg";
import ikname from "./ikname.svg";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { auth, db } from "../firebase";
import {
  Firestore,
  QuerySnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "@firebase/firestore";
import "./PostIn.scss";
import {
  addDoc,
  increment,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

const PostIn: React.FC = () => {
  const { postId } = useParams();
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState<any>("");
  const [region, setRegion] = useState<any>("");
  const [studentId, setStudentId] = useState<any>("");
  const [univName, setUnivName] = useState<any>("");
  const [nickname, setNickname] = useState<any>("");
  const [author, setAuthor] = useState<any>("");
  const [authorMajor, setAuthorMajor] = useState<any>("");
  const [authorUniv, setAuthorUniv] = useState<any>("");
  const [comCnt, setComCnt] = useState<any>(null);
  const [content, setContent] = useState<any>("");
  const [createAt, setCreateAt] = useState<any>(null);
  const [likeCnt, setLikeCnt] = useState<any>(null);
  const [title, setTitle] = useState<any>("");
  const [updateAt, setUpdateAt] = useState<any>(null);
  const [views, setViews] = useState<any>(null);
  const [Commentinput, CommentinputText] = useState<string>("");
  const [replyText2, setReplyText2] = useState<string>("");
  const [numnum, setNumNum] = useState(0);
  const [numnumnum, setNumNumNum] = useState(0);
  const [isHeart, setIsHeart] = useState(true);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User:", currentUser);
      const userData = currentUser ? currentUser.toJSON() : null;
      console.log("User Data:", userData);
      setUser(userData);
      console.log(userData?.uid);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  useEffect(() => {
    const getData = async () => {
      increaseViews();
    };
    getData();
  }, [user, postId]);

  // fetchData 함수 수정
  const fetchData = async () => {
    if (user && user.uid && postId) {
      try {
        const userDocRef = doc(collection(db, "users"), user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          setName(userData?.name || "");
          setRegion(userData?.region || "");
          setStudentId(userData?.studentId || "");
          setUnivName(userData?.univName || "");
          setNickname(userData?.nickname || "");
        } else {
          console.log("No such user document!");
        }

        const postDocRef = doc(collection(db, "posts"), postId);
        const postDocSnapshot = await getDoc(postDocRef);

        if (postDocSnapshot.exists()) {
          const postData = postDocSnapshot.data();
          setViews(postData?.views || "");
          setAuthor(postData?.author || "");
          setAuthorMajor(postData?.authorMajor || "");
          setAuthorUniv(postData?.authorUniv || "");
          setComCnt(postData?.comCnt || "");
          setContent(postData?.content || "");
          setCreateAt(postData?.createAt || "");
          setLikeCnt(postData?.likeCnt || "");
          setTitle(postData?.title || "");
          setUpdateAt(postData?.updateAt || "");
        } else {
          console.log("No such post document!");
          navigate(-1);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
  };

  const increaseViews = async () => {
    console.log("Increase views");
    if (postId) {
      try {
        const postDocRef = doc(collection(db, "posts"), postId);
        await updateDoc(postDocRef, {
          views: increment(1),
        });
        console.log("Views increased successfully");

        await fetchData();
        console.log("Data fetched successfully");
      } catch (error) {
        console.error("Error increasing views or fetching data:", error);
      }
    }
  };

  const CommentinputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 50) {
      CommentinputText(e.target.value);
    }
  };

  const handleHeartClick = () => {
    if (isHeart) {
      setNumNumNum(numnumnum + 1);
    } else {
      setNumNumNum(numnumnum - 1);
    }
    setIsHeart(!isHeart);
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleBorderClick = () => {
    navigate("/writepage");
  };

  const handleCommentSend = async () => {
    try {
      if (Commentinput.trim() !== "") {
        // 현재 로그인한 사용자의 정보를 사용
        const currentUser = auth.currentUser;

        if (currentUser) {
          const userDocRef = doc(collection(db, "users"), currentUser.uid);
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();

            // comments 컬렉션에 추가할 댓글 데이터
            const commentData = {
              author: userData?.nickname || "", // 댓글 작성자의 닉네임
              authorUniv: userData?.univName || "", // 댓글 작성자의 학교
              authorMajor: userData?.major || "", // 댓글 작성자의 전공
              content: Commentinput, // 댓글 내용
              createAt: serverTimestamp(), // 현재 서버 시간으로 설정
              updateAt: null, // 초기에는 수정 날짜 없음
            };

            // comments 컬렉션에 댓글 추가
            const commentRef = await addDoc(
              collection(db, "comments"),
              commentData
            );
            console.log(
              "댓글이 성공적으로 추가되었습니다. 댓글 ID:",
              commentRef.id
            );

            CommentinputText("");
          }
        }
      }
    } catch (error) {
      console.error("댓글 추가 중 오류:", error);
    }
  };

  return (
    <div className="container">
      <div className="container__line-1"></div>
      <div className="container__line-2"></div>
      <div className="container__line-3"></div>
      <div className="container__line-4"></div>
      <div className="container__line-5"></div>
      <div className="container__line-6"></div>
      <div className="container__deleteI">
        <img src={deleteI} alt="deleteI" />
      </div>
      <div className="container__border_color" onClick={handleBorderClick}>
        <img src={border_color} alt="border_color" />
      </div>
      <div className="container__title">{title}</div>
      <div className="container__content">{content}</div>
      <div className="container__author">
        {author} ({authorUniv}, {authorMajor})
      </div>
      <div className="container__timestamp"></div>
      <div className="container__comment-count">댓글 {numnum}개</div>
      <div className="container__views">조회수: {views}</div>

      <div className="container__Eheart" onClick={handleHeartClick}>
        <img
          src={isHeart ? Eheart : heart}
          alt={isHeart ? "Eheart" : "heart"}
        />
      </div>
      <div className="container__number">{numnumnum}</div>
      <div className="container__reply-author2">
        윤윤윤 (한세대학교 18, 소프트웨어)
      </div>
      <div className="container__reply-text2">{replyText2}</div>
      <div className="container__reply-author">
        정정정 (한세대학교 18, ict 융합)
      </div>
      <div className="container__reply-text"></div>
      <div className="container__reply">
        <img src={reply} alt="reply" />
      </div>
      <div className="container__rectangle-1"></div>
      <div className="container__user-3-author">
        김김김 (한세대학교 20, 소프트웨어)
      </div>
      <div className="container__user-3-reply-text"></div>
      <div className="container__reply-send-1">
        <img src={send} alt="send" />
      </div>
      <div className="container__reply-send-2">
        <img src={send} alt="send" />
      </div>
      <div className="container__reply-send-3">
        <img src={send} alt="send" />
      </div>
      <div className="container__ellipse-1">
        <img src={ikname} alt="ikname" />
      </div>
      <div className="container__ellipse-2">
        <img src={ikname} alt="ikname" />
      </div>
      <div className="container__ellipse-3">
        <img src={ikname} alt="ikname" />
      </div>
      <div className="container__ellipse-4">
        <img src={ikname} alt="ikname" />
      </div>
      <div className="container__rectangle-2"></div>
      <div className="container__rectangle-3"></div>
      <input
        className="container__comment-input"
        type="text"
        value={Commentinput}
        onChange={CommentinputChange}
        placeholder="내용을 입력하세요."
      />
      <div className="container__comment-send" onClick={handleCommentSend}>
        <img src={send} alt="send" />
      </div>
    </div>
  );
};

export default PostIn;
