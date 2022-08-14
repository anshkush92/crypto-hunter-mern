// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import Image from "../../assets/crypto.jpg";

// Test -------------------------- The current component ----------------------------------
// Contains the image with the pre-defined height and the width
const HeroImage = () => {
  return (
    <Box
      component="img"
      alt="Crypto Image"
      src={Image}
      sx={{ height: "50vh", objectFit: "cover" }}
    ></Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroImage;
