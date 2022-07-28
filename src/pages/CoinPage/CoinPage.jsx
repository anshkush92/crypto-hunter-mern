// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import { useParams } from "react-router-dom";
import Background from "../../components/Background/Background";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const CoinPage = () => {
  const params = useParams();
  const coinName = params.coinName;

  return <Background>This is {coinName} </Background>;
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinPage;
