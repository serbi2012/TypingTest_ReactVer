import { configureStore } from "@reduxjs/toolkit";
import { modalState } from "./Store/modalState";
import { phrase } from "./Store/phrase";
import { score } from "./Store/score";
import { userInput } from "./Store/userInput";

export default configureStore({
  reducer: {
    userInput: userInput.reducer,
    phrase: phrase.reducer,
    score: score.reducer,
    modalState: modalState.reducer,
  },
});
