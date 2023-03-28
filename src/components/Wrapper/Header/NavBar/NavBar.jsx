import React, { useState } from 'react';
import {
  CategoriesContainer,
  Container,
  ItemCategories,
  ListCategories,
  ListCategoriesContainer,
  ListContainer,
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
        <CategoriesContainer onClick={handleClick}>
          <p>Каталог товарів</p>
        </CategoriesContainer>
        <ListContainer>
          <p>Головна</p>
          <p>Всі товари</p>
          <p>Відгуки</p>
          <p>Контакти</p>
          <p>Про нас</p>
          <p>Доставка і оплата</p>
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
