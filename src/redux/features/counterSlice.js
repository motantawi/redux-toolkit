import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleIncrement: (state, val) => {
      state.counter += val.payload;
    },
    handleDecrement: (state, val) => {
      state.counter -= val.payload;
    },
  },
});

export const { handleDecrement, handleIncrement } = counterSlice.actions;

export default counterSlice.reducer;
