import { Button, Box } from "@mui/material";

const SocialButton = ({ children, src }) => {
  return (
    <Button
      sx={{
        width: "100%",
        height: "3rem",
        color: "black",
        borderRadius: "0.5rem",
        bgcolor: "#e4e2e2",
        display: "flex",
        gap: "0.5rem",
        justifyContent: "center",
        itemsAlign: "center",
        boxShadow: "0px",
        "&:hover": {
          bgcolor: "#dedede",
        },
      }}
    >
      <Box
        component="img"
        src={src}
        sx={{ width: "1.5rem", height: "1.5rem" }}
      ></Box>
      <Box component="span">{children}</Box>
    </Button>
  );
};

export default SocialButton;
