// Test -------------------------- Importing the Packages ---------------------------------
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const CoinDescription = (props) => {
  const { coinData } = props;
  // For checking whether we are getting the correct coin Data or not
  console.log(coinData);

  const {symbol, label} = useSelector((state) => state.currencyChanger);
  console.log(symbol);

  return (
    <Box>
      <Box
        component="img"
        alt={coinData?.name}
        src={coinData?.image.large}
        loading="lazy"
      ></Box>

      <Box display="flex" flexDirection="column" gap="2px">
        <Typography variant="h4">{coinData?.symbol.toUpperCase()}</Typography>
        <Typography variant="body1">{coinData?.name}</Typography>
        <Typography variant="body2">{coinData?.description.en}</Typography>
      </Box>

      <Box>
        <Typography variant="h6">Rank : {coinData?.market_cap_rank}</Typography>
        <Typography variant="h6">
          Current Price : {symbol} {coinData?.market_data?.current_price[label.toLowerCase()]}
        </Typography>
        <Typography variant="h6">
          Market Cap : {symbol} {coinData?.market_data?.market_cap[label.toLowerCase()]}
        </Typography>
      </Box>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinDescription;
