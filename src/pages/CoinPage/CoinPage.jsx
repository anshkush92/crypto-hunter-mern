// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import { useParams } from "react-router-dom";
import Background from "../../components/Background/Background";
import SingleCoin from "../../components/Coins/Single-Coin/SingleCoin";
import Header from "../../components/Header/Header";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
// This page is rendered when clicked on the Read More section of the coin
const CoinPage = () => {
  // Using params here, because, this page, contains the dynamic parameter in the URL, not any other page
  const params = useParams();
  const coinId = params.coinId;

  return (
    <Background>
      <Header></Header>
      This is {coinId}
      <SingleCoin coinId={coinId}></SingleCoin>
    </Background>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinPage;
