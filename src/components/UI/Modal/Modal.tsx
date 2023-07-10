import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { TfiClose } from 'react-icons/tfi';

interface IModalProps {
  isModalShown: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal: FC<IModalProps> = ({ isModalShown, closeModal, children }) =>
  isModalShown
    ? createPortal(
        <div
          className="fixed top-0 right-0 z-10 flex h-screen w-screen items-center justify-center bg-gray"
          onClick={closeModal}
        >
          <div
            className="shadow-[0_35px_60px_-15px_rgba(0, 0, 0, 0.07)] relative flex min-h-[502px] w-[480px] flex-col rounded-[5px] bg-white px-[70px] pt-[105px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="absolute top-6 right-6" onClick={closeModal}>
              <TfiClose size={32} color="#685ED6" />
            </button>
            {children}
          </div>
        </div>,
        document.body,
      )
    : null;

export default Modal;
