// Test ---------------------- Importing the Redux Toolkit ---------------
import { configureStore } from "@reduxjs/toolkit";

// Test ----------------------Importing the slices ----------------------
import toggleTheme from "../features/toggleTheme/toogleTheme";
import currencyChanger from "../features/currencyChanger/currencyChanger";
import coinsListHandler from "../features/coinsList/coinsList";

// Test --------------------- Creating the store -------------------------
const store = configureStore({
    reducer: {
        toggleTheme,
        currencyChanger,
        coinsListHandler,
    }
});

// Test --------------------- Creating the store -------------------------
export default store;

