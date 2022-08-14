// Test -------------------------- Importing the Packages ---------------------------------
import { Box, Typography } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import Image from "../../assets/crypto.jpg";

// Test -------------------------- The current component ----------------------------------
const HeroText = () => {
  return (
    <Box display="flex" flexDirection="column" position="relative">
      <Box
        component="img"
        alt="Crypto Image"
        src={Image}
        sx={{ height: "50vh", objectFit: "cover" }}
      ></Box>
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
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroText;
