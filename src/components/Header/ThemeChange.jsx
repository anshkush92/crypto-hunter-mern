// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";
import { IconButton } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/toggleTheme/toogleTheme";

// Test -------------------------- Material Icons ----------------------------------------
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// Test -------------------------- The current component ----------------------------------
const ThemeChange = () => {
  const isDarkMode = useSelector((state) => state.toggleTheme.isDarkMode);
  const dispatch = useDispatch();

  return (
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
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default ThemeChange;
