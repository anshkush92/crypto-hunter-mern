// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/material";
import HeroContent from "./HeroContent";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const Hero = () => {
  return (
    <Box display="flex" flexDirection="column" position="relative">
      {/* <HeroImage></HeroImage> */}
      <HeroContent></HeroContent>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Hero;
