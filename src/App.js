import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { TypingBox } from "./Components/TypingBox";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleCredit } from "./Store/modalState";
import { CreditModal } from "./Components/CreditModal";

function App() {
  const dispatch = useDispatch();
  const creditModalState = useSelector((state) => state.modalState.creditModal);
  console.log("App ~ creditModalState", creditModalState);

  return (
    <div className="App">
      <div className="Main-Conatiner">
        <div className="Title">TypingTest</div>
        <TypingBox />
        <Button
          variant="light"
          style={{ borderRadius: "50%", width: "4vmin", height: "4vmin" }}
          onClick={() => {
            if (creditModalState) {
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
          show={creditModalState}
          onEscapeKeyDown={() => {
            dispatch(toggleCredit(false));
          }}
        />
        <div className="Credit">Developed By RiAXO</div>
      </div>
    </div>
  );
}

export default App;
