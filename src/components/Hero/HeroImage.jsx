// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import Image from "../../assets/crypto.jpg";

// Test -------------------------- The current component ----------------------------------
// Contains the image with the pre-defined HEIGHT and the WIDTH and <div> </div> as the WRAPPER

// <div>
//      <img> </img>
// </div>

const HeroImage = () => {
  return (
    <Box height="100%">
      <Box
        component="img"
        alt="Crypto Image"
        src={Image}
        sx={{ height: "100%", width: "100%", objectFit: "cover" }}
      ></Box>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroImage;
