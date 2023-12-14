import React, { useState } from "react";
import "./Leave.scss";
import Backbtn from "../assets/Backbtn.svg";
import { Link, useNavigate } from "react-router-dom";
import everyOURLogo from "../assets/logo.svg";
import { deleteUser, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const Leave = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const auth = getAuth(); // Auth 객체 가져오기

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleConfirmation = async () => {
    // 사용자가 동의한 경우에만 진행
    if (!isChecked) {
      alert("탈퇴를 위해 안내 사항에 동의해주세요.");
      return;
    }

    try {
      // Firebase Authentication에서 현재 사용자 가져오기
      const user = auth.currentUser;

      // 현재 사용자가 존재하면 계정 삭제 진행
      if (user) {
        await deleteUser(user);
        alert("계정이 성공적으로 삭제되었습니다.");
        navigate("/"); // 탈퇴 후 홈페이지로 이동 또는 다른 작업 수행
        // Firestore의 해당 사용자 문서 업데이트
        const userId = user.uid;
        const userDocRef = doc(getFirestore(), "users", userId);

        // 이름을 '탈퇴한 사용자'로 변경
        await setDoc(
          userDocRef,
          { name: "탈퇴한 사용자", deleted: true },
          { merge: true }
        );
      } else {
        alert("현재 사용자를 찾을 수 없습니다.");
      }
    } catch (error) {
      console.error("계정 삭제 중 에러 발생:", error);
      alert("계정 삭제 중 에러가 발생했습니다.");
    }
  };

  return (
    <div className="leave">
      <Link to={"/"}>
        <img src={everyOURLogo} alt="everyOURLogo" className="Langset__Logo" />
      </Link>
      <img
        src={Backbtn}
        alt="Backbtn"
        className="leave__Backbtn"
        onClick={goBack}
      />
      <h2 className="leave__leave-title">탈퇴</h2>
      <p className="leave__leave-menual">
        회원탈퇴를 신청하기 전에 안내 사항을 꼭 확인해주세요.
      </p>
      <div className="leave__readbox">
        <p className="leave__readbox__leave-1">
          탈퇴 후 회원정보 및 개인형 서비스 이용기록은 모두 삭제됩니다.
        </p>
        <p className="leave__readbox__content-1">
          개인형 서비스 이용기록은 모두 삭제되며, 삭제된 데이터는 복구되지
          않습니다. <br />
          삭제되는 내용을 확인하시고 필요한 데이터는 미리 백업을 해주세요.
        </p>

        <p className="leave__readbox__leave-2">
          탈퇴 후에도 게시판형 서비스에 등록한 게시물은 그대로 남아 있습니다.
        </p>
        <p className="leave__readbox__content-2">
          게시글 및 댓글은 탈퇴 시 자동 삭제되지 않고 그대로 남아 있습니다.
          <br />
          삭제를 원하는 게시글이 있다면 반드시 탈퇴 전 삭제하시기 바랍니다.
          <br /> 탈퇴 후에는 회원정보가 삭제되어 본인 여부를 확인할 수 있는
          방법이 없어,
          <br />
          게시글을 임의로 삭제해드릴 수 없습니다.
        </p>
      </div>
      <p className="leave__content-3">
        탈퇴 후에는다시 가입할 수 없으며 아이디와 데이터는 복구할 수 없습니다.
        <br />
        게시판형 서비스에 남아 있는 게시글은 탈퇴 후 삭제할 수 없습니다.
      </p>

      <div className="leave__leave-check">
        <input
          type="checkbox"
          className="leave__leave-check__leave-box"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="leave__leave-check__leave-last">
          안내 사항을 모두 확인하였으며, 이에 동의합니다.
        </span>
      </div>
      <button onClick={handleConfirmation} className="leave__leave-btn">
        확인
      </button>
    </div>
  );
};

export default Leave;