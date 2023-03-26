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
          <p>Browse categories</p>
        </CategoriesContainer>
        <ListContainer>
          <p>Home</p>
          <p>Catalog</p>
          <p>Pages</p>
          <p>About us</p>
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
