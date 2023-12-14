import React, { useState, useRef, ChangeEvent } from "react";
import "./WritePage.scss";
import filelinkImage from "./filelink.svg";
import writebtnImage from "./writebtn.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  DocumentReference,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  DocumentData,
  addDoc,
  getDoc,
} from "firebase/firestore";
import {
  postCollection,
  signInWithGoogle,
  auth,
  provider,
  db,
  usersCollection,
  userConverter,
  signOutUser,
  postConverter,
} from "../firebase";

interface UserData {
  nickname: string;
  major: string;
  univName: string;
}

interface PostData {
  content: string;
  createAt: Date;
  title: string;
  updateAt: Date;
  comCnt: number;
  likeCnt: number;
  views: number;
  author: DocumentReference<UserData> | null;
  authorMajor: DocumentReference<UserData> | null;
  authorUniv: DocumentReference<UserData> | null;
  category: string;
}

const WritePage: React.FC = () => {
  const CreateAt = new Date().toISOString();
  const UpdateAt = new Date().toISOString();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleFilelinkClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const [Titletext, setTitleText] = useState<string>("");
  const [Contenttext, setContentText] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showCategoryWarning, setShowCategoryWarning] =
    useState<boolean>(false);

  const navigate = useNavigate();

  const post = auth.currentUser;

  const [SelectedCategory, setSelectedCategory] = useState<string>("");

  const CategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const addPostData = async () => {
    if (post) {
      if (!SelectedCategory) {
        alert("카테고리를 선택하세요.");
        setShowCategoryWarning(true);
        return;
      }
      const userUid = post.uid;
      const userRef = doc(usersCollection, userUid);
      const userSnapshot = await getDoc(userRef);
      const userNickname = userSnapshot.data()?.nickname || "";
      const authorMajorRef = userSnapshot.data()?.major || null;
      const authorUnivRef = userSnapshot.data()?.univName || null;
      const postData: PostData = {
        views: 0,
        likeCnt: 0,
        comCnt: 0,
        content: Contenttext,
        title: Titletext,
        createAt: new Date(),
        updateAt: new Date(),
        author: userNickname,
        authorMajor: authorMajorRef,
        authorUniv: authorUnivRef,
        category: SelectedCategory,
      };
      try {
        const postCollectionRef = collection(db, "posts");
        const newPostDocRef = await addDoc(postCollectionRef, postData);
        console.log("글작성 완료");
        const postId = newPostDocRef.id;
        navigate(`/postIn/${postId}`);
      } catch (error) {
        console.error("error", error);
      }
    }
  };

  const goBack = () => {
    navigate(-1);
  };
  const TitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 16) {
      setTitleText(e.target.value);
    }
  };

  const ContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentText(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const newContent = `${Contenttext}\n첨부된 파일: ${files[0].name}`;
      setContentText(newContent);
      setSelectedFile(files[0]);
    }
  };

  return (
    <div className="writepage">
      <input
        className="writepage__title"
        value={Titletext}
        onChange={TitleChange}
        placeholder="제목을 입력하세요. (최대 16글자)"
      />
      <select
        className="writepage__category"
        value={SelectedCategory}
        onChange={CategoryChange}
      >
        <option value="">카테고리 선택</option>
        <option value="자유 게시판">자유 게시판</option>
        <option value="정보 게시판">정보 게시판</option>
        <option value="비밀 게시판">비밀 게시판</option>
        <option value="hot 게시판">hot 게시판</option>
      </select>
      <div className="writepage__line"></div>
      <textarea
        className="writepage__content"
        value={Contenttext}
        onChange={ContentChange}
        placeholder="내용을 입력하세요."
      />
      <div className="writepage__filelink" onClick={handleFilelinkClick}>
        <img src={filelinkImage} alt="filelink" />
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button className="writepage__writepage-btn" onClick={goBack}>
        이전
      </button>
      <div className="writepage__writebtn" onClick={addPostData}>
        <img src={writebtnImage} alt="writebtn" />
      </div>
    </div>
  );
};

export default WritePage;
