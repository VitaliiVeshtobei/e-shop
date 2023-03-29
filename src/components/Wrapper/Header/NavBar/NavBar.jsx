import React, { useState } from 'react';
import {
  ButtonCategories,
  Container,
  ItemCategories,
  ListCategories,
  ListCategoriesContainer,
  ListContainer,
  NavLinkStyled,
  TextStyled,
} from './NavBarStyled';

const list = [
  {
    id: 1,
    category: 'Tablet as a laptop',
  },
  {
    id: 2,
    category: 'Wireless headphones',
  },
  {
    id: 3,
    category: 'Tablet as a laptop',
  },
  {
    id: 4,
    category: 'Wireless headphones',
  },
  {
    id: 5,
    category: 'Tablet as a laptop',
  },
  {
    id: 6,
    category: 'Wireless headphones',
  },
  {
    id: 7,
    category: 'Tablet as a laptop',
  },
  {
    id: 8,
    category: 'Tablet as a laptop',
  },
];

const NavBar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const handleClick = () => {
    setShowCategories((prev) => !prev);
  };
  return (
    <>
      <Container>
        <ButtonCategories
          type="button"
          onClick={handleClick}
        >
          Каталог товарів
        </ButtonCategories>
        <ListContainer>
          <NavLinkStyled>
            <TextStyled>Головна</TextStyled>
          </NavLinkStyled>
          <NavLinkStyled>
            <TextStyled>Всі товари</TextStyled>
          </NavLinkStyled>
          <NavLinkStyled>
            <TextStyled>Відгуки</TextStyled>
          </NavLinkStyled>
          <NavLinkStyled>
            <TextStyled>Контакти</TextStyled>
          </NavLinkStyled>
          <NavLinkStyled>
            <TextStyled>Про нас</TextStyled>
          </NavLinkStyled>
          <NavLinkStyled>
            <TextStyled>Доставка і оплата</TextStyled>
          </NavLinkStyled>
        </ListContainer>
      </Container>
      <ListCategoriesContainer showCategories={showCategories}>
        <ListCategories>
          {list.map((item) => (
            <ItemCategories key={item.id}>
              <p>{item.category}</p>
            </ItemCategories>
          ))}
        </ListCategories>
      </ListCategoriesContainer>
    </>
  );
};

export default NavBar;
