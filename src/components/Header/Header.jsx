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
  const navbarOptions = ["Test 1", "Test 2", "Test 3"];
  const isDarkMode = useSelector((state) => state.toggleTheme.isDarkMode);

  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

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

          <Box>
            <ThemeChange></ThemeChange>
          </Box>

          <Box>
            <CurrencyChange></CurrencyChange>
          </Box>

          <Box display="flex" gap={1}>
            <AuthButton link="/signup">Sign Up</AuthButton>
            <AuthButton link="/login">Login</AuthButton>
          </Box>
           
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Header;
