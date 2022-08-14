import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CoinPage from "./pages/CoinPage/CoinPage";

import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/404Page/ErrorPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";

import useCoinGeckoPing from "./hooks/coinGecko/useCoinGeckoPing";
import useCoinGeckoTrending from "./hooks/coinGecko/useCoinGeckoTrending";

const App = () => {
  // Giving the path ---> Testing
  const hello = useCoinGeckoPing();
  // Testing out the Coin Gecko Trending Endpoint
  const trending = useCoinGeckoTrending();

  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/coins/:coinName" element={<CoinPage></CoinPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  );
};

export default App;
