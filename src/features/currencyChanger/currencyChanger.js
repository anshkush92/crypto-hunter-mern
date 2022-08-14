// Test ---------------------- Importing the Redux Toolkit ---------------
import { createSlice } from "@reduxjs/toolkit";

// Test --------------------- Initial State -----------------------------
const initialState = {
    label: "USD",
    symbol: "$",
    currency: "$ (USD)",
}

// Test --------------------- Creating the slice ------------------------
export const currencyChangerSlice = createSlice({
    name: "currencyChanger",
    initialState,
    reducers: {
        // IMP ---> BUG: When Selecting the same currency, we get filtered list instead of all currencies
        setCurrency: (state, action) => {
            state.currency = `${action.payload.symbol} (${action.payload.label})`;
            state.symbol = `${action.payload.symbol}`;
            state.label = `${action.payload.label}`;
        }
    }
})

// Test --------------------- Exporting the actions ---------------------
export const { setCurrency } = currencyChangerSlice.actions;

// Test --------------------- Exporting the Reducers Functions ------- 
export default currencyChangerSlice.reducer;