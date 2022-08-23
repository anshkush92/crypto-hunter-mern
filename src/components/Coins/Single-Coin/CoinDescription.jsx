// Test -------------------------- Importing the Packages ---------------------------------
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const CoinDescription = (props) => {
  const { coinData } = props;
  const { symbol, label } = useSelector((state) => state.currencyChanger);

  // For checking whether we are getting the correct coin Data or not ------> CORRECT DATA
  // console.log(symbol, label, coinData);

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Box
          component="img"
          alt={coinData?.name}
          src={coinData?.image.large}
          loading="lazy"
        ></Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="2px">
        <Typography variant="h4" textAlign="center">
          {coinData?.name}
        </Typography>
        <Typography variant="body1" textAlign="center">
          {coinData?.symbol.toUpperCase()}
        </Typography>
        <Typography variant="body2" sx={{a: {color: "gold"}}}>{parse(coinData?.description.en || "")}</Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Typography variant="h6">Rank : {coinData?.market_cap_rank}</Typography>
        <Typography variant="h6">
          Current Price : {symbol}{" "}
          {coinData?.market_data?.current_price[label.toLowerCase()]}
        </Typography>
        <Typography variant="h6">
          Market Cap : {symbol}{" "}
          {coinData?.market_data?.market_cap[label.toLowerCase()]}
        </Typography>
      </Box>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinDescription;
