import { Box } from "@mui/material";
import Background from "../../components/Background/Background";

import useCoinGeckoCoinsList from "../../hooks/coinGecko/useCoinGeckoList";
import CoinsTableFav from "../../components/Coins/Table/CoinsTableFav";
import Header from "../../components/Header/Header";

const FavoritePage = () => {
  const newCoinsList = useCoinGeckoCoinsList("usd", 25, 22);

  return (
    <Box>
      <Background>
        <Header></Header>
        <CoinsTableFav newCoinsList={newCoinsList} count={25}></CoinsTableFav>
      </Background>
    </Box>
  );
};

export default FavoritePage;
