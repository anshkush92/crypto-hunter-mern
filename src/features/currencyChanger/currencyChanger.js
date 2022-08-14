// Test ---------------------- Importing the Redux Toolkit ---------------
import { createSlice } from "@reduxjs/toolkit";

// Test --------------------- Initial State -----------------------------
const initialState = {
    currency: "$ (USD)",
}

// Test --------------------- Creating the slice ------------------------
export const currencyChangerSlice = createSlice({
    name: "currencyChanger",
    initialState,
    reducers: {
        setCurrency: (state, action) => {
            state.currency = `${action.payload.symbol} (${action.payload.label})`
        }
    }
})

// Test --------------------- Exporting the actions ---------------------
export const { setCurrency } = currencyChangerSlice.actions;

// Test --------------------- Exporting the Reducers Functions ------- 
export default currencyChangerSlice.reducer;