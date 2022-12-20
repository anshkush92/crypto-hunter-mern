// Test -------------------------- Importing the Packages ---------------------------------
import { useEffect, useState } from "react";

// Test -------------------------- Importing the styles / other hooks ----------------
import cryptoData from "../../utilities/CoinGeckoAPI/coinGeckoAPI";

// Test -------------------------- The current hook ----------------------------------
// This hook is used to get the trending, but it has less data, so using the COIN ID from here and using it in "coins/market"
const useCoinGeckoTrending = () => {
    const [trending, setTrending] = useState([]);

    // Checking whether the API is working correctly or not and it is working correctly
    useEffect(() => {
        // We can easily get the data from the API, by passing the path in the hook  
        const promise = Promise.resolve(cryptoData("search/trending"));

        // Getting the data from the promise, using await
        const promiseResult = async () => {
            // Getting the data from the API path which we requested
            const data = await promise;
            // Printing the data for now, then we will use state to set the state 
            // console.log(data);
            // Sets the trending data 
            setTrending(data.coins);
        }

        // Calling the promiseResult which returns / prints the data
        promiseResult();

        return () => {
            console.log("Cleanup function from Coin Gecko Trending");
        };
    }, []);

    // Returning the trending data of the coins in last 24 hr (7 coins) 
    return trending;
}


// Test -------------------------- Exporting the current hook ------------------------
export default useCoinGeckoTrending;