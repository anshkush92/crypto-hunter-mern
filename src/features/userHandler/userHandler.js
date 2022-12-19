import { createSlice } from "@reduxjs/toolkit";

// The intial state of the userHandler slice
const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  user: "",
  isLogin: false,
  error: {
    open: false,
    message: "",
    type: "",
  },
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
      console.log(state);
      state.user = "";
      state.email = "";
      state.password = "";
      state.isLogin = false;
    },

    changePage: (state) => {
      console.log(state);
      state = { ...initialState, isLogin: state.isLogin };
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    removeError: (state) => {
      state.error = { ...state.error, open: false };
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
