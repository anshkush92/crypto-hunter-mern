import { Button } from "@mui/material";
import React from "react";

const FormActionButton = (props) => {
  const { children } = props;
  return (
    <Button
      {...props}
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
