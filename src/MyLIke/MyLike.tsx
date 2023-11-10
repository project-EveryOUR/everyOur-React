import React from "react";
import "./MyLike.scss";
import LikeBtn from "../MyPost/LikeBtn";
import { Link } from "react-router-dom";

const MyLike = () => {
  return (
    <div className="mylike">
      <h2 className="mylike__like-title">내 좋아요 목록</h2>

      <div className="mylike__like-list">
        <li className="mylike__like-list__like-li">
          <p className="mylike__like-list__like-li__like-tit">
            김수아님의 첫번째 게시물입니다.
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

      <Link to={"/settingspage"}>
        <button className="mylike__like-btn">이전</button>
      </Link>
    </div>
  );
};

export default MyLike;