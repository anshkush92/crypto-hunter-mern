// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";

// Test -------------------------- Importing the styles / other components ----------------
import useCoinGeckoTrending from "../../hooks/coinGecko/useCoinGeckoTrending";
import HeroCaraouselCard from "./HeroCaraouselCard";
import useCoinGeckoCurrencySingle from "../../hooks/coinGecko/useCoinGeckoCurrencySingle";
import { useSelector } from "react-redux";

// Test -------------------------- The current component ----------------------------------
// Contains the DIV as the wrapper for all the CARAOUSEL Cards

// <div>
//      <card> </card>
// </div>

const HeroCaraousel = () => {
  // Getting the current currency from the state
  const currency = useSelector((state) => state.currencyChanger.label);
  console.log(currency);

  // Using the /search/trending endpoint
  const trending = useCoinGeckoTrending();
  console.log(trending);

  const trendingCoinsId = trending.map((coin) => coin.item.id);
  console.log(trendingCoinsId);

  const initialValue = "";
  const reducedCoinsId = trendingCoinsId.reduce(
    (previousValue, currentValue) => `${previousValue}, ${currentValue}`,
    initialValue
  );
  console.log(reducedCoinsId);

  const trendingCoinsData = useCoinGeckoCurrencySingle(
    currency.toLowerCase(),
    reducedCoinsId
  );
  console.log(trendingCoinsData);

  let marquee;
  
  if (trendingCoinsData) {
    marquee = trendingCoinsData.map((coin) => (
      <HeroCaraouselCard
        key={coin.id}
        name={coin.name}
        image={coin.image}
        price={coin.current_price}
        rank={coin.market_cap_rank}
        symbol={coin.symbol}
      ></HeroCaraouselCard>
    ));
  }

  return (
    <Marquee pauseOnHover speed={50} gradient={false} style={{ gap: "30px" }}>
      <Box display="flex" justifyContent="space-between" gap="30px">
        {marquee}
      </Box>
    </Marquee>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroCaraousel;
