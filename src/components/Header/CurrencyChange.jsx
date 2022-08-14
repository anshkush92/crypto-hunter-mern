// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";
import { Box, Autocomplete, TextField } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import useCountryData from "../../hooks/countryData/useCountryData";

// Test -------------------------- The current component ----------------------------------
const CurrencyChange = () => {
  // For changing the state of app, when currency is changed
  const [currency, setCurrency] = useState("$ (USD)");

  // Using the data from the country Rest APIs
  const { countryData } = useCountryData();

  // For changing the currency as well as the symbol
  const currencyHandler = (event, newValue) => {
    // Used for enhancing to tell which currency is being used right now
    // console.log(newValue);
    setCurrency(`${newValue.symbol} (${newValue.label})`);
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
