// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import { useParams } from "react-router-dom";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const CoinPage = () => {
  const params = useParams();
  const coinName = params.coinName;

  return <div>This is {coinName} coin</div>;
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinPage;
