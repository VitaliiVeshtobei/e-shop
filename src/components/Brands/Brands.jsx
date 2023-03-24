import React from 'react';

import brand1 from '../../assets/images/brands/brand-4.png';
import brand2 from '../../assets/images/brands/brand-5.png';
import brand3 from '../../assets/images/brands/brand-6.png';
import brand4 from '../../assets/images/brands/brand-7.png';
import brand5 from '../../assets/images/brands/brand-8.png';
import { Container, List } from './BrandsStyled';

const Brands = () => {
  return (
    <Container>
      <List>
        <li>
          <img
            src={brand1}
            alt="brand1"
          />
        </li>
        <li>
          <img
            src={brand2}
            alt="brand2"
          />
        </li>
        <li>
          <img
            src={brand3}
            alt="brand3"
          />
        </li>
        <li>
          <img
            src={brand4}
            alt="brand4"
          />
        </li>
        <li>
          <img
            src={brand5}
            alt="brand5"
          />
        </li>
      </List>
    </Container>
  );
};

export default Brands;
