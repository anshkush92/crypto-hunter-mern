// Test ---------------------- Importing the Redux Toolkit ---------------
import { configureStore } from "@reduxjs/toolkit";
import currencyChanger from "../features/currencyChanger/currencyChanger";

// Test ----------------------Importing the slices ----------------------
import toggleTheme from "../features/toggleTheme/toogleTheme";

// Test --------------------- Creating the store -------------------------
const store = configureStore({
    reducer: {
        toggleTheme
        currencyChanger
    }
});

// Test --------------------- Creating the store -------------------------
export default store;

