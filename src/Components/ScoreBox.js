import { useDispatch, useSelector } from "react-redux";

function ScoreBox() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);

  return (
    <div className="ScoreBox">
      <div className="Score">성공 : {score.success}</div>
      <div className="Score">실패 : {score.fail}</div>
      <div className="Score">진행도 : {score.progress}</div>
    </div>
  );
}

export { ScoreBox };
