// Test -------------------------- Importing the Packages ---------------------------------
import { useEffect } from "react";
import { Box } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import { useSelector, useDispatch } from "react-redux";
import { setFavoriteCoinsList } from "../../../features/coinsList/coinsList";
import { setError } from "../../../features/userHandler/userHandler";
import { db } from "../../../firebase";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
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

  const removeFromFavorite = async () => {
    console.log("Removed from favorite");
    const coinRef = doc(db, "favorite", user.uid);

    try {
      await setDoc(
        coinRef,
        {
          coins: favorite.filter((coin) => coin !== coinId),
        },
        { merge: true }
      );

      dispatch(
        setError({
          open: true,
          type: "warning",
          message: `${coinData?.name} removed from favorite`,
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

  useEffect(() => {
    if (user) {
      const coinRef = doc(db, "favorite", user.uid);
      const unsubscribe = onSnapshot(coinRef, (doc) => {
        if (doc.exists()) {
          console.log("Document data:", doc.data());
          dispatch(setFavoriteCoinsList(doc.data().coins));
        } else {
          // doc.data() will be undefined in this case
          console.log("items in the favorite list: 0");
        }
      });
      return () => {
        unsubscribe();
      };
    }
  }, [user, dispatch]);

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
        removeFromFavorite={removeFromFavorite}
      ></CoinDescription>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default SingleCoin;
