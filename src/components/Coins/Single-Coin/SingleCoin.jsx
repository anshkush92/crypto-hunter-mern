// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import CoinDescription from "./CoinDescription";
import useCoinGeckoSingleCoin from "../../../hooks/coinGecko/useCoinGeckoSingleCoin";

// Test -------------------------- The current component ----------------------------------
const SingleCoin = (props) => {
  const { coinId } = props;
  const coinData = useCoinGeckoSingleCoin(coinId);

  // For checking whether the data that we are getting is correct or not
  // console.log(coinId, coinData);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="95%"
      margin="0px auto"
      padding="30px 0px"
    >
      <CoinDescription coinData={coinData}></CoinDescription>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default SingleCoin;
