import React from 'react';
import { useState } from 'react';

import { CiLocationOn, CiCalendar } from 'react-icons/ci';
import { ModalWrapper } from '../../../Model/ModelWrapper/ModelWrapper';
import { Container, ListLocation, ItemLocation } from './LocationStyled';

const Location = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [component, setComponent] = useState(null);

  const openModal = (e) => {
    setIsOpenModal(true);
    setComponent(e);
  };
  const toggleModal = () => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
    setComponent(null);
  };

  return (
    <Container>
      <p>Потрібна допомога? Зателефонуйте: +380 (66) 612-53-24</p>
      <ListLocation>
        <ItemLocation onClick={() => openModal('location')}>
          <CiLocationOn style={{ width: 24, height: 24 }} />
          <p>Наш магазин</p>
        </ItemLocation>
        <ItemLocation onClick={() => openModal('graphics')}>
          <CiCalendar style={{ width: 24, height: 24 }} />
          <p>Графік роботи</p>
        </ItemLocation>
      </ListLocation>
      {isOpenModal && (
        <ModalWrapper
          component={component}
          onClose={toggleModal}
        />
      )}
    </Container>
  );
};

export default Location;
