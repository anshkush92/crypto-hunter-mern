// Test -------------------------- Importing the Packages ---------------------------------
import { Box, Typography } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const HeroText = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center">
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Crypto Hunter
      </Typography>
      <Typography variant="body1">
        Get all the information related to crypto coins in One place
      </Typography>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroText;
