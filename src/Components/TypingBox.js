import { ScoreBox } from "./ScoreBox";
import { TypingInputBox } from "./Typing-InputBox";

function TypingBox() {
  return (
    <div className="TypingBox-Container">
      <ScoreBox />
      <TypingInputBox />
    </div>
  );
}

export { TypingBox };
