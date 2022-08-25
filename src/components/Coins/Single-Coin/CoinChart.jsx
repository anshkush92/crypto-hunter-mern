// Test -------------------------- Importing the Packages ---------------------------------
import { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import useCoinGeckoChartData from "../../../hooks/coinGecko/useCoinGeckoChartData";

// Test -------------------------- The current component ----------------------------------
const CoinChart = (props) => {
  // Getting the props, which are being passed into the hook for getting the chart Data
  const { currency, id, coin, symbol } = props;
  // Creating a loading state for the Chart
  const [isLoading, setIsLoading] = useState(true);

  // The hook which gives us the chart data for the particular coin
  const chartData = useCoinGeckoChartData(id, currency, "500");
  const chartDataLength = chartData.length;
  console.log(chartData);

  useEffect(() => {
    setIsLoading(chartDataLength === 0);
    console.log(isLoading);
    return () => {
      console.log("Cleanup function from Coin Chart");
    };
  }, [chartDataLength, isLoading]);

  // This component contains the price Chart and the chart
  return isLoading ? (
    <CircularProgress
      sx={{ color: "red" }}
    ></CircularProgress>
  ) : (
    <Box>
      <Box display="flex" flexDirection="column">
        <Typography variant="h5">{coin.name} Price Chart</Typography>
        <Typography variant="body1">
          Current Price:{" "}
          <Typography component="span" sx={{ color: "gold" }}>
            {symbol} {coin.price}
          </Typography>
        </Typography>
        <Typography variant="body1">
          24hr Change:{"  "}
          <Typography
            component="span"
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
export default CoinChart;
