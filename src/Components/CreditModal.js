import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { toggleCredit } from "../Store/modalState";

function CreditModal(props) {
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
          Help & Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>심플한 타이핑 테스트게임의 React버전입니다.</p>
        <p>재미있게 즐겨주세요!</p>
        <br />
        <br />
        <p>Contact : serbi2012@naver.com</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            dispatch(toggleCredit(false));
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { CreditModal };
