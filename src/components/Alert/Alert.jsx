import { forwardRef } from "react";
import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import MuiAlert from "@mui/material/Alert";

import { useSelector, useDispatch } from "react-redux";

import { removeError } from "../../features/userHandler/userHandler";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertToast = () => {
  const state = useSelector((state) => state.userHandler);
  const dispatch = useDispatch();
  const { error } = state;
  const { open, message, type } = error;

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => dispatch(removeError())}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={2000}
      onClose={() => dispatch(removeError())}
      action={action}
    >
      <Alert
        onClose={() => dispatch(removeError())}
        severity={type}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertToast;
