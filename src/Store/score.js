import { createSlice } from "@reduxjs/toolkit";

const score = createSlice({
  name: "score",
  initialState: {
    success: 0,
    fail: 0,
    progress: 0,
    goal: 5,
  },
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
    changeGoal(state, action) {
      state.goal = action.payload;
    },
  },
});

export const { addSuccess, addFail, addProgress, resetScore, changeGoal } =
  score.actions;
export { score };
