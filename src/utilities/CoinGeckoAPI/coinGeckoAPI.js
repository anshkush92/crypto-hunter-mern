// First trying out the API routes are working or not , we just need to pass, path where we want to ping

// API IS WORKING CORRECTLY --------> Returns the promise on resolving which we get the data we want 
const cryptoData = async (path) => {
    const requestUrl = `https://api.coingecko.com/api/v3/${path}`;
    const response = await fetch(requestUrl);
    const data = await response.json();

    // API working correctly
    // console.log(data);

    // Now returning the promising
    return data;
}

// Exporting the crypto data which returns the promise, which would be resolved in the Hooks
export default cryptoData;