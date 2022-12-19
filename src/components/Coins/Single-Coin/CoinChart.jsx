// Test -------------------------- Importing the Packages ---------------------------------
import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  TextField,
  Button,
} from "@mui/material";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Test -------------------------- Importing the styles / other components ----------------
import useCoinGeckoChartData from "../../../hooks/coinGecko/useCoinGeckoChartData";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// Test -------------------------- The current component ----------------------------------
const CoinChart = (props) => {
  const { isLogin } = useSelector((state) => state.userHandler);

  // Getting the props, which are being passed into the hook for getting the chart Data
  const { currency, id, coin, symbol } = props;
  // Creating a loading state for the Chart
  const [isLoading, setIsLoading] = useState(true);
  // Creating the state for days
  const [inputValue, setInputValue] = useState(5);

  const inputValueHandler = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const days = 50;
  // The hook which gives us the chart data for the particular coin
  const chartData = useCoinGeckoChartData(
    id,
    currency,
    inputValue.length === ("" || null || undefined || 0) ? 0 : inputValue
  );
  const chartDataLength = chartData.length;
  const { prices } = chartData;

  // For checking whether we are getting the correct chart data or not
  // console.log(prices, chartData);

  // The options for the Chart Js
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${
          coin.name
        } Price Chart in ${currency.toUpperCase()} for ${inputValue} ${
          inputValue === "1" ? "day" : "days"
        }`,
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  // Getting the labels for the Line Chart Js
  const labels = prices?.map((coin) => {
    let date = new Date(coin[0]);
    let time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;
    return days === 1 ? time : date.toLocaleDateString();
  });

  // For checking in which format we are getting the labels
  // console.log(labels);
  // console.log(symbol);

  // The data that we are going to give to the Chart js
  const data = {
    labels,
    datasets: [
      {
        label: `Price in ${currency.toUpperCase()}`,
        data: prices?.map((coin) => coin[1]),
        // backgroundColor: "white",
        borderColor: "#ffd523",
      },
    ],
  };

  useEffect(() => {
    setIsLoading(chartDataLength === 0);
    console.log(isLoading);
    return () => {
      console.log("Cleanup function from Coin Chart");
    };
  }, [chartDataLength, isLoading]);

  // This component contains the price Chart and the chart
  return isLoading ? (
    <CircularProgress sx={{ color: "red" }}></CircularProgress>
  ) : (
    <Box>
      <Box display="flex" flexDirection="column">
        <Typography variant="h5" sx={{ color: "#ffd523" }}>
          {coin.name} Price Chart
        </Typography>
        <Typography variant="body1">
          Current Price:{" "}
          <Typography component="span" sx={{ color: "#ffd523" }}>
            {symbol} {coin.price}
          </Typography>
        </Typography>
        <Typography variant="body1">
          24hr Change:{"  "}
          <Typography
            component="span"
            sx={{ color: coin.change24hr >= 0 ? "#50d890" : "#f05454" }}
          >
            {coin.change24hr} %
          </Typography>
        </Typography>
      </Box>

      <Box
        mt="10px"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <TextField
          variant="outlined"
          label="Number of days"
          type="number"
          sx={{
            input: { color: "#f7f7f7" },
            flexGrow: "1",
            borderRadius: 1,
            width: "100%",
            backgroundColor: "#393e46",
          }}
          InputLabelProps={{
            style: {
              color: "#f7f7f7",
            },
          }}
          onChange={inputValueHandler}
          value={inputValue || ""}
          // focused
        ></TextField>
        {isLogin && (
          <Button
            size="large"
            sx={{
              flexGrow: "1",
              color: "black",
              backgroundColor: "#50d890",
              height: "3.4375rem",
              width: "100%",
              "&:hover": {
                backgroundColor: "#59dc97",
              },
            }}
          >
            Add to Favorites
          </Button>
        )}
      </Box>
      <Box sx={{ height: "500px", width: "100%", position: "relative" }}>
        <Line options={options} data={data}></Line>
      </Box>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinChart;
