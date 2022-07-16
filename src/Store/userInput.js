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
    ],
  },
  reducers: {
    changeInput(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeInput } = userInput.actions;
export { userInput };
