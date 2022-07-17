import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleResult } from "../Store/modalState";
import { shuffle } from "../Store/phrase";
import { resetScore } from "../Store/score";

function ResultModal(props) {
  const score = useSelector((state) => state.score);
  const dispatch = useDispatch();

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          TypingTest Result
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>총 {score.progress}개중</div>
        <div>{score.success}개 성공</div>
        <div>{score.fail}개 실패하였습니다!</div>
        <div>결과창을 닫으려면 백스페이스버튼을 누르세요!</div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            dispatch(toggleResult(false));
            dispatch(shuffle());
            dispatch(resetScore());
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { ResultModal };
