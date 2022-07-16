import { createSlice } from "@reduxjs/toolkit";

const userInput = createSlice({
  name: "userInput",
  initialState: { value: "", typo: 0 },
  reducers: {
    changeInput(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeInput } = userInput.actions;
export { userInput };
