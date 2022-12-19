// Test -------------------------- Importing the Packages ---------------------------------
import { Box, Divider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// Test -------------------------- Importing the styles / other components ----------------
import SocialButton from "../../components/Buttons/SocialButton";
import {
  enteredEmail,
  enteredPassword,
  changePage,
  setError,
  loginUser,
  removeError,
} from "../../features/userHandler/userHandler";
import FormActionButton from "../../components/Buttons/FormActionButton";
import InputTf from "../../components/Form/InputTf";
import AlertToast from "../../components/Alert/Alert";
import { auth } from "../../firebase";
import { GoogleAuthProvider } from "firebase/auth";

// Test -------------------------- The current component ----------------------------------
const LoginPage = () => {
  const state = useSelector((state) => state.userHandler);
  const navigate = useNavigate();
  const { email, password } = state;
  const dispatch = useDispatch();

  console.log(`State of the user`, state);

  let open, type, message;
  open = true;
  type = "error";
  message = "";

  const handleLogin = async () => {
    if (email.trim().length === 0 || password.trim().length === 0) {
      message = "Please Fill all the fields";
      dispatch(setError({ open, type, message }));
      return;
    }

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response.user.uid);
      dispatch(changePage());

      console.log(`Login done`);
      type = "success";
      message = "Login Successful";
      dispatch(
        loginUser({
          uid: response.user.uid,
          photoURL: response.user.photoURL,
          email: response.user.email,
          displayName: response.user.displayName,
        })
      );
      dispatch(setError({ open, type, message }));
      navigate("/");
      dispatch(removeError());
      return;
    } catch (err) {
      message = err.message;
      dispatch(setError({ open, type, message }));
      console.log(err);
      return;
    }
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    console.log(`Google Login`);
    try {
      const response = await signInWithPopup(auth, googleProvider);
      console.log(response);
      dispatch(changePage());

      console.log(`Login done`);
      type = "success";
      message = "Login Successful";
      dispatch(
        loginUser({
          uid: response.user.uid,
          photoURL: response.user.photoURL,
          email: response.user.email,
          displayName: response.user.displayName,
        })
      );
      dispatch(setError({ open, type, message }));
      navigate("/");
      dispatch(removeError());
    } catch (err) {
      message = err.message;
      dispatch(setError({ open, type, message }));
      console.log(err);
      return;
    }
  };

  return (
    <Box>
      <AlertToast></AlertToast>
      <Box component="section">
        <Box component="header" sx={{ bgcolor: "#393e46", p: 2 }}>
          <Link to="/">
            <Box component="span" sx={{ color: "#f7f7f7", fontSize: "1.5rem" }}>
              Crypto Hunter
            </Box>
          </Link>
        </Box>

        <Box
          component="main"
          sx={{
            bgcolor: "#f7f7f7",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            p: 2,
            width: { xs: "90%", sm: "30rem" },
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              justifyContent: "center",
            }}
          >
            <Box sx={{ fontSize: "1.25rem" }}>Welcome Back</Box>
            <Box>Enter all details to login</Box>
          </Box>

          <Box>
            <SocialButton
              onClick={handleGoogleLogin}
              src="https://res.cloudinary.com/dicbnntfh/image/upload/v1671358098/Crypto-Hunter-Mern/Google__G__Logo.svg_xunok2.webp"
            >
              Login With Google
            </SocialButton>
          </Box>

          <Divider>OR</Divider>

          <Box
            sx={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            <InputTf
              value={email}
              onChange={(e) => dispatch(enteredEmail(e.target.value))}
            >
              Email
            </InputTf>
            <InputTf
              type="password"
              value={password}
              onChange={(e) => dispatch(enteredPassword(e.target.value))}
            >
              Password
            </InputTf>
            <Box
              component="span"
              sx={{
                fontSize: "0.75rem",
                display: "flex",
                justifyContent: "end",
              }}
            >
              Forget Password ?
            </Box>
          </Box>

          <FormActionButton onClick={handleLogin}>Login</FormActionButton>

          <Box sx={{ fontSize: "0.9rem", width: "100%", textAlign: "center" }}>
            Don't have an Account ?{" "}
            <Link to="/signup" onClick={() => dispatch(changePage())}>
              <Box
                component="span"
                sx={{
                  fontSize: "0.8rem",
                  textDecoration: "underline",
                  color: "#f05454",
                  cursor: "pointer",
                }}
              >
                Signup
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default LoginPage;
