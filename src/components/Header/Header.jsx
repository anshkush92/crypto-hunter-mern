// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  List,
  Box,
  IconButton,
} from "@mui/material";

import { Link } from "react-router-dom";
// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const Header = () => {
  const navbarOptions = ["Test 1", "Test 2", "Test 3"];

  return (
    <AppBar sx={{ backgroundColor: "#353434" }} position="static">
      <Toolbar>
        <Typography variant="h5">Crypto Hunter</Typography>

        <Box sx={{ display: "flex" }}>
          {navbarOptions.map((option) => (
            <Link to={`/${option}`} style={{ textDecoration: "none" }}>
              <Button key={option} variant="text" sx={{ color: "yellow" }}>
                {option}
              </Button>
            </Link>
          ))}
        </Box>

        <Button
          sx={{
            color: "yellow",
            borderColor: "yellow",
            "&:hover": { borderColor: "yellow", backgroundColor: "#4e4e2e" },
          }}
          variant="outlined"
        >
          Login
        </Button>

        <IconButton></IconButton>
      </Toolbar>
    </AppBar>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Header;
