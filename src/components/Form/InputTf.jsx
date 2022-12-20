import { TextField } from "@mui/material";

const InputTf = (props) => {
  const { children } = props;
  return (
    <TextField
      {...props}
      required
      fullWidth
      variant="standard"
      label={children}
    ></TextField>
  );
};

export default InputTf;
