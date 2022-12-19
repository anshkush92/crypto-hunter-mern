import "./App.css";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "./features/userHandler/userHandler";

import HomePage from "./pages/HomePage/HomePage";
import CoinPage from "./pages/CoinPage/CoinPage";

import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/404Page/ErrorPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";

const App = () => {
  const dispatch = useDispatch();

  // Getting the user from the local storage
  useEffect(() => {
    const input = JSON.parse(localStorage.getItem("user"));
    console.log(`Input`, input);
    if (input) {
      dispatch(loginUser(input));
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/favorite" element={<FavoritePage></FavoritePage>}></Route>
      <Route path="/coins/:coinId" element={<CoinPage></CoinPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  );
};

export default App;
