import { useDispatch, useSelector } from "react-redux";
import { changeInput } from "../store";

function TypingInputBox() {
  const dispatch = useDispatch();
  const userInput = useSelector((state) => {
    return state.userInput;
  });

  return (
    <div className="Typing-InputBox">
      <div className="Typing-Exaple">삶이 있는 한 희망은 있다.</div>
      <input
        className="Typing-Input mt-2 mb-2"
        placeholder="위에 보이는 문장을 똑같이 입력해보세요!"
        onChange={(e) => {
          dispatch(changeInput(`${e.target.value}`));
        }}
      />
      <div className="Typing-NextExaple">
        <span
          style={{ fontWeight: "bold", fontSize: "2.7vmin" }}
          className="me-2"
        >
          Next
        </span>
        당신의 행복은 무엇이 당신의 영혼을 노래하게 하는가에 따라 결정된다.
      </div>
    </div>
  );
}

export { TypingInputBox };
