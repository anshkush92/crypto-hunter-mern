// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import { useSelector, useDispatch } from "react-redux";
import { setError } from "../../../features/userHandler/userHandler";
import { db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";
import Alert from "../../Alert/Alert";
import CoinDescription from "./CoinDescription";
import useCoinGeckoSingleCoin from "../../../hooks/coinGecko/useCoinGeckoSingleCoin";

// Test -------------------------- The current component ----------------------------------
const SingleCoin = (props) => {
  const { coinId } = props;
  const coinData = useCoinGeckoSingleCoin(coinId);

  // For checking whether the data that we are getting is correct or not
  console.log(coinId, coinData);
  const user = useSelector((state) => state.userHandler.user);
  const dispatch = useDispatch();
  const favorite = useSelector(
    (state) => state.coinsListHandler.favoriteCoinsList
  );

  // For checking whether the data that we are getting is correct or not
  console.log(favorite);

  const addToFavorite = async () => {
    console.log("Add to favorite");
    const coinRef = doc(db, "favorite", user.uid);

    try {
      await setDoc(coinRef, {
        coins: favorite ? [...favorite, coinId] : [coinId],
      });

      dispatch(
        setError({
          open: true,
          type: "success",
          message: `${coinData?.name} added to favorite`,
        })
      );

      console.log("Coin Added: ", coinData?.name);
      return;
    } catch (error) {
      console.log(error);
      dispatch(
        setError({
          open: true,
          type: "error",
          message: `${error.message}`,
        })
      );
      return;
    }
  };

  return (
    <Box
      display="flex"
      sx={{ backgroundColor: "black" }}
      flexDirection="column"
      width="100%"
      px="2.5%"
      py="30px"
    >
      <Alert></Alert>
      <CoinDescription
        coinData={coinData}
        addToFavorite={addToFavorite}
      ></CoinDescription>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default SingleCoin;
