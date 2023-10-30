import React, { useState, useRef } from 'react';
import './WritePage.scss';
import filelinkImage from './filelink.svg';
import writebtnImage from './writebtn.svg';
import { Link, useLocation } from 'react-router-dom';

const WritePageComponent: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFilelinkClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };


  const [Titletext, setTitleText] = useState<string>('');
  const [Contenttext, setContentText] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const TitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 16) {
      setTitleText(e.target.value);
    }
  };

  const ContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentText(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const newContent = `${Contenttext}\n첨부된 파일: ${files[0].name}`;
      setContentText(newContent);
      setSelectedFile(files[0]);
    }
  };

  return (
    <div className="writepage">
      <input
        className="writepage__title"

        value={Titletext}
        onChange={TitleChange}
        placeholder="제목을 입력하세요. (최대 16글자)"
      />
      <div className="writepage__line"></div>
      <textarea
        className="writepage__content"
        value={Contenttext}
        onChange={ContentChange}
        placeholder="내용을 입력하세요."
      />
      <div className="writepage__filelink" onClick={handleFilelinkClick}>
        <img src={filelinkImage} alt="filelink" />
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    <Link to={`/PostIn?title=${Titletext}&content=${Contenttext}`}>
    <div className="writepage__writebtn">
    <img src={writebtnImage} alt="writebtn" />
    </div>
    </Link>
    </div>
  );
};

export default WritePageComponent;