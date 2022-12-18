import { createSlice } from "@reduxjs/toolkit";

// The intial state of the userHandler slice
const initialState = {
  user: null,
  isLogin: false,
};

// The userHandler slice
export const userHandlerSlice = createSlice({
  name: "userHandler",
  initialState,
  reducers: {
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
  },
});

// Exporting the actions (type of actions)
export const { loginUser, logoutUser } = userHandlerSlice.actions;

// Exporting the Reducers Functions
export default userHandlerSlice.reducer;
