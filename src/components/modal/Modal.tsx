import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { closeModal } from "../../store/reducers/modalSlice";

import "./Modal.css";

type ModalChildren = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalChildren) => {
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className={isOpen ? "personal-data active" : "personal-data"}
        onClick={() => dispatch(closeModal(false))}
      >
        <div
          className="personal-data__container"
          onClick={(e) => e.stopPropagation()}
        >
          <span
            className="personal-data__close"
            onClick={() => dispatch(closeModal(false))}
          ></span>
          {children}
        </div>
      </div>
    </>
  );
};
export default Modal;
