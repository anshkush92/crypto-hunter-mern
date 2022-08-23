// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/material";
import CoinChart from "./CoinChart";
import CoinDescription from "./CoinDescription";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const SingleCoin = () => {
  return (
    <Box>
      <CoinDescription></CoinDescription>
      <CoinChart></CoinChart>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default SingleCoin;
