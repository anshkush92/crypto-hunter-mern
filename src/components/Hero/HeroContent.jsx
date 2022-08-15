// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/material";
import HeroCaraousel from "./HeroCaraousel";
import HeroExchange from "./HeroExchange";
import HeroText from "./HeroText";

// Test -------------------------- Importing the styles / other components ----------------

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
      position="absolute"
      top="50%"
      left="50%"
      alignItems="center"
      sx={{ transform: "translate(-50%, -50%)", gap: "30px"}}
    >
      <HeroText></HeroText>
      <HeroCaraousel></HeroCaraousel>
      <HeroExchange></HeroExchange>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroContent;
