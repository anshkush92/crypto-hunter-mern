import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CoinPage from "./pages/CoinPage/CoinPage";

import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/404Page/ErrorPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import useCoinGeckoExchangeRates from "./hooks/coinGecko/useCoinGeckoExchangeRates";

const App = () => {

  const exchangeRates = useCoinGeckoExchangeRates("usd", "inr", 4);
  console.log(exchangeRates);

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
