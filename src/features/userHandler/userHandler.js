import { createSlice } from "@reduxjs/toolkit";

// The intial state of the userHandler slice
const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  user: "",
  isLogin: true,
  error: "",
};

// The userHandler slice
export const userHandlerSlice = createSlice({
  name: "userHandler",
  initialState,
  reducers: {
    // The function for handling the enterend email, and setting the state
    enteredEmail: (state, action) => {
      // Payload ---> Object which the user sends in the function
      // console.log(action.payload);
      state.email = action.payload;
    },

    // The function for handling the enterend password, and setting the state
    enteredPassword: (state, action) => {
      // Payload ---> Object which the user sends in the function
      // console.log(action.payload);
      state.password = action.payload;
    },

    // The function for handling the enterend confirm password, and setting the state
    enteredConfirmPassword: (state, action) => {
      // Payload ---> Object which the user sends in the function
      // console.log(action.payload);
      state.confirmPassword = action.payload;
    },

    //   The function for handling the login, and setting the state
    loginUser: (state, action) => {
      // Payload ---> Object which the user sends in the function
      // console.log(action.payload);
      state.user = action.payload;
      state.isLogin = true;
    },

    // The function for handling the logout, and setting the state
    logoutUser: (state) => {
      state.user = null;
      state.isLogin = false;
    },

    changePage: (state) => {
      state.email = "";
      state.password = "";
      state.confirmPassword = "";
      state.error = "";
    },

    setError: (state, action) => {
      console.log(action.payload);
      state.error = action.payload;
    },

    removeError: (state) => {
      state.error = "";
    },
  },
});

// Exporting the actions (type of actions)
export const {
  enteredEmail,
  enteredPassword,
  enteredConfirmPassword,
  loginUser,
  logoutUser,
  changePage,
  setError,
  removeError,
} = userHandlerSlice.actions;

// Exporting the Reducers Functions
export default userHandlerSlice.reducer;
