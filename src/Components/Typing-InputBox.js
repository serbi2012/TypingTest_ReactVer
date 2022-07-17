import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shuffle, toNext } from "../Store/phrase";
import { addFail, addProgress, addSuccess } from "../Store/score";
import { changeInput, setLocation } from "../Store/userInput";
import { FailDot } from "./FailDot";

function TypingInputBox() {
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.userInput);
  const phrase = useSelector((state) => state.phrase);

  useEffect(() => {
    dispatch(shuffle());
  }, []);

  function makeLocation(text, input) {
    const result = [];

    let str = 0;
    let spa = 0;

    for (let i = 0; i < input.length; i++) {
      if (text[i] == " ") {
        spa++;
      } else {
        str++;
      }

      if (input[i] !== text[i]) {
        if (str % 2 === 0) {
          result.push({ location: [str / 2, i - str / 2] });
        } else {
          result.push({
            location: [(str + 1) / 2, i - (str + 1) / 2],
          });
        }
      }
    }

    if (result[0]) {
      result[0] = { location: [0, 0] };
    }
    // result[text.length - 1].location[0]++;

    return result;
  }

  return (
    <div className="Typing-InputBox">
      <div className="Typing-Exaple">
        {userInput.typo.map((value, i) => {
          return <FailDot idx={i} />;
        })}
        {phrase.phraseList[phrase.nowPhrase]}
      </div>
      <input
        className="Typing-Input mt-2 mb-2"
        placeholder="위에 보이는 문장을 똑같이 입력해보세요!"
        onChange={(e) => {
          dispatch(changeInput(`${e.target.value}`));
          dispatch(setLocation([]));
          dispatch(
            setLocation(
              makeLocation(phrase.phraseList[phrase.nowPhrase], e.target.value)
            )
          );
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            dispatch(toNext());
            dispatch(changeInput(``));
            e.target.value = "";

            if (phrase.phraseList[phrase.nowPhrase] === userInput.value) {
              dispatch(addSuccess());
              dispatch(addProgress());
            } else {
              dispatch(addFail());
              dispatch(addProgress());
            }
          }
        }}
      />
      <div className="Typing-NextExaple">
        <span
          style={{ fontWeight: "bold", fontSize: "2.7vmin" }}
          className="me-2"
        >
          Next
        </span>
        {phrase.phraseList[phrase.nowPhrase + 1]}
      </div>
    </div>
  );
}

export { TypingInputBox };
