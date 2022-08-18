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
import currencies from "../.././data/currencies";

// Test -------------------------- The current component ----------------------------------
const HeroExchange = ({ label }) => {
  const [currency, setCurrency] = useState(label === "TO" ? "INR" : "USD");
  const [amount, setAmount] = useState()

  // Need a label object in the [] for the AutoComplete
  const newCurrencies = currencies.map((currency) => {
    return { label: currency.toUpperCase() };
  });

  const currencyHandler = (event, newValue) => {
    setCurrency(newValue.label);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  }

  return (
    <Paper
      sx={{ p: "2px 4px", display: "flex",alignItems: "center", width: 400 }}
    >
      <InputBase
        readOnly
        value={label}
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
        sx={{ m: 1, minWidth: 140, backgroundColor: "white" }}
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
export default HeroExchange;
