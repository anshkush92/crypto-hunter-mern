// Test -------------------------- Importing the Packages ---------------------------------
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const CoinLinks = (props) => {
  const { icon, text } = props;
  const key = Object.keys(text)[0];
  const value = text[key];

  //   console.log(key, value, text);

  return (
    <>
      <ListItemButton component="a" href={value} sx={{p: "0"}}>
        <ListItem sx={{ "&:hover": { backgroundColor: "#202018e6" } }}>
          <Box display="flex" alignItems="center">
            <ListItemIcon sx={{ minWidth: "30px" }}>{icon}</ListItemIcon>
            <ListItemText
              primary={key.charAt(0).toUpperCase() + key.slice(1)}
            ></ListItemText>
          </Box>
          {value && (
            <ListItemText
              primary={value}
              sx={{ textAlign: "right", color: "gold" }}
            ></ListItemText>
          )}
          {!value && (
            <ListItemText
              primary="Not Found"
              sx={{ textAlign: "right" }}
            ></ListItemText>
          )}
        </ListItem>
      </ListItemButton>
      <Divider sx={{ backgroundColor: "white" }}></Divider>
    </>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinLinks;
