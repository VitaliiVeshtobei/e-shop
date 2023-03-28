import React from 'react';

import { CiLocationOn, CiCalendar } from 'react-icons/ci';
import { Container, ListLocation, ItemLocation } from './LocationStyled';

const Location = () => {
  return (
    <Container>
      <p>Потрібна допомога? Зателефонуйте: +380 (66) 612-53-24</p>
      <ListLocation>
        <ItemLocation>
          <CiLocationOn style={{ width: 24, height: 24 }} />
          <p>Наш магазин</p>
        </ItemLocation>
        <ItemLocation>
          <CiCalendar style={{ width: 24, height: 24 }} />
          <p>Графік роботи</p>
        </ItemLocation>
      </ListLocation>
    </Container>
  );
};

export default Location;
