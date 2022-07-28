// Test ---------------------- Importing the Redux Toolkit ---------------
import { configureStore } from "@reduxjs/toolkit";

// Test ----------------------Importing the slices ----------------------
import toggleTheme from "../features/toggleTheme/toogleTheme";

// Test --------------------- Creating the store -------------------------
const store = configureStore({
    reducer: {
        toggleTheme
    }
});

// Test --------------------- Creating the store -------------------------
export default store;

