import { useState } from 'react';

export const useModal = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const toggleScrollVisibility = () => {
    document.body.style.overflow = isModalShown ? '' : 'hidden';
  };

  const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    setModalContent(event.currentTarget.value);
    setIsModalShown(true);
    toggleScrollVisibility();
  };

  const closeModal = () => {
    setIsModalShown(false);
    toggleScrollVisibility();
  };

  return { isModalShown, openModal, closeModal, modalContent };
};
