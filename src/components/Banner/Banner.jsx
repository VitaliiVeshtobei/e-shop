import React from 'react';
import ukr from '../../assets/images/Ukraine.jpg';
import { Container } from './BannerStyled';

const Banner = () => {
  return (
    <Container>
      <img
        src={ukr}
        alt="banner"
      />
    </Container>
  );
};

export default Banner;
