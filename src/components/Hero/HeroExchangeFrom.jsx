// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";
import {
  Box,
  Autocomplete,
  TextField,
  Divider,
  Paper,
  InputBase,
} from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import currencies from "../../data/currencies";

// Test -------------------------- The current component ----------------------------------
const HeroExchangeFrom = (props) => {
  // The props for passing the state to the parent using the functions
  const { getFromCurrency, getFromAmount } = props;

  // Use for re-rendering the Exchange From, otherwise, if amount / currency changed, it will show the same currency and amount
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");

  // Need a label object in the [] for the AutoComplete
  const newCurrencies = currencies.map((currency) => {
    return { label: currency.toUpperCase() };
  });

  const currencyHandler = (event, newValue) => {
    // For getting the newly selected currency ----> Working fine
    setCurrency(newValue.label);
    getFromCurrency(newValue.label);
  };

  const amountHandler = (event) => {
    // For getting the value entered in the Input ----> Working fine
    setAmount(event.target.value);
    getFromAmount(event.target.value);
  };

  return (
    <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}>
      <InputBase
        readOnly
        value="FROM"
        sx={{ width: "80px", textAlign: "center" }}
      ></InputBase>
      <Divider sx={{ height: 28, m: "auto", mr: 1 }} orientation="vertical" />

      <InputBase
        // sx={{ ml: 1, flex: 1 }}
        placeholder="Amount"
        value={amount}
        onChange={amountHandler}
        inputProps={{ "aria-label": "Amount" }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <Autocomplete
        disableClearable={true}
        size="medium"
        onChange={currencyHandler}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        value={currency}
        id="country-data"
        options={newCurrencies}
        sx={{ m: 1, minWidth: 80 }}
        renderOption={(props, option) => (
          <Box
            component="li"
            // sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
            key={option.label}
          >
            {option.label}
          </Box>
        )}
        renderInput={(params) => (
          <TextField {...params} variant="standard"></TextField>
        )}
      ></Autocomplete>
    </Paper>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default HeroExchangeFrom;
