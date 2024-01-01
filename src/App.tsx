import "./App.css";
import MainPage from "./mainPage/mainPage";
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
import VoteArticleList from "./ArticleList/VoteArticleList/VoteArticleList";
import InfoArticleList from "./ArticleList/InfoArticleList/InfoArticleList";
import SecretArticleList from "./ArticleList/SecretArticleList/SecretArticleList";
import PostIn from "./PostIn/PostIn";
import Langset from "./LangsetPage/LangsetPage";
import UsePage from "./UsePage/UsePage";
import InfoPage from "./ArticleList/InfoPage/InfoPage";
import { AuthProvider } from "./AuthContext";
function App() {
  return (

    <AuthProvider>
      <Routes>
        <Route element={<MainPage />} path="/" />
        {/* <Route element={<ArticleList />} path="/articlelist" /> */}
        <Route element={<PostIn />} path="/postIn" />
        <Route element={<MyLike />} path="/mylike" />
        <Route element={<MyPost />} path="/mypost" />
        <Route element={<Email />} path="/email" />
        <Route element={<LoginPage />} path="/loginpage/경기 남부" />
        <Route element={<LoginPage />} path="/loginpage/경기 북부" />
        <Route element={<MyReply />} path="/myreply" />
        <Route element={<Nickname />} path="/nickname" />
        <Route element={<Pw />} path="/pw" />
        <Route element={<SettingsPage />} path="/settingspage" />
        <Route element={<SignupPage />} path="/signuppage" />
        <Route element={<UnivShift />} path="/univshift" />
        <Route element={<WritePage />} path="/writepage" />
        <Route element={<Leave />} path="/leave" />
        <Route element={<FreeArticleList />} path="/freearticlelist" />
        <Route element={<VoteArticleList />} path="/votearticlelist" />
        <Route element={<InfoArticleList />} path="/infoarticlelist" />
        <Route element={<SecretArticleList />} path="/secretarticlelist" />
        <Route element={<Langset />} path="/langset" />
        <Route element={<UsePage />} path="/usepage" />
        <Route element={<InfoPage />} path="/infopage" />
        <Route element={<PostIn />} path="/postIn/:postId" />
      </Routes>
    </AuthProvider>

  );
}

export default App;
