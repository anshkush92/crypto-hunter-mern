// Test ---------------------- Importing the Redux Toolkit ---------------
import { createSlice } from "@reduxjs/toolkit";

// Test --------------------- Defining the initial State -----------------
const initialState = {
    isDarkMode: false,
}

// Test --------------------- Creating the slice -------------------------
export const toggleThemeSlice = createSlice({
    name: "toggleTheme",
    initialState,
    reducers: {
        toggleTheme: (state) => { state.isDarkMode = !state.isDarkMode }
    }
})

// Test --------------------- Exporting the actions ----------------------
export const { toggleTheme } = toggleThemeSlice.actions;

// Test --------------------- Exporting the Reducers Functions -----------
export default toggleThemeSlice.reducer;