import "./App.css";
import MainPage from "./MainPage/mainPage";
import ArticleList from "./ArticleList/ArticleList";
import { Route, Routes } from "react-router-dom";
import React from "react";
import MyLike from "./MyLike/MyLike";
import Email from "./Email/Email";
import LoginPage from "./LoginPage/LoginPage";
import MyReply from "./MyReply/MyReply";
import Nickname from "./Nickname/Nickname";
import Pw from "./Pw/Pw";
import SettingsPage from "./SettingsPage/SettingsPage";
import SignupPage from "./SignupPage/SignupPage";
import UnivShift from "./UnivShift/UnivShift";
import WritePage from "./WritePage/WritePage";
import MyPost from "./MyPost/MyPost";
import Leave from "./Leave/Leave";
import FreeArticleList from "./ArticleList/FreeArticleList/FreeArticleList";
import HotArticleList from "./ArticleList/HotArticleList/HotArticleList";
import InfoArticleList from "./ArticleList/InfoArticleList/InfoArticleList";
import SecretArticleList from "./ArticleList/SecretArticleList/SecretArticleList";
import PostIn from "./PostIn/PostIn";

function App() {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      {/* <Route element={<ArticleList />} path="/articlelist" /> */}
      <Route element={<PostIn />} path="/PostIn" />
      <Route element={<MyLike />} path="/mylike" />
      <Route element={<MyPost />} path="/mypost" />
      <Route element={<Email />} path="/email" />
      <Route element={<LoginPage />} path="/loginpage" />
      <Route element={<MyReply />} path="/myreply" />
      <Route element={<Nickname />} path="/nickname" />
      <Route element={<Pw />} path="/pw" />
      <Route element={<SettingsPage />} path="/settingspage" />
      <Route element={<SignupPage />} path="/signuppage" />
      <Route element={<UnivShift />} path="/univshift" />
      <Route element={<WritePage />} path="/writepage" />
      <Route element={<Leave />} path="/leave" />
      <Route element={<FreeArticleList />} path="/freearticlelist" />
      <Route element={<HotArticleList />} path="/hotarticlelist" />
      <Route element={<InfoArticleList />} path="/infoarticlelist" />
      <Route element={<SecretArticleList />} path="/Secretarticlelist" />
    </Routes>
  );
}

export default App;
