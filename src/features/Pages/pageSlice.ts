import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  count: number;
}

interface Action {
  payload: any;
  type: string;
}

const intialState: InitialState = {
  count: 1,
};

const pageSlice = createSlice({
  name: "pages",
  initialState: intialState,
  reducers: {
    increment: (state: InitialState) => {
      state.count += 1;
    },
    decrement: (state: InitialState) => {
      state.count -= 1;
    },
    reset: (state: InitialState) => {
      state.count = 0;
    },
    incrementBy: (state: InitialState, action: Action) => {
      state.count += action.payload;
    },
  },
});

export const selectCount = (state: any) => state.page.count;
export const { increment, decrement, reset, incrementBy } = pageSlice.actions;

export default pageSlice.reducer;
