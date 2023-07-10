import { useState } from 'react';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { useModal } from './hooks/useModal';
import Main from './pages/Main/Main';

function App() {
  const { isModalShown, openModal, closeModal, modalContent } = useModal();
  const [isAuth, setIsAuth] = useState(localStorage.getItem('accessToken'));

  return (
    <>
      <Header openModal={openModal} isAuth={isAuth} setIsAuth={setIsAuth} />
      <Main
        isModalShown={isModalShown}
        closeModal={closeModal}
        modalContent={modalContent}
        setIsAuth={setIsAuth}
      />
      <Footer />
    </>
  );
}

export default App;
