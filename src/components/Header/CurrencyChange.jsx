// Test -------------------------- Importing the Packages ---------------------------------
import { Box, Autocomplete, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

// Test -------------------------- Importing the styles / other components ----------------
import useCountryData from "../../hooks/countryData/useCountryData";
import { setCurrency } from "../../features/currencyChanger/currencyChanger";
import useCurrencySearch from "../../hooks/coinGecko/useCurrencySearch";

// Test -------------------------- The current component ----------------------------------
const CurrencyChange = () => {
  // For changing the state of app, when currency is changed
  const { currency, label } = useSelector((state) => state.currencyChanger);
  const dispatch = useDispatch();

  // Checking the state of the currency is changing or not using the react redux ---> Working fine
  // console.log(currency, label, symbol);

  // Now using the useCurrency Search to check whether the selected currency is in list or not
  const currencyIsFound = useCurrencySearch(label.toLowerCase());
  // Checking whether is selected currency is found or not
  // If NOT FOUND, then changed to $ (INR) for NOW only
  // console.log(currencyIsFound)
  
  // Using the data from the country Rest APIs
  const { countryData } = useCountryData();

  // For changing the currency as well as the symbol
  const currencyHandler = (event, newValue) => {
    // Used for enhancing to tell which currency is being used right now
    // console.log(newValue);
    dispatch(setCurrency({ label: newValue.label, symbol: newValue.symbol }));
  };

  return (
    <Autocomplete
      disableClearable={true}
      size="small"
      onChange={currencyHandler}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      value={currency}
      id="country-data"
      options={countryData}
      sx={{ m: 1, minWidth: 140 }}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
          key={option.name}
        >
          <img loading="lazy" width="20" src={option.flag} alt={option.name} />
          {option.symbol} ({option.label})
        </Box>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Currency"></TextField>
      )}
    ></Autocomplete>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CurrencyChange;
