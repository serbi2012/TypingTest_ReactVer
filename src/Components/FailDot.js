import { useDispatch, useSelector } from "react-redux";

function FailDot({ idx }) {
  const typo = useSelector((state) => state.userInput.typo);
  const dispatch = useDispatch();

  return (
    <span
      className="redDot"
      style={{
        transform: `translate(${
          0.55 + 1.42 * typo[idx].location[0] + 1 * typo[idx].location[1]
        }vmin, ${-0.5}vmin)`,
      }}
    ></span>
  );
}

export { FailDot };
