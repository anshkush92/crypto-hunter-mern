// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";
import { Box, TextField, styled } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import SearchHeading from "./SearchHeading";

// Test -------------------------- The current component ----------------------------------
const Search = () => {
  const [searchValue, setSearchValue] = useState();

  const searchValueHandler = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  // Test ----------------------- Custom Text Field made using Styled ---------------------
  const SearchTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "yellow",
      },
      "&:hover fieldset": {
        borderColor: "green",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });

  return (
    <Box
      width="90%"
      margin="30px auto"
      display="flex"
      flexDirection="column"
      gap="15px"
    >
      <SearchHeading></SearchHeading>
      <TextField
        variant="outlined"
        fullWidth
        label="Search Cryptocurrency"
        sx={{ input: { color: "white" } }}
        InputLabelProps={{
          style: {
            color: "white",
            borderColor: "red"
          },
        }}
        onChange={searchValueHandler}
        value={searchValue}
        focused
      ></TextField>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Search;
