import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  count: 0,
};

export const pageSlice = createSlice({
  name: "pages",
  initialState: intialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = pageSlice.actions;

export default pageSlice.reducer;
