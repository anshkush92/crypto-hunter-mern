// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";

// Test -------------------------- Importing the styles / other components ----------------
import useCoinGeckoTrending from "../../hooks/coinGecko/useCoinGeckoTrending";
import HeroCaraouselCard from "./HeroCaraouselCard";

// Test -------------------------- The current component ----------------------------------
// Contains the DIV as the wrapper for all the CARAOUSEL Cards

// <div>
//      <card> </card>
// </div>

const HeroCaraousel = () => {
  // Using the /search/trending endpoint
  const trending = useCoinGeckoTrending();
  console.log(trending);

  const marquee = trending.map((coin) => <HeroCaraouselCard key={coin.item.coin_id} name={coin.item.name} image={coin.item.large} price={coin.item.price_btc} rank={coin.item.market_cap_rank} symbol={coin.item.symbol}></HeroCaraouselCard>);

  return (
    <Marquee pauseOnHover speed={50} gradient={false} style={{gap: "30px"}}>
      <Box display="flex" justifyContent="space-between" gap="30px">
        {marquee}
      </Box>
    </Marquee>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroCaraousel;
