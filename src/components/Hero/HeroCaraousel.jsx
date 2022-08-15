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

  return (
    <Marquee pauseOnHover speed={50} gradient={false} style={{gap: "30px"}}>
      <Box display="flex" justifyContent="space-between" gap="30px">
        <HeroCaraouselCard></HeroCaraouselCard>
        <HeroCaraouselCard></HeroCaraouselCard>
        <HeroCaraouselCard></HeroCaraouselCard>
        <HeroCaraouselCard></HeroCaraouselCard>
        <HeroCaraouselCard></HeroCaraouselCard>
        <HeroCaraouselCard></HeroCaraouselCard>
        <HeroCaraouselCard></HeroCaraouselCard>
      </Box>
    </Marquee>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroCaraousel;
