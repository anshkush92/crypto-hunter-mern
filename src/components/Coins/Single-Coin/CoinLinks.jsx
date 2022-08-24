// Test -------------------------- Importing the Packages ---------------------------------
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { useNavigate } from "react-router-dom";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const CoinLinks = (props) => {
  const { icon, text } = props;
  const key = Object.keys(text)[0];
  const value = text[key];
  const navigate = useNavigate();

  console.log(key, value, text);

  return (
    <>
      <ListItem sx={{ "&:hover": { backgroundColor: "#202018e6" } }}>
        <Box display="flex" alignItems="center">
          <ListItemIcon sx={{ minWidth: "30px" }}>{icon}</ListItemIcon>
          <ListItemText
            primary={key.charAt(0).toUpperCase() + key.slice(1)}
          ></ListItemText>
        </Box>
        <ListItemButton component="a" href={value}>
            <ListItemText primary={value} sx={{textAlign: "right"}}></ListItemText>
        </ListItemButton>
      </ListItem>
      <Divider sx={{ backgroundColor: "white" }}></Divider>
    </>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default CoinLinks;
