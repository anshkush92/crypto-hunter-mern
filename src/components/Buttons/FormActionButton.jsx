import { Button } from "@mui/material";
import React from "react";

const FormActionButton = ({ children }) => {
  return (
    <Button
      sx={{
        backgroundColor: "#1c1c1c",
        color: "white",
        "&:hover": {
          bgcolor: "black",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default FormActionButton;
