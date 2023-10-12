import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./vite.svg";
import "./App.css";
import SettingsPage from "./SettingsPage/SettingsPage";
// import Login from "./Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return <SettingsPage />;
}

export default App;
