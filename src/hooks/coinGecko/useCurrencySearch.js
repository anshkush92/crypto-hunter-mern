// Test -------------------------- Importing the Packages ---------------------------------
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

// Test -------------------------- Importing the styles / other hooks ----------------
import currencies from "../../data/currencies";
import { setCurrency } from "../../features/currencyChanger/currencyChanger";

// Test -------------------------- The current hook ----------------------------------
const useCurrencySearch = (label) => {
    const [currencyIsFound, setCurrencyIsFound] = useState(false);
    const dispatch = useDispatch();

    // For changing the currency when the currency is changed
    useEffect(() => {
        const currentCurrency = currencies.filter((current) => current === label)

        console.log(currentCurrency);

        // Logic for checking whether the currency is present or not
        setCurrencyIsFound(currentCurrency.length !== 0);

        // Logic for changing the currency to default when the currency not present in currencies
        if (!currencyIsFound) {
            dispatch(setCurrency({label: "INR", symbol: "$"}));
        }

        return () => {
            console.log("Cleanup function from use Currency Search");
        }
    }, [label, currencyIsFound, dispatch])

    return currencyIsFound;
}


// Test -------------------------- Exporting the current hook ------------------------
export default useCurrencySearch;