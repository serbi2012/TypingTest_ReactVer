import { createSlice } from "@reduxjs/toolkit";

const userInput = createSlice({
  name: "userInput",
  initialState: {
    value: "",
    typo: [],
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
