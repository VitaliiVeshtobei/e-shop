import React from 'react';

import { CiLocationOn } from 'react-icons/ci';
import { Container, LocationContainer } from './LocationStyled';

const Location = () => {
  return (
    <Container>
      <p>Need help? Call us: (+98) 0234 456 789</p>
      <LocationContainer>
        <CiLocationOn />
        <p>Our store</p>
      </LocationContainer>
    </Container>
  );
};

export default Location;
