import React from "react";
import "./MyLike.scss";
import LikeBtn from "../MyPost/LikeBtn";
import Backbtn from "../assets/Backbtn.svg";
import { Link, useNavigate } from "react-router-dom";
import everyOURLogo from "../assets/logo.svg";
const MyLike = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="mylike">
      <Link to={"/"}>
        <img src={everyOURLogo} alt="everyOURLogo" className="Langset__Logo" />
      </Link>
      <img
        src={Backbtn}
        alt="Backbtn"
        className="mylike__Backbtn"
        onClick={goBack}
      />
      <h2 className="mylike__like-title">내 좋아요 목록</h2>

      <div className="mylike__like-list">
        <li className="mylike__like-list__like-li">
          <p className="mylike__like-list__like-li__like-tit">
            닉네임님의 첫번째 게시물입니다.
          </p>
          <div className="mylike__like-list__like-li__like-row">
            <span className="mylike_like-list__like-li__like-row__like-reply">
              댓글1
            </span>
            <span className="mylike__like-list__like-li__like-row__like-likebtn">
              <LikeBtn count={1} />
            </span>
            <span className="mylike__like-list__like-li__like-row__like-reg">
              2023-09-30
            </span>
          </div>
        </li>
      </div>
    </div>
  );
};

export default MyLike;
