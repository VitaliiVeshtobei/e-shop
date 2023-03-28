import React from 'react';
import { FaPhone, FaTelegram, FaViber } from 'react-icons/fa';
import {
  FooterContainer,
  Container,
  LogoContainer,
  ListIconsStyled,
  ListTextStyled,
  CategoriesContainer,
  TitleCategories,
  ListCategories,
} from './FooterStyled';
import logoFooter from '../../../assets/images/logo-footer.png';

const list = [
  {
    id: 1,

    category: 'Підрульові шлейфи',
  },
  {
    id: 2,

    category: 'Бризговики автомобільні',
  },
  {
    id: 3,

    category: 'Круїз контроль комплект Toyota',
  },
  {
    id: 4,

    category: 'Проблискові маячки',
  },
  {
    id: 5,

    category: 'Ручки перемикання передач',
  },
  {
    id: 6,

    category: 'Накладки на педалі',
  },
  {
    id: 7,

    category: 'Кнопки руля',
  },
  {
    id: 8,

    category: 'Модуль складання дзеркала',
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <LogoContainer>
          <img
            src={logoFooter}
            alt="logo-footer"
          />
          <p>Київ, вул. Вишгородська 30, Київ, Україна</p>
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

        <CategoriesContainer>
          <TitleCategories>Categories</TitleCategories>
          <ListCategories>
            {list.map((item) => (
              <li key={item.id}>
                <p>{item.category}</p>
              </li>
            ))}
          </ListCategories>
        </CategoriesContainer>

        {/* <ListTextStyled>
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
        </ListTextStyled> */}
      </Container>
    </FooterContainer>
  );
};

export default Footer;
