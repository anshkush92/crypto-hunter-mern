// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import CoinChart from "./CoinChart";
import CoinDescription from "./CoinDescription";
import useCoinGeckoSingleCoin from "../../../hooks/coinGecko/useCoinGeckoSingleCoin";

// Test -------------------------- The current component ----------------------------------
const SingleCoin = (props) => {
  const { coinId } = props;
  const coinData = useCoinGeckoSingleCoin(coinId);

  // For checking whether the data that we are getting is correct or not
  // console.log(coinId, coinData);

  return (
    <Box>
      <CoinDescription coinData={coinData}></CoinDescription>
      <CoinChart></CoinChart>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default SingleCoin;
