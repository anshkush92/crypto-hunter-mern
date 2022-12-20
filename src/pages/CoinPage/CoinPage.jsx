// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Test -------------------------- Importing the styles / other components ----------------
import Background from "../../components/Background/Background";
import SingleCoin from "../../components/Coins/Single-Coin/SingleCoin";
import Header from "../../components/Header/Header";

// Test -------------------------- The current component ----------------------------------
// This page is rendered when clicked on the Read More section of the coin
const CoinPage = () => {
  // Trying to provide the dark theme to the Coin page
  const isDarkMode = useSelector((state) => state.toggleTheme.isDarkMode);

  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  // Using params here, because, this page, contains the dynamic parameter in the URL, not any other page
  const params = useParams();
  const coinId = params.coinId;

  return (
    <ThemeProvider theme={darkTheme}>
      <Background>
        <Header></Header>
        <SingleCoin coinId={coinId}></SingleCoin>
      </Background>
    </ThemeProvider>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinPage;
