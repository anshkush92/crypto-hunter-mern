// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";

// Test -------------------------- Importing the styles / other components ----------------

import Background from "../../components/Background/Background";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import CoinsTable from "../../components/Coins/Table/CoinsTable";
import Search from "../../components/Coins/Search/Search";

// Test -------------------------- The current component ----------------------------------
const HomePage = () => {
  return (
    <Background>
      <Header></Header>
      <Hero></Hero>
      <Search></Search>
      <CoinsTable></CoinsTable>
    </Background>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HomePage;
