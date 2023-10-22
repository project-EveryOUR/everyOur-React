import { useState } from "react";
import "./App.css";
import MainPage from "./MainPage/MainPage";
import ArticleList from "./ArticleList/ArticleList";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<ArticleList />} path="/article" />
    </Routes>
    // <ArticleList />
  );
}

export default App;
