// Test -------------------------- Importing the Packages ---------------------------------
import { useEffect } from "react";

// Test -------------------------- Importing the styles / other components ----------------
import cryptoData from "../../utilities/CoinGeckoAPI/coinGeckoAPI";

// Test -------------------------- The current component ----------------------------------
const useCoinGeckoExchangeRates = () => {
    // Checking whether the API is working correctly or not and it is working correctly
    useEffect(() => {
        // We can easily get the data from the API, by passing the path in the hook  
        const promise = Promise.resolve(cryptoData("exchange_rates"));

        // Getting the data from the promise, using await
        const promiseResult = async () => {
            // Getting the data from the API path which we requested
            const data = await promise;
            // Printing the data for now, then we will use state to set the state 
            // console.log(data.rates);
        }

        // Calling the promiseResult which returns / prints the data
        promiseResult();

        return () => {
            console.log("Cleanup function from use Coin Gecko Exchange Rates");
        };
    }, []);


    return ("Exchange Rates");
}


// Test -------------------------- Exporting the current component ------------------------
export default useCoinGeckoExchangeRates;