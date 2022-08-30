// Test -------------------------- Importing the Packages ---------------------------------
import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

// Test -------------------------- Importing the styles / other components ----------------
import CurrencyChange from "./CurrencyChange";
import ThemeChange from "./ThemeChange";
import AuthButton from "./AuthButton";

// Test -------------------------- The current component ----------------------------------
const Header = () => {
  const navbarOptions = ["Coins", "Exchanges", "News"];
  const isDarkMode = useSelector((state) => state.toggleTheme.isDarkMode);

  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar sx={{ backgroundColor: "#353434" }} position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
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
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              {navbarOptions.map((option) => (
                <Link
                  key={option}
                  to={`/${option.toLowerCase()}`}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    variant="text"
                    sx={{
                      display: { xs: "none", md: "flex" },
                      color: "yellow",
                    }}
                  >
                    {option}
                  </Button>
                </Link>
              ))}
              <CurrencyChange></CurrencyChange>
            </Box>

            <Box display="flex" gap={1}>
              <ThemeChange></ThemeChange>
              <AuthButton link="/signup" buttonVariant="text">
                Sign Up
              </AuthButton>
              <AuthButton link="/login">Login</AuthButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Header;
