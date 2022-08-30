import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CoinPage from "./pages/CoinPage/CoinPage";

import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/404Page/ErrorPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ExchangesPage from "./pages/ExchangesPage/ExchangesPage";
import CoinsPage from "./pages/CoinsPage/CoinsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/coins" element={<CoinsPage></CoinsPage>}></Route>
      <Route path="/coins/:coinId" element={<CoinPage></CoinPage>}></Route>
      <Route path="/news" element={<NewsPage></NewsPage>}></Route>
      <Route path="/exchanges" element={<ExchangesPage></ExchangesPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  );
};

export default App;
