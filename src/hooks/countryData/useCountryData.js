// Test -------------------------- Importing the Packages ---------------------------------
import { useState, useEffect } from 'react'

// Test -------------------------- Importing the styles / other components ----------------
import countriesData from '../../utilities/CountryAPI/countryAPI'

// Test -------------------------- The current component ----------------------------------
const useCountryData = () => {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        const promise = Promise.resolve(countriesData());

        const promiseResult = async () => {
            const data = await promise;
            console.log(data);
            setCountryData(data);
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