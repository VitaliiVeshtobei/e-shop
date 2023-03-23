import React from 'react';
import { FaPhone, FaTelegram, FaViber } from 'react-icons/fa';
import { FooterContainer, Container, LogoContainer, ListIconsStyled, ListTextStyled } from './FooterStyled';
import logoFooter from '../../../assets/images/logo-footer.png';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <LogoContainer>
          <img
            src={logoFooter}
            alt="logo-footer"
          />
          <p>64 st james boulevard hoswick , ze2 7zj</p>
          <ListIconsStyled>
            <li>
              <FaTelegram />
            </li>
            <li>
              <FaViber />
            </li>
            <li>
              <FaPhone />
            </li>
          </ListIconsStyled>
        </LogoContainer>

        <ListTextStyled>
          <li>
            <span>Find product</span>
            <p>Brownze arnold</p>
            <p>Chronograph blue</p>
            <p>Smart phones</p>
            <p>Automatic watch</p>
            <p>Hair straighteners</p>
          </li>
          <li>
            <span>Get help</span>
            <p>About us</p>
            <p>Contact us</p>
            <p>Return policy</p>
            <p>Privacy policy</p>
            <p>Payment policy</p>
          </li>
          <li>
            <span>About us</span>
            <p>News</p>
            <p>Service</p>
            <p>Our policy</p>
            <p>Custmer care</p>
            <p>Faq’s</p>
          </li>
        </ListTextStyled>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
