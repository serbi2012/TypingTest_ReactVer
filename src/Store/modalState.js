import { createSlice } from "@reduxjs/toolkit";

const modalState = createSlice({
  name: "modalState",
  initialState: { creditModal: false },
  reducers: {
    toggleCredit(state, action) {
      state.creditModal = action.payload;
    },
  },
});

export const { toggleCredit } = modalState.actions;
export { modalState };
