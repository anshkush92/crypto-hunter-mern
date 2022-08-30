// Test -------------------------- Importing the Packages ---------------------------------
import { useState, useEffect } from "react";
import {
  Box,
  LinearProgress,
  Typography,
  Grid,
  Divider,
  List,
} from "@mui/material";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TagIcon from "@mui/icons-material/Tag";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SouthIcon from "@mui/icons-material/South";

import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import DataUsageIcon from "@mui/icons-material/DataUsage";

import HomeIcon from "@mui/icons-material/Home";
import RedditIcon from "@mui/icons-material/Reddit";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
// Test -------------------------- Importing the styles / other components ----------------
import CoinStats from "./CoinStats";
import CoinLinks from "./CoinLinks";
import CoinChart from "./CoinChart";

// Test -------------------------- The current component ----------------------------------
const CoinDescription = (props) => {
  const { coinData } = props;
  const { symbol, label } = useSelector((state) => state.currencyChanger);

  // Setting the state to the loading, then we will change it when it is not undefined
  const [isLoading, setIsLoading] = useState(true);

  // For checking whether we are getting the correct coin Data or not ------> CORRECT DATA
  console.log(symbol, label, coinData);

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

  // Icons for the Value Stats
  const coinValueStatsIcons = [
    <TagIcon sx={{ color: "white" }}></TagIcon>,
    <MonetizationOnIcon sx={{ color: "white" }}></MonetizationOnIcon>,
    <MonetizationOnIcon sx={{ color: "white" }}></MonetizationOnIcon>,
    <EmojiEventsIcon sx={{ color: "white" }}></EmojiEventsIcon>,
    <SouthIcon sx={{ color: "white" }}></SouthIcon>,
  ];

  // Icons for the other value stats
  const otherStatsIcons = [
    <TagIcon sx={{ color: "white" }}></TagIcon>,
    <BlurCircularIcon sx={{ color: "white" }}></BlurCircularIcon>,
    <DataUsageIcon sx={{ color: "white" }}></DataUsageIcon>,
    <StackedLineChartIcon sx={{ color: "white" }}></StackedLineChartIcon>,
    <DataUsageIcon sx={{ color: "white" }}></DataUsageIcon>,
  ];

  // Coins Value Stats
  const coinValueStats = [
    { rank: coinData?.market_cap_rank },
    {
      price: coinData?.market_data?.current_price[label.toLowerCase()],
      symbol: true,
    },
    {
      marketCap: coinData?.market_data?.market_cap[label.toLowerCase()],
      symbol: true,
    },
    { ath: coinData?.market_data?.ath[label.toLowerCase()], symbol: true },
    { atl: coinData?.market_data?.atl[label.toLowerCase()], symbol: true },
  ];

  // Other Stats info
  const otherStats = [
    { liquidity: coinData?.liquidity_score },
    { circulatingSupply: coinData?.market_data?.circulating_supply },
    { totalSupply: coinData?.market_data?.total_supply },
    {
      marketCap24hrChange:
        coinData?.market_data?.market_cap_change_percentage_24h,
      color:
        coinData?.market_data?.market_cap_change_percentage_24h >= 0
          ? "green"
          : "red",
    },
    { totalVolume: coinData?.market_data?.total_volume[label.toLowerCase()] },
  ];

  const coinLinksIcons = [
    <HomeIcon sx={{ color: "white" }}></HomeIcon>,
    <RedditIcon sx={{ color: "white" }}></RedditIcon>,
    <TelegramIcon sx={{ color: "white" }}></TelegramIcon>,
    <GitHubIcon sx={{ color: "white" }}></GitHubIcon>,
  ];

  const coinLinks = [
    {
      homepage:
        coinData?.links?.homepage[0] !== (undefined || "" || null)
          ? coinData?.links?.homepage[0]
          : false,
    },
    {
      reddit:
        coinData?.links?.subreddit_url !== (undefined || "" || null)
          ? coinData?.links?.subreddit_url
          : false,
    },
    {
      telegram:
        coinData?.links.telegram_channel_identifier === ""
          ? false
          : `https://t.me/${coinData?.links.telegram_channel_identifier}`,
    },
    {
      github:
        coinData?.links?.repos_url.github[0] !== (undefined || "" || null)
          ? coinData?.links?.repos_url.github[0]
          : false,
    },
  ];

  // console.log(otherStats);
  // console.log(coinLinks, coinData?.links.telegram_channel_identifier);

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
      <Box
        display="flex"
        justifyContent="center"
        mb="15px"
        alignItems="center"
        gap="15px"
      >
        <Box
          component="img"
          height="100px"
          alt={coin.name}
          src={coin.image}
          loading="lazy"
        ></Box>

        <Box>
          <Typography variant="h4" fontWeight="700">
            {coin.symbol}
          </Typography>
          <Typography variant="h5" fontWeight="500">
            {coin.name}
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center">
        <Typography variant="h5">
          {coin.name} live prices in{" "}
          <Typography
            variant="h5"
            component="span"
            fontWeight="900"
            sx={{ color: "gold" }}
          >
            {label}{" "}
          </Typography>
          currency
        </Typography>
      </Box>

      <Divider sx={{ backgroundColor: "white", m: "10px auto" }}></Divider>

      <CoinChart
        id={coinData.id}
        currency={label.toLowerCase()}
        coin={coin}
        symbol={symbol}
      ></CoinChart>

      <Divider
        sx={{ backgroundColor: "white", m: "20px auto 10px auto" }}
      ></Divider>

      <Grid container spacing={{ xs: 3, md: 6 }} mt="-36px" mb="36px">
        <Grid item xs={12} md={6}>
          <Typography variant="h5">{coin.name} Value Statistics</Typography>
          <Typography variant="body1" mb="10px">
            An overview showing the statistics of{" "}
            <Typography
              component="span"
              fontWeight="900"
              sx={{ color: "gold" }}
            >
              {coin.name}
            </Typography>
            , such as the base and quote currency, the rank, and trading volume
          </Typography>
          <List sx={{ p: "0" }}>
            {coinValueStats.map((coin, index) => (
              <CoinStats
                key={index}
                icon={coinValueStatsIcons[index]}
                text={coin}
              ></CoinStats>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5">Other Stats Info</Typography>
          <Typography variant="body1" mb="10px">
            An overview showing the statistics of{" "}
            <Typography
              component="span"
              fontWeight="900"
              sx={{ color: "gold" }}
            >
              {coin.name}
            </Typography>
            , such as the number of exchanges, markets and total supply
          </Typography>

          <List sx={{ p: "0" }}>
            {otherStats.map((coin, index) => (
              <CoinStats
                key={index}
                icon={otherStatsIcons[index]}
                text={coin}
              ></CoinStats>
            ))}
          </List>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 3, md: 6 }}>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" gap="4px" mb={{md: "8px"}}>
            <Typography variant="h5" mb={{ md: "10px" }}>
              Description
            </Typography>
            <Typography
              variant="body1"
              sx={{
                a: {
                  color: "gold",
                  "&:hover": { textDecoration: "underline" },
                },
              }}
            >
              {coin.description}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" mb={{md: "5px"}}>
              {coin.name} Links
            </Typography>
            <List sx={{ p: "0" }}>
              {coinLinks.map((link, index) => (
                <CoinLinks
                  key={index}
                  icon={coinLinksIcons[index]}
                  text={link}
                ></CoinLinks>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>

      <Divider></Divider>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinDescription;
