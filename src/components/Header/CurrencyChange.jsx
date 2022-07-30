// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";
import { Box, Autocomplete, TextField } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import useCountryData from "../../hooks/countryData/useCountryData";

// Test -------------------------- The current component ----------------------------------
const CurrencyChange = () => {
  const [currency, setCurrency] = useState("INR");
  const { countryData } = useCountryData();

  const currencyHandler = (event, newValue) => {
    setCurrency(newValue);
  };

  return (
    <Autocomplete
      disableClearable={true}
      size="small"
      onChange={currencyHandler}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      defaultValue="INR"
      value={currency}
      id="country-data"
      options={countryData}
      sx={{ m: 1, minWidth: 120 }}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
          key={option.name}
        >
          <img loading="lazy" width="20" src={option.flag} alt={option.name} />
          {option.label}
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
