// Test -------------------------- Importing the Packages ---------------------------------
import { Box } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import SearchHeading from "./SearchHeading";
import SearchTextField from "./SearchTextField";

// Test -------------------------- The current component ----------------------------------
const Search = () => {
  return (
    <Box
      width="90%"
      margin="30px auto"
      display="flex"
      flexDirection="column"
      gap="15px"
    >
      <SearchHeading></SearchHeading>
      <SearchTextField
        variant="outlined"
        fullWidth
        label="Search Cryptocurrency"
        sx={{ input: { color: "white" } }}
        InputLabelProps={{
          style: {
            color: "white",
          },
        }}
      ></SearchTextField>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Search;
