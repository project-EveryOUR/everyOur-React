import React from "react";
import "./MyReply.scss";
import Backbtn from "../assets/Backbtn.svg";
import { Link, useNavigate } from "react-router-dom";
// import LikeBtn from "../MyPost/LikeBtn";
import everyOURLogo from "../assets/logo.svg";
const MyReply = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="replys">
      <Link to={"/"}>
        <img
          src={everyOURLogo}
          alt="everyOURLogo"
          className="Langset__Logo"
        />
      </Link>
       <img src={Backbtn} alt="Backbtn" className="replys__Backbtn" onClick={goBack} />
      <h2 className="replys__reply-title">내 댓글 목록</h2>

      <div className="replys__reply-list">
        <li className="replys__reply-list__reply-li">
          <span className="replys__reply-list__reply-li__reply-tit">댓글1</span>
          <div className="replys__reply-list__reply-li__reply-row">
            {/* <LikeBtn count={1} /> */}
            <span className="replys__reply-list__reply-li__reply-row__reply-reg">
              2023-09-30
            </span>
          </div>
        </li>
      </div>
    </div>
  );
};

export default MyReply;
