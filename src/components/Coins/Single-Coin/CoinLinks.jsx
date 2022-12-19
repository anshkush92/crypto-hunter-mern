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
      <ListItemButton
        component="a"
        href={value ? value : undefined}
        target="_blank"
        rel="noreferrer"
        sx={{ p: "0", cursor: `${!value && "default"}` }}
      >
        <ListItem sx={{ "&:hover": { backgroundColor: "#1a1a1a" } }}>
          <Box display="flex" alignItems="center">
            <ListItemIcon sx={{ minWidth: "30px" }}>{icon}</ListItemIcon>
            <ListItemText
              primary={key.charAt(0).toUpperCase() + key.slice(1)}
              sx={{ color: "#f7f7f7" }}
            ></ListItemText>
          </Box>
          {value && (
            <ListItemText
              primary={value}
              sx={{
                textAlign: "right",
                color: "#ffd523",
                display: { xs: "none", sm: "block" },
              }}
            ></ListItemText>
          )}
          {!value && (
            <ListItemText
              primary="Not Found"
              sx={{
                textAlign: "right",
                display: { xs: "none", sm: "block" },
                color: "#f05454",
              }}
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
