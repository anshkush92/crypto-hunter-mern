// Test -------------------------- Importing the Packages ---------------------------------
import { useEffect } from "react"

// Test -------------------------- Importing the styles / other hooks ----------------
import currencies from "../../data/currencies";

// Test -------------------------- The current hook ----------------------------------
const useCurrencySearch = (currency) => {
    console.log(currencies);

    useEffect(() => {
        console.log("test");

        return () => {
            console.log("Cleanup function from use Currency Search");
        }
    }, [])

    return (
        "test"
    )
}


// Test -------------------------- Exporting the current hook ------------------------
export default useCurrencySearch;