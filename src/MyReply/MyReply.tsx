import React from "react";
import "./MyReply.scss";
import { Link } from "react-router-dom";
// import LikeBtn from "../MyPost/LikeBtn";

const MyReply = () => {
  return (
    <div className="position-relative">
      <h2>내 댓글 목록</h2>

      <div className="myreplys_list">
        <li className="myreplys_list_li">
          <span className="myreply">댓글1</span>
          <div className="info-row">
            {/* <LikeBtn count={1} /> */}
            <span className="reg_at">2023-09-30</span>
          </div>
        </li>

        <li className="myreplys_list_li">
          <span className="myreply">댓글2</span>
          <div className="info-row">
            {/* <LikeBtn count={1} /> */}
            <span className="reg_at">2023-09-30</span>
          </div>
        </li>

        <li className="myreplys_list_li">
          <span className="myreply">댓글2</span>
          <div className="info-row">
            {/* <LikeBtn count={1} /> */}
            <span className="reg_at">2023-09-30</span>
          </div>
        </li>

        <li className="myreplys_list_li">
          <span className="myreply">댓글2</span>
          <div className="info-row">
            {/* <LikeBtn count={1} /> */}
            <span className="reg_at">2023-09-30</span>
          </div>
        </li>

        <li className="myreplys_list_li">
          <span className="myreply">댓글2</span>
          <div className="info-row">
            {/* <LikeBtn count={1} /> */}
            <span className="reg_at">2023-09-30</span>
          </div>
        </li>
      </div>
      <Link to={"/settingspage"}>
        <button className="submit-btn">이전</button>
      </Link>
    </div>
  );
};

export default MyReply;
