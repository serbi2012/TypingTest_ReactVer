import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { TypingBox } from "./Components/TypingBox";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleCredit, toggleResult } from "./Store/modalState";
import { CreditModal } from "./Components/CreditModal";
import { ResultModal } from "./Components/ResultModal";

function App() {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modalState);

  return (
    <div className="App">
      <div className="Main-Conatiner">
        <div className="Title">TypingTest</div>
        <TypingBox />
        <Button
          variant="light"
          style={{ borderRadius: "50%", width: "4vmin", height: "4vmin" }}
          onClick={() => {
            if (modalState.creditModal) {
              dispatch(toggleCredit(false));
            } else {
              dispatch(toggleCredit(true));
            }
          }}
          className="CreditModalBtn"
        >
          ?
        </Button>
        <CreditModal
          show={modalState.creditModal}
          onEscapeKeyDown={() => {
            dispatch(toggleCredit(false));
          }}
          className="d-flex justify-content-center align-items-center"
        />
        <ResultModal
          show={modalState.resultModal}
          onEscapeKeyDown={() => {
            dispatch(toggleResult(false));
          }}
          className="d-flex justify-content-center align-items-center"
        />
        <div className="Credit">Developed By RiAXO</div>
      </div>
    </div>
  );
}

export default App;
