import { FC } from 'react';

import Modal from '@/components/UI/Modal/Modal';
import About from '@/pages/Main/components/About/About';
import Connection from '@/pages/Main/components/Connection/Connection';
import Feature from '@/pages/Main/components/Features/Features';
import Rates from '@/pages/Main/components/Rates/Rates';
import Reviews from '@/pages/Main/components/Reviews/Reviews';
import Steps from '@/pages/Main/components/Steps/Steps';

import Form from './components/Form/Form';

interface MainProps {
  isModalShown: boolean;
  closeModal: () => void;
  modalContent: string;
  setIsAuth: React.Dispatch<React.SetStateAction<string | null>>;
}

const Main: FC<MainProps> = ({
  isModalShown,
  closeModal,
  modalContent,
  setIsAuth,
}) => (
  <>
    <main>
      <About />
      <Feature />
      <Rates />
      <Steps />
      <Reviews />
      <Connection />
    </main>
    <Modal isModalShown={isModalShown} closeModal={closeModal}>
      <Form
        formType={modalContent}
        closeModal={closeModal}
        setIsAuth={setIsAuth}
      />
    </Modal>
  </>
);

export default Main;
