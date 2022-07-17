import { createSlice } from "@reduxjs/toolkit";

const modalState = createSlice({
  name: "modalState",
  initialState: { creditModal: false, resultModal: false },
  reducers: {
    toggleCredit(state, action) {
      state.creditModal = action.payload;
    },
    toggleResult(state, action) {
      state.resultModal = action.payload;
    },
  },
});

export const { toggleCredit, toggleResult } = modalState.actions;
export { modalState };
