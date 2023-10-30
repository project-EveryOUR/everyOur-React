import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import send from './send.svg';
import heart from './heart.svg';
import Eheart from './Eheart.svg';
import deleteI from './delete.svg';
import border_color from './border_color.svg';
import reply from './reply.svg';
import ikname from './ikname.svg';
import './PostIn.scss';

const PostIn: React.FC = () => {
  const currentDateTime = new Date();
  const year = currentDateTime.getFullYear();
  const month = String(currentDateTime.getMonth() + 1).padStart(2, '0');
  const day = String(currentDateTime.getDate()).padStart(2, '0');
  const hours = String(currentDateTime.getHours()).padStart(2, '0');
  const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get('title') || '';
  const content = searchParams.get('content') || '';
  const [Commentinput, CommentinputText] = useState<string>('');
  const [numnum, setNumNum] = useState(0);
  const [numnumnum, setNumNumNum] = useState(0);
  const [isHeart, setIsHeart] = useState(true);
  const CommentinputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 50) {
      CommentinputText(e.target.value);
    }
  };
  const [replyText2, setReplyText2] = useState<string>('');
  const handleCommentSend = () => {
    if (Commentinput.trim() !== '') {
      const newComment = Commentinput;
      setReplyText2(newComment);
      CommentinputText('');
      setNumNum(numnum + 1);
    }
  };
  const handleHeartClick = () => {
    if (isHeart) {
      setNumNumNum(numnumnum + 1); // Increase the count
    } else {
      setNumNumNum(numnumnum - 1); // Decrease the count
    }
    setIsHeart(!isHeart);
  };

  return (
    <div className="container">
      <div className="container__line-1"></div>
      <div className="container__line-2"></div>
      <div className="container__line-3"></div>
      <div className="container__line-4"></div>
      <div className="container__line-5"></div>
      <div className="container__line-6"></div>
      <div className="container__deleteI" >
        <img src={deleteI} alt="deleteI" />
      </div>
      <div className="container__border_color" >
        <img src={border_color} alt="border_color" />
      </div>
      <div className="container__title">{title}</div>
      <div className="container__content">{content}</div>
      <div className="container__author">김김김 (한세대학교 20, 소프트웨어)</div>
      <div className="container__timestamp">{formattedDateTime}</div>
      <div className="container__comment-count">댓글 {numnum}개</div>
      <div className="container__Eheart" onClick={handleHeartClick}>
        <img src={isHeart ? Eheart : heart} alt={isHeart ? "Eheart" : "heart"} />
      </div>
      <div className="container__number">{numnumnum}</div>
      <div className="container__reply-author2">윤윤윤 (한세대학교 18, 소프트웨어)</div>
      <div className="container__reply-text2">{replyText2}</div>
      <div className="container__reply-author">정정정 (한세대학교 18, ict 융합)</div>
      <div className="container__reply-text"></div>
      <div className="container__reply">
        <img src={reply} alt="reply" />
      </div>
      <div className="container__rectangle-1"></div>
      <div className="container__user-3-author">김김김 (한세대학교 20, 소프트웨어)</div>
      <div className="container__user-3-reply-text"></div>
      <div className="container__reply-send-1">
        <img src={send} alt="send" />
      </div>
      <div className="container__reply-send-2">
        <img src={send} alt="send" />
      </div>
      <div className="container__reply-send-3">
        <img src={send} alt="send" />
      </div>
      <div className="container__ellipse-1">
        <img src={ikname} alt="ikname" />
      </div>
      <div className="container__ellipse-2">
        <img src={ikname} alt="ikname" />
      </div>
      <div className="container__ellipse-3">
        <img src={ikname} alt="ikname" />
      </div>
      <div className="container__ellipse-4">
        <img src={ikname} alt="ikname" />
      </div>
      <div className="container__rectangle-2"></div>
      <div className="container__rectangle-3"></div>
      <input
        className="container__comment-input"
        type="text"
        value={Commentinput}
        onChange={CommentinputChange}
        placeholder="내용을 입력하세요."
      />
      <div className="container__comment-send" onClick={handleCommentSend}>
        <img src={send} alt="send" />
      </div>
    </div>
  );
};

export default PostIn;
