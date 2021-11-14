import Button from "./Button";
import { AiOutlineEdit } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
const Modal = (props) => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {props.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{props.content}</div>
          <div className="modal-footer">
            <Button
              onClick={() => props.getData(props.my)}
              typ="circle"
              bg="green"
              val={<AiOutlineEdit />}
            />
            <Button
              onClick={() => props.deleteData(props.id)}
              typ="circle"
              bg="red"
              val={<FaTimes />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
