// Test -------------------------- Importing the Packages ---------------------------------
import { Box, Typography } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
// Contains the <div> as a wrapper which contains the <h4> and <p> tag with the logic for the text to be at the center of the hero image

// <div>
//      <h4> </h4>
//      <p> </p>
// </div> something like this

const HeroText = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="absolute"
      top="50%"
      left="50%"
      alignItems="center"
      sx={{ transform: "translate(-50%, -50%)" }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
        Crypto Hunter
      </Typography>
      <Typography variant="body1" sx={{ color: "white" }}>
        Get all the information related to crypto coins in One place
      </Typography>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroText;
