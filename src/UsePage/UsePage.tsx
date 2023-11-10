import React from "react";
import "./UsePage.scss";

const UsePage = () => {
  return (
    <div className="usepage">
      <h2 className="usepage__usepage-title">사용 문의</h2>
      <br></br>
      <div className="usepage__usebox">
        <p className="usepage__usebox__usepage_text">
          사용 문의는 DM으로 부탁드립니다.
        </p>
        <p className="usepage__usebox__usepage_insta">@chamwhea</p>
      </div>
    </div>
  );
};
export default UsePage;