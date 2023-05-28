import { FC } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {MainPage} from "./pages/MainPage/MainPage";
import {SignupPage} from "./pages/SignupPage";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};

export default App;