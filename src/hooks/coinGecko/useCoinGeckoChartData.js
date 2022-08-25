// Test -------------------------- Importing the Packages ---------------------------------
import { useEffect, useState } from "react";

// Test -------------------------- Importing the styles / other hooks ----------------
import cryptoData from "../../utilities/CoinGeckoAPI/coinGeckoAPI";

// Test -------------------------- The current hook ----------------------------------
// This hook is used to get the chartData, but it has less data, so using the COIN ID from here and using it in "coins/market"
const useCoinGeckoChartData = (id, currency, days = 365) => {
    const [chartData, setChartData] = useState([]);

    // Checking whether the API is working correctly or not and it is working correctly
    useEffect(() => {
        // We can easily get the data from the API, by passing the path in the hook  
        const promise = Promise.resolve(cryptoData(`coins/${id}/market_chart?vs_currency=${currency}&days=${days}`));

        // Getting the data from the promise, using await
        const promiseResult = async () => {
            // Getting the data from the API path which we requested
            const data = await promise;
            // Printing the data for now, then we will use state to set the state 
            console.log(data);
            // Sets the chartData data 
            setChartData(data);
        }

        // Calling the promiseResult which returns / prints the data
        promiseResult();

        return () => {
            console.log("Cleanup function from Coin Gecko chartData");
        };
    }, [currency, days, id]);

    // Returning the chartData data of the coins in last 24 hr (7 coins) 
    return chartData;
}


// Test -------------------------- Exporting the current hook ------------------------
export default useCoinGeckoChartData;