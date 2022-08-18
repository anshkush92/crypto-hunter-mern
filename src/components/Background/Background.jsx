// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import { Box, styled } from "@mui/material";

// Test -------------------------- The current component ----------------------------------
const BlackBackground = styled(Box)({
  backgroundColor: "black",
  color: "white",
});

const Background = (props) => {
  return <BlackBackground>{props.children}</BlackBackground>;
};

// Test -------------------------- Exporting the current component ------------------------
export default Background;
