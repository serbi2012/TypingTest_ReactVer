import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="Main-Conatiner">
        <div className="Title">TypingTest</div>
        <div className="TypingBox-Container">
          <div className="ScoreBox">
            <div className="Score">성공 : 0</div>
            <div className="Score">실패 : 0</div>
            <div className="Score">진행도 : 0</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
