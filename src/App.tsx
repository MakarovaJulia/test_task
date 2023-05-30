import {FC, useEffect} from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {MainPage} from "./pages/MainPage/MainPage";
import {SignupPage} from "./pages/SignupPage/SignupPage";
import {AddUsersPage} from "./pages/AddUsersPage/AddUsersPage";
import {useStores} from "./utils/use-stores-hook";
import {ProtectedRoute} from "./utils/protectedRoute";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";

const App: FC = () => {
  const {
    authStore: { isAuthorized },
  } = useStores();

  useEffect(()=>{
    console.log(isAuthorized)
  },[isAuthorized])

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route element={<ProtectedRoute isAllowed={isAuthorized} />}>
        <Route path="/main" element={<MainPage />} />
        <Route path="/users" element={<AddUsersPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;