// Test -------------------------- Importing the Packages ---------------------------------
import { useState, useEffect } from "react";

// Test -------------------------- Importing the styles / other components ----------------
import cryptoData from "../../utilities/CoinGeckoAPI/coinGeckoAPI";

// Test -------------------------- The current component ----------------------------------
// This React hook is used to take the in depth information of a particular coin
const useCoinGeckoSingleCoin = (coinId) => {
    // For setting the data of the coin that we get from the API
    const [coinData, setCoinData] = useState();

    // API working CORRECTLY
    useEffect(() => {
        // GOT the promise from CRPTODATA utility, so now resolving that promise
        const promise = Promise.resolve(cryptoData(`coins/${coinId}`));

        // Getting the data from the promise, using await
        const promiseResult = async () => {
            // Getting the data from the API path which we requested
            const data = await promise;
            // Getting the in depth data of the coin from the API -----> correctly
            // console.log(data);
            setCoinData(data);
        }

        // Calling the promiseResult which returns / prints the data
        promiseResult();

        return () => {
            console.log("Cleanup function from useCoinGeckoCurrencySingle.js");
        };
    }, [coinId]);

    return (
        coinData
    )
}


// Test -------------------------- Exporting the current component ------------------------
export default useCoinGeckoSingleCoin;