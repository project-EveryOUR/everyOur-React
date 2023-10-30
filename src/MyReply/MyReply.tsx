import React from "react";
import "./MyReply.scss";
import { Link } from "react-router-dom";
// import LikeBtn from "../MyPost/LikeBtn";

const MyReply = () => {
  return (
    <div className="replys">
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
      <Link to={"/settingspage"}>
        <button className="replys__reply-btn">이전</button>
      </Link>
    </div>
  );
};

export default MyReply;
