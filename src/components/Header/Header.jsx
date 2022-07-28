// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import { AppBar, Button, Toolbar, Typography, List, ListItem } from "@mui/material";

import { Link } from "react-router-dom";
// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const Header = () => {
  const navbarOptions = ["Test 1", "Test 2", "Test 3"];

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography variant="h5">Crypto Hunter</Typography>
        <List color="red">
            <ListItem>Test 1</ListItem>
        </List>
        <Button color="secondary" variant="contained">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Header;
