// Test -------------------------- Importing the Packages ---------------------------------
import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

// Test -------------------------- Importing the styles / other components ----------------
import CurrencyChange from "./CurrencyChange";
import ThemeChange from "./ThemeChange";
import AuthButton from "./AuthButton";

// Test -------------------------- The current component ----------------------------------
const Header = () => {
  const navbarOptions = ["Coins", "Exchanges", "News"];

  return (
    <>
      {/* The Navigation Bar */}
      <AppBar sx={{ backgroundColor: "#353434" }} position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: "10px",
            pb: "10px",
          }}
        >
          {/* Name of the APP */}
          <Box>
            <Link
              to="/"
              style={{
                background: "inherit",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontSize: { xs: "18px", sm: "24px" } }}
              >
                Crypto Hunter
              </Typography>
            </Link>
          </Box>

          {/* Navbar Options + Currency Changer */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Navbar Options */}
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
                      borderColor: "yellow",
                      "&:hover": {
                        borderColor: "yellow",
                        backgroundColor: "#4e4e2e",
                      },
                    }}
                  >
                    {option}
                  </Button>
                </Link>
              ))}
              {/* Currency Changer */}
              <CurrencyChange></CurrencyChange>
            </Box>

            {/* Theme Changer + Auth Buttons */}
            <Box display={{ xs: "none", sm: "flex" }} gap={1}>
              {/* Theme Changer */}
              <ThemeChange></ThemeChange>
              {/* Auth Button */}
              <AuthButton link="/signup" buttonVariant="text">
                Sign Up
              </AuthButton>
              <AuthButton link="/login">Login</AuthButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Header;
