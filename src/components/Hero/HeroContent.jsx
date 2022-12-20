// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import HeroCaraousel from "./HeroCaraousel";
import HeroExchangeContainer from "./HeroExchangeContainer";
import HeroText from "./HeroText";

// Test -------------------------- The current component ----------------------------------
// Contains all the TEXT + CARAOUSEL related CONTENT in the HERO IMAGE with position ABSOLUTE

// <div>
//      <text> </text>
//      <caraousel> </caraousel>
// </div>

const HeroContent = () => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="16px 0px"
      sx={{ gap: "30px", zIndex: "10" }}
    >
      <HeroText></HeroText>
      <HeroCaraousel></HeroCaraousel>
      <HeroExchangeContainer></HeroExchangeContainer>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroContent;
