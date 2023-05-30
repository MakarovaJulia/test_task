import { FC } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {MainPage} from "./pages/MainPage/MainPage";
import {SignupPage} from "./pages/SignupPage/SignupPage";
import {AddUsersPage} from "./pages/AddUsersPage/AddUsersPage";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/users" element={<AddUsersPage />} />
    </Routes>
  );
};

export default App;