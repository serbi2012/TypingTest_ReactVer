import { useDispatch, useSelector } from "react-redux";
import { changeGoal } from "../Store/score";
import { ScoreBox } from "./ScoreBox";
import { TypingInputBox } from "./Typing-InputBox";

function TypingBox() {
  const dispatch = useDispatch();
  const goal = useSelector((state) => state.score.goal);

  return (
    <div className="TypingBox-Container" style={{ userSelect: "none" }}>
      <ScoreBox />
      <TypingInputBox />
      <div>
        <span
          onClick={() => {
            if (goal === 10) {
              dispatch(changeGoal(5));
            } else if (goal === 15) {
              dispatch(changeGoal(10));
            }
          }}
          style={{ cursor: "pointer" }}
        >
          ⬅️{" "}
        </span>
        <span className="me-2 mx-2">{goal}문제</span>
        <span
          onClick={() => {
            if (goal === 5) {
              dispatch(changeGoal(10));
            } else if (goal === 10) {
              dispatch(changeGoal(15));
            }
          }}
          style={{ cursor: "pointer" }}
        >
          {" "}
          ➡️
        </span>
      </div>
    </div>
  );
}

export { TypingBox };
