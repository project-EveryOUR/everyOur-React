import React from "react";
import "./MyPost.scss";
import "./LikeBtn";
import LikeBtn from "./LikeBtn";
import { Link } from "react-router-dom";

const MyPost = () => {
  return (
    <div className="position-relative">
      <h2>내가 쓴 글 목록</h2>

      <div className="myposts_list">
        <li className="myposts_list_li">
          <span className="mytitle">글1</span>
          <div className="info-row">
            <span className="myreply_cnt">댓글1</span>
            <LikeBtn count={1} />
            <span className="created_at">2023-09-30</span>
          </div>
        </li>

        <li className="myposts_list_li">
          <span className="mytitle">글2</span>
          <div className="info-row">
            <span className="myreply_cnt">댓글2</span>
            <LikeBtn count={1} />
            <span className="created_at">2023-09-30</span>
          </div>
        </li>

        <li className="myposts_list_li">
          <span className="mytitle">글3</span>
          <div className="info-row">
            <span className="myreply_cnt">댓글3</span>
            <LikeBtn count={1} />
            <span className="created_at">2023-09-30</span>
          </div>
        </li>

        <li className="myposts_list_li">
          <span className="mytitle">글4</span>
          <div className="info-row">
            <span className="myreply_cnt">댓글4</span>
            <LikeBtn count={1} />
            <span className="created_at">2023-09-30</span>
          </div>
        </li>

        <li className="myposts_list_li">
          <span className="mytitle">글5</span>
          <div className="info-row">
            <span className="myreply_cnt">댓글5</span>
            <LikeBtn count={1} />
            <span className="created_at">2023-09-30</span>
          </div>
        </li>

        <li className="myposts_list_li">
          <span className="mytitle">글6</span>
          <div className="info-row">
            <span className="myreply_cnt">댓글6</span>
            <LikeBtn count={1} />
            <span className="created_at">2023-09-30</span>
          </div>
        </li>

        <li className="myposts_list_li">
          <span className="mytitle">글7</span>
          <div className="info-row">
            <span className="myreply_cnt">댓글7</span>
            <LikeBtn count={1} />
            <span className="created_at">2023-09-30</span>
          </div>
        </li>

        <li className="myposts_list_li">
          <span className="mytitle">글8</span>
          <div className="info-row">
            <span className="myreply_cnt">댓글8</span>
            <LikeBtn count={1} />
            <span className="created_at">2023-09-30</span>
          </div>
        </li>

        <li className="myposts_list_li">
          <span className="mytitle">글9</span>
          <div className="info-row">
            <span className="myreply_cnt">댓글9</span>
            <LikeBtn count={1} />
            <span className="created_at">2023-09-30</span>
          </div>
        </li>

        <li className="myposts_list_li">
          <span className="mytitle">글10</span>
          <div className="info-row">
            <span className="myreply_cnt">댓글10</span>
            <LikeBtn count={1} />
            <span className="created_at">2023-09-30</span>
          </div>
        </li>
      </div>
      <Link to={"/settingspage"}>
        <button className="submit-btn">이전</button>
      </Link>
    </div>
  );
};

export default MyPost;
