// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Test -------------------------- Importing the styles / other components ----------------
import Background from "../../components/Background/Background";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import CoinsTable from "../../components/Coins/Table/CoinsTable";
import Search from "../../components/Coins/Search/Search";

// Test -------------------------- The current component ----------------------------------
const HomePage = () => {
  // Home page is working fine ------> Getting the HERO CONTENT on the HERO IMAGE and other content not on HERO IMAGE
  const isDarkMode = useSelector((state) => state.toggleTheme.isDarkMode);

  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Background>
        <Header></Header>
        <Hero></Hero>
        <Search></Search>
        <CoinsTable></CoinsTable>
      </Background>
    </ThemeProvider>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HomePage;
