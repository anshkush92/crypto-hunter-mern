// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const AuthButton = (props) => {
  const { link, children } = props;

  return (
    <Link to={link} style={{ textDecoration: "none" }}>
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
        {children}
      </Button>
    </Link>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default AuthButton;
