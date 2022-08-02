// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import Background from "../../components/Background/Background";
import Header from "../../components/Header/Header";
import HeroText from "../../components/Hero/HeroText";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const HomePage = () => {
  return (
    <Background>
      <Header></Header>
      <HeroText></HeroText>
    </Background>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HomePage;
