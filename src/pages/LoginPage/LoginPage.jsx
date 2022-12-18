// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";

import { Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Test -------------------------- Importing the styles / other components ----------------
import SocialButton from "../../components/Buttons/SocialButton";
import { loginUser, logoutUser } from "../../features/userHandler/userHandler";

// Test -------------------------- The current component ----------------------------------
const LoginPage = () => {
  const { isLogin, user } = useSelector((state) => state.userHandler);
  const dispatch = useDispatch();

  console.log(`State of the user`, { isLogin, user });
  return (
    <Box>
      <Box component="section">
        <Box component="header" sx={{ bgcolor: "black", p: 2 }}>
          <Link to="/">
            <Box component="span" sx={{ color: "white", fontSize: "1.5rem" }}>
              Crypto Hunter
            </Box>
          </Link>
        </Box>

        <Box component="main" sx={{ bgcolor: "white", p: 2 }}>
          <Box>
            <SocialButton src="https://res.cloudinary.com/dicbnntfh/image/upload/v1671358098/Crypto-Hunter-Mern/Google__G__Logo.svg_xunok2.webp">
              Login With Google
            </SocialButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default LoginPage;
