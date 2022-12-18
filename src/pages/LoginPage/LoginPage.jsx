// Test -------------------------- Importing the Packages ---------------------------------
import { Button } from "@mui/material";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../features/userHandler/userHandler";
// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- The current component ----------------------------------
const LoginPage = () => {
  const { isLogin, user } = useSelector((state) => state.userHandler);
  const dispatch = useDispatch();

  console.log(`State of the user`, { isLogin, user });
  return (
    <div>
      LoginPage
      {!isLogin && (
        <Button
          onClick={() => {
            dispatch(loginUser({ name: "Ansh" }));
          }}
        >
          Login
        </Button>
      )}
      {isLogin && (
        <Button onClick={() => dispatch(logoutUser())}>Logout</Button>
      )}
    </div>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default LoginPage;
