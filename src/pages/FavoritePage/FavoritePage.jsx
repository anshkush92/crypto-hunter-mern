import { Box } from "@mui/material";
import Background from "../../components/Background/Background";

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import CoinsTableFav from "../../components/Coins/Table/CoinsTableFav";
import Header from "../../components/Header/Header";

const FavoritePage = () => {
  const [favoriteCoinsData, setFavoriteCoinsData] = useState([]);

  console.log(favoriteCoinsData);
  const favorite = useSelector(
    (state) => state.coinsListHandler.favoriteCoinsList
  );
  console.log(favorite);

  useEffect(() => {
    const getCoinData = async (coin) => {
      const requestUrl = `https://api.coingecko.com/api/v3/coins/${coin}`;
      const response = await fetch(requestUrl);
      const data = await response.json();
      console.log(data);
      setFavoriteCoinsData((prev) => [...prev, data]);
      return data;
    };

    const data = favorite.map((coin) => getCoinData(coin));
    console.log(data);
  }, [favorite]);

  console.log(favoriteCoinsData);

  // useEffect(() => {
  //   console.log("Running");
  //   const newCoinsList = [...new Set(favoriteCoinsData)];
  //   console.log(
  //     `After removing duplicates`,
  //     newCoinsList,
  //     `Before removing duplicates`,
  //     favoriteCoinsData
  //   );
  // }, [favoriteCoinsData]);

  return (
    <Box>
      <Background>
        <Header></Header>
        <CoinsTableFav
          newCoinsList={favoriteCoinsData}
          count={favorite.length}
        ></CoinsTableFav>
      </Background>
    </Box>
  );
};

export default FavoritePage;
