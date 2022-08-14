// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/material";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const Hero = () => {
  return (
    <Box display="flex" flexDirection="column" position="relative">
      <HeroImage></HeroImage>
      <HeroText></HeroText>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Hero;
