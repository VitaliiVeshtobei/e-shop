import React from 'react';
import baner from '../../assets/images/pexels-nao-triponez-129208 1.png';
import { ButtonStyled, Container, ContainerInfo } from './BannerStyled';

const Banner = () => {
  return (
    <Container>
      <img
        src={baner}
        alt="banner"
      />
      <ContainerInfo>
        <ButtonStyled type="button">New laptop </ButtonStyled>
        <div>
          <p>Sale up to 50% off</p>
          <p>12 inch hd display</p>
        </div>
        <ButtonStyled type="button">Shop now</ButtonStyled>
      </ContainerInfo>
    </Container>
  );
};

export default Banner;
