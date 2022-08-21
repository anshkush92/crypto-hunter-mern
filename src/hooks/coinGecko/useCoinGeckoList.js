// Test -------------------------- Importing the Packages ---------------------------------
import { useEffect, useState } from "react";

// Test -------------------------- Importing the styles / other hooks ----------------
import cryptoData from "../../utilities/CoinGeckoAPI/coinGeckoAPI";

// Test -------------------------- The current hook ----------------------------------
// This hook is used to get the CoinsList from the /coins/list ENDPOINT
const useCoinGeckoCoinsList = (currency, perPage, page) => {
    const [coinsList, setCoinsList] = useState([]);

    // Checking whether the API is working correctly or not and it is working correctly
    useEffect(() => {
        // We can easily get the data from the API, by passing the path in the hook  
        const promise = Promise.resolve(cryptoData(`coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${page}`));

        // Getting the data from the promise, using await
        const promiseResult = async () => {
            // Getting the data from the API path which we requested
            const data = await promise;
            // Printing the data for now, then we will use state to set the state 
            // console.log(data);
            // Sets the CoinsList data 
            setCoinsList(data);
        }

        // Calling the promiseResult which returns / prints the data
        promiseResult();

        return () => {
            console.log("Cleanup function from Coin Gecko Coins List");
        };
    }, [currency, page, perPage]);

    // Returning the CoinsList data of the coins in last 24 hr (7 coins) 
    return coinsList;
}


// Test -------------------------- Exporting the current hook ------------------------
export default useCoinGeckoCoinsList;