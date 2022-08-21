// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import Background from "../../components/Background/Background";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import CoinsTable from "../../components/Coins/Table/CoinsTable";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const HomePage = () => {
  // Home page is working fine ------> Getting the HERO CONTENT on the HERO IMAGE and other content not on HERO IMAGE
  return (
    <Background>
      <Header></Header>
      <Hero></Hero>
      <CoinsTable></CoinsTable>
    </Background>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HomePage;
