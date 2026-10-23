import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const FetchAllCurrencies = async () => {
  let res = await axios.get(
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json",
  );
  return res.data;
};

let curr = await FetchAllCurrencies();

// Define the initial state using that type
const initialState = {
  currencies: Object.entries(curr),
};

export const currencySlice = createSlice({
  name: "currency",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCurrencies: (state, action) => {
      state.currencies.push(...action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCurrencies } = currencySlice.actions;

export default currencySlice.reducer;
