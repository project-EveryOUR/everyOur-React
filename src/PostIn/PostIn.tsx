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
  deleteDoc,
  increment,
  orderBy,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

const PostIn: React.FC = () => {
  console.log("Component rendered");
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

  const increaseViews = async () => {
    console.log("Increase views start");
    console.log("Increase views");
    if (postId) {
      try {
        const postDocRef = doc(collection(db, "posts"), postId);
        await updateDoc(postDocRef, {
          views: increment(1 / 3),
        });
        console.log("Views increased successfully");
      } catch (error) {
        console.error("Error increasing views:", error);
      }
    }
  };

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
          setViews(parseInt(postData?.views) || 0);
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
        console.error("Error fetching data:", error);
      }
    }
  };

  const CommentinputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 50) {
      CommentinputText(e.target.value);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleBorderClick = () => {
    navigate("/writepage");
  };

  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const getData = async () => {
      await increaseViews();
      await fetchData();
      await fetchComments();
    };

    getData();
  }, [user, postId]);

  // 댓글 데이터 가져오는 함수 추가
  const fetchComments = async () => {
    try {
      const commentsSnapshot = await getDocs(
        query(collection(db, "comments"), where("postId", "==", postId))
      );
      const commentsData = commentsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentsData);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCommentSend = async () => {
    try {
      if (Commentinput.trim() !== "") {
        const currentUser = auth.currentUser;

        if (currentUser) {
          const userDocRef = doc(collection(db, "users"), currentUser.uid);
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();

            // comments 컬렉션에 추가할 댓글 데이터
            const commentData = {
              author: userData?.nickname || "",
              authorUniv: userData?.univName || "",
              authorMajor: userData?.major || "",
              content: Commentinput,
              createAt: serverTimestamp(),
              updateAt: null,
              postId: postId,
            };

            // comments 컬렉션에 댓글 추가
            const commentRef = await addDoc(
              collection(db, "comments"),
              commentData
            );

            // 댓글의 문서 참조를 사용하여 commentId 필드 업데이트
            await updateDoc(commentRef, {
              commentId: commentRef.id,
            });

            setComments((prevComments) => {
              return [...prevComments, { id: commentRef.id, ...commentData }];
            });

            CommentinputText("");
            fetchData();

            const postDocRef = doc(collection(db, "posts"), postId);
            await updateDoc(postDocRef, {
              comCnt: increment(1),
            });
          }
        }
      }
    } catch (error) {
      console.error("댓글 추가 중 오류:", error);
    }
  };

  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLikeClick = async () => {
    try {
      const postDocRef = doc(collection(db, "posts"), postId);

      // 좋아요 상태 변경
      const liked = !isLiked;

      console.log("postId:", postId);
      console.log("liked:", liked);

      // 좋아요 카운트 증가 또는 감소
      await updateDoc(postDocRef, {
        likeCnt: liked ? increment(1) : increment(-1),
      });

      // isLiked 상태 업데이트
      setIsLiked(liked);

      // fetchData 함수 호출 또는 likeCnt 상태 업데이트
      fetchData(); // 또는 setLikeCnt(현재 likeCnt 값 + (liked ? -1 : 1));
    } catch (error) {
      console.error("Error handling like:", error);
    }
  };

  const [category, setCategory] = useState("");

  const fetchPost = async () => {
    const docRef = doc(db, "posts", postId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const fetchedCategory = docSnap.data().category;
      console.log("Loaded category:", fetchedCategory); // 로드된 카테고리 로그 출력
      setCategory(fetchedCategory);
    } else {
      console.log("문서를 찾을 수 없습니다.");
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  const categoryToURL = (categoryName: string) => {
    const mapping = {
      "비밀 게시판": "/secretarticlelist",
      "자유 게시판": "/freearticlelist",
      "정보 게시판": "/inforarticlelist",
      "hot 게시판": "/hotarticlelist",
    };
    console.log("Mapping for:", categoryName, "is", mapping[categoryName]);
    return mapping[categoryName] || "/";
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      console.log("Current category for redirection:", category); // 리디렉션 전 카테고리 로그 출력
      const redirectPath = categoryToURL(category);

      console.log("Redirecting to:", redirectPath); // 리디렉션 경로 로그 출력
      navigate(redirectPath);
    } catch (error) {
      console.error("게시글 삭제 중 오류 발생:", error);
    }
  };

  return (
    <div className="container">
      <div className="container__line-1"></div>
      <div className="container__line-2"></div>
      <div className="container__line-3"></div>
      <div className="container__deleteI" onClick={() => handleDelete(postId)}>
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

      <div className="container__comment-count">
        조회수 {views}회, 댓글 {comCnt}개
      </div>

      <div className="container__Eheart" onClick={handleLikeClick}>
        <img
          src={isLiked ? heart : Eheart}
          alt={isLiked ? "heart" : "Eheart"}
        />
      </div>

      <div className="container__comList">
        {comments.map((comment) => (
          <div className="container__comList__comment" key={comment.id}>
            <div className="container__comList__comment__comment-header">
              <img
                src={ikname}
                alt="ikname"
                className="container__comList__comment__commentheader__comment-image"
              />
              <span className="container__comList__comment__commentheader__comment-dauthor">
                {comment.author} ({comment.authorUniv}, {comment.authorMajor})
              </span>
            </div>
            <div className="container__comList__comment__comment-content">
              {comment.content}
              <img
                src={send}
                alt="send"
                className="container__comList__comment__comment-edit-btn"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="container__ellipse-1">
        <img src={ikname} alt="ikname" />
      </div>

      <div className="container__rectangle-2"></div>
      <div className="container__rectangle-3"></div>
      <input
        className="container__comment-input"
        type="text"
        value={Commentinput}
        onChange={CommentinputChange}
        onKeyPress={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // 엔터 키 기본 동작 방지
            handleCommentSend(); // 댓글 전송 함수 호출
          }
        }}
        placeholder="내용을 입력하세요."
      />
      <div className="container__comment-send" onClick={handleCommentSend}>
        <img src={send} alt="send" />
      </div>
    </div>
  );
};

export default PostIn;
