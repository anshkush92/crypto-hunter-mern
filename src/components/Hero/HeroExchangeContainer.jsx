// Test -------------------------- Importing the Packages ---------------------------------
import { Box} from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import HeroExchange from "./HeroExchange";

// Test -------------------------- The current component ----------------------------------
const HeroExchangeContainer = () => {
  return (
    <Box display="flex" alignItems="center" gap="30px">
      <HeroExchange label="FROM"></HeroExchange>
      <HeroExchange label="TO"></HeroExchange>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroExchangeContainer;
