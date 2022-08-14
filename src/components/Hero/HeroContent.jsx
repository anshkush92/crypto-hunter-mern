// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/material";
import HeroCaraousel from "./HeroCaraousel";
import HeroText from "./HeroText";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
// Contains all the TEXT + CARAOUSEL related CONTENT in the HERO IMAGE
const HeroContent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="absolute"
      top="50%"
      left="50%"
      alignItems="center"
      sx={{ transform: "translate(-50%, -50%)", gap: "30px", zIndex: "10001"}}
    >
      <HeroText></HeroText>
      <HeroCaraousel></HeroCaraousel>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroContent;
