import "./App.css";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./features/userHandler/userHandler";
import { setFavoriteCoinsList } from "./features/coinsList/coinsList";

import HomePage from "./pages/HomePage/HomePage";
import CoinPage from "./pages/CoinPage/CoinPage";

import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/404Page/ErrorPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";

import { db } from "./firebase";
import { doc, onSnapshot } from "firebase/firestore";

const App = () => {
  const dispatch = useDispatch();

  // const favorite = useSelector(
  //   (state) => state.coinsListHandler.favoriteCoinsList
  // );

  // For checking whether the data that we are getting is correct or not
  // console.log(favorite);

  // Getting the user from the local storage
  useEffect(() => {
    const input = JSON.parse(localStorage.getItem("user"));
    // console.log(`Input`, input);
    if (input) {
      dispatch(loginUser(input));
    }
  }, [dispatch]);

  const user = useSelector((state) => state.userHandler.user);

  useEffect(() => {
    if (user) {
      const coinRef = doc(db, "favorite", user.uid);
      const unsubscribe = onSnapshot(coinRef, (doc) => {
        if (doc.exists()) {
          // console.log("Document data:", doc.data());
          dispatch(setFavoriteCoinsList(doc.data().coins));
        } else {
          // doc.data() will be undefined in this case
          console.log("items in the favorite list: 0");
        }
      });
      return () => {
        unsubscribe();
      };
    }
  }, [user, dispatch]);

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
