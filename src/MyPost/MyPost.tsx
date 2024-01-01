import React from "react";
import "./MyPost.scss";
import "./LikeBtn";
import LikeBtn from "./LikeBtn";
import { Link, useNavigate} from "react-router-dom";
import Backbtn from "../assets/Backbtn.svg";
import everyOURLogo from "../assets/logo.svg";
const MyPost = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="mypost">
      <Link to={"/"}>
        <img
          src={everyOURLogo}
          alt="everyOURLogo"
          className="Langset__Logo"
        />
      </Link>
       <img src={Backbtn} alt="Backbtn" className="mypost__Backbtn" onClick={goBack} />
      <h2 className="mypost__post-title">내가 쓴 글 목록</h2>

      <div className="mypost__post-list">
        <li className="mypost__post-list__post-li">
          <p className="mypost__post-list__post-li__post-tit">
            닉네임님의 첫번째 게시물입니다.
          </p>
          <div className="mypost__post-list__post-li__post-row">
            <span className="mypost__post-list__post-li__post-row__post-reply">
              댓글1
            </span>
            <span className="mypost__post-list__post-li__post-row__post-likebtn">
              <LikeBtn count={1} />
            </span>
            <span className="mypost__post-list__post-li__post-row__post-reg">
              2023-09-30
            </span>
          </div>
        </li>
      </div>
    </div>
  );
};

export default MyPost;
