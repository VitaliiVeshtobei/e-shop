import React from 'react';
import { FaWhatsapp, FaTelegramPlane, FaViber } from 'react-icons/fa';
import { CiPhone, CiLocationOn } from 'react-icons/ci';
import {
  FooterContainer,
  Container,
  LogoContainer,
  ListIconsStyled,
  CategoriesContainer,
  TitleCategories,
  ListCategories,
  ContactsContainer,
  ContactsList,
  ContactsItem,
  ListIconsLink,
} from './FooterStyled';
import logoFooter from '../../../assets/images/logo-footer.png';

const list = [
  {
    id: 1,

    category: 'Про нас',
  },
  {
    id: 2,

    category: 'Відгуки',
  },
  {
    id: 3,

    category: 'Контакти',
  },
  {
    id: 4,

    category: 'Всі товари',
  },
  {
    id: 5,

    category: 'Товари в наявності',
  },
  {
    id: 6,

    category: 'Доставка і оплата',
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
          <p>Privat-auto — Інтернет магазин автозапчастин та аксессуарів</p>
        </LogoContainer>

        <CategoriesContainer>
          <TitleCategories>Карта сайту</TitleCategories>
          <ListCategories>
            {list.map((item) => (
              <li key={item.id}>
                <p>{item.category}</p>
              </li>
            ))}
          </ListCategories>
        </CategoriesContainer>

        <ContactsContainer>
          <ContactsList>
            <ContactsItem>
              <a href="tel:+380666125324">
                <CiPhone />
                <p>+380 (66) 612-53-24</p>
              </a>
            </ContactsItem>
            <ContactsItem>
              <a
                href="https://goo.gl/maps/1n5zNR8YozQptYxr8"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                <CiLocationOn />
                <p>Київ, Україна</p>
              </a>
            </ContactsItem>
          </ContactsList>
          <ListIconsStyled>
            <li>
              <ListIconsLink
                href="https://t.me/<имя пользователя>"
                color="tg"
              >
                <FaTelegramPlane />
              </ListIconsLink>
            </li>
            <li>
              <ListIconsLink
                href="viber://add?number=380666125324"
                color="vb"
              >
                <FaViber />
              </ListIconsLink>
            </li>
            <li>
              <ListIconsLink
                href="https://wa.me/<номер телефона>"
                color="wt"
              >
                <FaWhatsapp />
              </ListIconsLink>
            </li>
          </ListIconsStyled>
        </ContactsContainer>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
