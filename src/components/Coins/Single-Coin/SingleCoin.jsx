// Test -------------------------- Importing the Packages ---------------------------------
import { Box, Divider } from "@mui/material";

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
    <Box
      display="flex"
      flexDirection="column"
      width="95%"
      gap="30px"
      margin="30px auto"
    >
      <CoinDescription coinData={coinData}></CoinDescription>
      <Divider sx={{ backgroundColor: "white" }}></Divider>
      <CoinChart></CoinChart>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default SingleCoin;
