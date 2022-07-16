import { createSlice } from "@reduxjs/toolkit";

const score = createSlice({
  name: "score",
  initialState: { success: 0, fail: 0, progress: 0 },
  reducers: {
    addSuccess(state) {
      state.success++;
    },
    addFail(state) {
      state.fail++;
    },
    addProgress(state) {
      state.progress++;
    },
    resetScore(state) {
      state.success = 0;
      state.fail = 0;
      state.progress = 0;
    },
  },
});

export const { addSuccess, addFail, addProgress, resetScore } = score.actions;
export { score };
