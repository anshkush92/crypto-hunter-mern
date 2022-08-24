// Test -------------------------- Importing the Packages ---------------------------------
import {
  Box,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// Test -------------------------- Importing the styles / other components ----------------
import { useSelector } from "react-redux";

// Test -------------------------- The current component ----------------------------------
const CoinStats = (props) => {
  const { icon, text } = props;
  const key = Object.keys(text)[0];
  const currencySymbol = text.symbol;
  const value = text[key];
  const { symbol } = useSelector((state) => state.currencyChanger);

  console.log(currencySymbol);

  return (
    <>
      <ListItem sx={{ "&:hover": { backgroundColor: "#202018e6" } }}>
        <Box display="flex" alignItems="center">
          <ListItemIcon sx={{ minWidth: "30px" }}>{icon}</ListItemIcon>
          <ListItemText
            primary={key.charAt(0).toUpperCase() + key.slice(1)}
          ></ListItemText>
        </Box>
        <ListItemText
          primary={`${currencySymbol !== undefined ? symbol : ""} ${value} ${text.color !== undefined ? "%" : ""}`}
          sx={{ textAlign: "right", color: `${text.color !== undefined ? text.color : "gold"}` }}
        ></ListItemText>
      </ListItem>
      <Divider sx={{ backgroundColor: "white" }}></Divider>
    </>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinStats;
