// Test -------------------------- Importing the Packages ---------------------------------
import { useState, useEffect } from 'react'

// Test -------------------------- Importing the styles / other components ----------------
import countriesData from '../../utilities/CountryAPI/countryAPI'
import currencies from '../../data/currencies';

// Test -------------------------- The current component ----------------------------------
const useCountryData = () => {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        const promise = Promise.resolve(countriesData());

        const promiseResult = async () => {
            const data = await promise;

            // Logic for getting only the accepted currencies ----> Very Good
            const newData = data.filter((country) => {
                return currencies.find((currency) => currency === country.label.toLowerCase()) ? country : undefined;
            })

            // Setting the countries which only have the acceptable currency for the Coin Gecko API
            setCountryData(newData);
        }

        promiseResult();

        return () => {
            console.log("Cleanup function from useCountry Hook");
        };
    }, []);

    return { countryData };
}


// Test -------------------------- Exporting the current component ------------------------
export default useCountryData