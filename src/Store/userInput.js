import { createSlice } from "@reduxjs/toolkit";

const userInput = createSlice({
  name: "userInput",
  initialState: {
    value: "",
    typo: [
      { location: [0, 0] },
      { location: [1, 0] },
      { location: [2, 0] },
      { location: [2, 1] },
      { location: [2, 2] },
      { location: [3, 2] },
      { location: [3, 3] },
      { location: [3, 4] },
      { location: [4, 4] },
      { location: [4, 5] },
      { location: [4, 6] },
      { location: [5, 6] },
      { location: [5, 7] },
      { location: [5, 8] },
      { location: [6, 8] },
      { location: [7, 8] },
    ],
  },
  reducers: {
    changeInput(state, action) {
      state.value = action.payload;
    },
    setLocation(state, action) {
      state.typo = action.payload;
    },
  },
});

export const { changeInput, setLocation } = userInput.actions;
export { userInput };
