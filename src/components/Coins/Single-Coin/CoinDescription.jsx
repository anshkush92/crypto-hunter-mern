// Test -------------------------- Importing the Packages ---------------------------------
import { useState, useEffect } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const CoinDescription = (props) => {
  const { coinData } = props;
  const { symbol, label } = useSelector((state) => state.currencyChanger);

  // Setting the state to the loading, then we will change it when it is not undefined
  const [isLoading, setIsLoading] = useState(true);

  // For checking whether we are getting the correct coin Data or not ------> CORRECT DATA
  // console.log(symbol, label, coinData);

  const coin = {
    name: coinData?.name,
    image: coinData?.image.large,
    symbol: coinData?.symbol.toUpperCase(),
    description: parse(coinData?.description.en || ""),
    rank: coinData?.market_cap_rank,
    price: coinData?.market_data?.current_price[label.toLowerCase()],
    marketCap: coinData?.market_data?.market_cap[label.toLowerCase()],
    change24hr: coinData?.market_data?.market_cap_change_percentage_24h,
  };

  useEffect(() => {
    // Should be true if coin name is not defined
    setIsLoading(coin.name === undefined);
    // console.log(coin.name, isLoading);
    return () => {
      console.log("Cleanup function from Coin Description");
    };
  }, [coin.name]);

  return isLoading ? (
    <LinearProgress sx={{ backgroundColor: "gold" }}></LinearProgress>
  ) : (
    <Box>
      <Box display="flex" justifyContent="center" mb="15px">
        <Box
          component="img"
          alt={coin.name}
          src={coin.image}
          loading="lazy"
        ></Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="2px" mb="8px">
        <Typography variant="h4" textAlign="center" fontWeight="900">
          {coin.name}
        </Typography>
        <Typography variant="h5" textAlign="center" fontWeight="900">
          {coin.symbol}
        </Typography>
        <Typography variant="body1" sx={{ a: { color: "gold" } }}>
          {coin.description}
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Typography variant="h6" fontWeight="900">
          Rank :{" "}
          <Typography component="span" variant="h6" sx={{ color: "gold" }}>
            {coin.rank}
          </Typography>
        </Typography>

        <Typography variant="h6" fontWeight="900">
          Current Price :{" "}
          <Typography component="span" variant="h6" sx={{ color: "gold" }}>
            {symbol} {coin.price}
          </Typography>
        </Typography>

        <Typography variant="h6" fontWeight="900">
          Market Cap :{" "}
          <Typography component="span" variant="h6" sx={{ color: "gold" }}>
            {symbol} {coin.marketCap}
          </Typography>
        </Typography>

        <Typography variant="h6" fontWeight="900">
          Market Cap Change 24 hr :{" "}
          <Typography
            component="span"
            variant="h6"
            sx={{ color: coin.change24hr >= 0 ? "green" : "red" }}
          >
            {coin.change24hr} %
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinDescription;
