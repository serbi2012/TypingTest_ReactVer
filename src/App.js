import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { TypingBox } from "./Components/TypingBox";

function App() {
  return (
    <div className="App">
      <div className="Main-Conatiner">
        <div className="Title">TypingTest</div>
        <TypingBox />
        <div className="Credit">Developed By RiAXO</div>
      </div>
    </div>
  );
}

export default App;
