import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CoinPage from "./pages/CoinPage/CoinPage";

import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/404Page/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/coins/:coinName" element={<CoinPage></CoinPage>}></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  );
}

export default App;
