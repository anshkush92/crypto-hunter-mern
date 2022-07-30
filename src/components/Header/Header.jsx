// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Link } from "react-router-dom";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useSelector, useDispatch } from "react-redux";

// Test -------------------------- Importing the styles / other components ----------------
import { toggleTheme } from "../../features/toggleTheme/toogleTheme";
import useCountryData from "../../hooks/countryData/useCountryData";

// Test -------------------------- Getting Country data from API -------------------------

// Test -------------------------- The current component ----------------------------------
const Header = () => {
  const [currency, setCurrency] = useState("");
  const { countryData } = useCountryData();

  const navbarOptions = ["Test 1", "Test 2", "Test 3"];
  const isDarkMode = useSelector((state) => state.toggleTheme.isDarkMode);
  const dispatch = useDispatch();

  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  const currencyHandler = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar sx={{ backgroundColor: "#353434" }} position="static">
        <Toolbar>
          <Link
            to="/"
            style={{
              background: "inherit",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Typography variant="h5">Crypto Hunter</Typography>
          </Link>

          <Box sx={{ display: "flex" }}>
            {navbarOptions.map((option) => (
              <Link
                key={option}
                to={`/${option}`}
                style={{ textDecoration: "none" }}
              >
                <Button variant="text" sx={{ color: "yellow" }}>
                  {option}
                </Button>
              </Link>
            ))}
          </Box>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "yellow",
                borderColor: "yellow",
                "&:hover": {
                  borderColor: "yellow",
                  backgroundColor: "#4e4e2e",
                },
              }}
              variant="outlined"
            >
              Login
            </Button>
          </Link>

          <Box>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="currency">Currency</InputLabel>
              <Select
                value={currency}
                onChange={currencyHandler}
                label="Currency"
                sx={{ color: "yellow" }}
              >
                {countryData.map((country, index) => (
                  <MenuItem key={index} value={country.currency}>
                    {country.currency}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box>
            <IconButton
              onClick={() => {
                dispatch(toggleTheme());
              }}
              sx={{ color: "yellow" }}
            >
              {isDarkMode ? (
                <DarkModeIcon></DarkModeIcon>
              ) : (
                <LightModeIcon></LightModeIcon>
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Header;
