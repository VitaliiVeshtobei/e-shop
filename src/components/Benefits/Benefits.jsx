import React from 'react';
import { Container, ImageContainer, List } from './BenefitsStyled';
import crown from '../../assets/images/crown.png';
import sheild from '../../assets/images/shield-security.png';
import box from '../../assets/images/box-tick.png';

const Benefits = () => {
  return (
    <Container>
      <List>
        <li>
          <ImageContainer>
            <img
              src={box}
              alt="box"
            />
          </ImageContainer>
          <div>
            <p>Free delivery</p>
            <p>on order above $50,00</p>
          </div>
        </li>
        <li>
          <ImageContainer>
            <img
              src={crown}
              alt="crown"
            />
          </ImageContainer>
          <div>
            <p>Найкраща якість</p>
            <p>найкраща якість за приємною ціною</p>
          </div>
        </li>
        <li>
          <ImageContainer>
            <img
              src={sheild}
              alt="sheild"
            />
          </ImageContainer>
          <div>
            <p>1 рік гарантії</p>
            <p>доступна гарантія</p>
          </div>
        </li>
      </List>
    </Container>
  );
};

export default Benefits;
