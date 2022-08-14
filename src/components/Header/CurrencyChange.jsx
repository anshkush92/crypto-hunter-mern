// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";
import { Box, Autocomplete, TextField } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import useCountryData from "../../hooks/countryData/useCountryData";

// Test -------------------------- The current component ----------------------------------
const CurrencyChange = () => {
  // For changing the state of app, when currency is changed
  const [currency, setCurrency] = useState("USD");
  
  // Need to update the symbol, when the currency is changed
  const [symbol, setSymbol] = useState("$");

  // Using the data from the country Rest APIs
  const { countryData } = useCountryData();

  // For changing the currency as well as the symbol
  const currencyHandler = (event, newValue) => {
    setSymbol(newValue.symbol);
    setCurrency(newValue);
  };

  return (
    <Autocomplete
      disableClearable={true}
      size="small"
      onChange={currencyHandler}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      defaultValue="USD"
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
          {option.label} ({option.symbol})
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
