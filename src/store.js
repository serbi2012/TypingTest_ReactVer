import { configureStore, createSlice } from "@reduxjs/toolkit";

const userInput = createSlice({
  name: "userInput",
  initialState: { value: "" },
  reducers: {
    changeInput(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeInput } = userInput.actions;

export default configureStore({
  reducer: { userInput: userInput.reducer },
});
