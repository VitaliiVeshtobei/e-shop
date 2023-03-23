import React from 'react';
import { CategoriesContainer, Container, ListContainer } from './NavBarStyled';

const NavBar = () => {
  return (
    <Container>
      <CategoriesContainer>
        <p>Browse categories</p>
      </CategoriesContainer>
      <ListContainer>
        <p>Home</p>
        <p>Catalog</p>
        <p>Pages</p>
        <p>About us</p>
      </ListContainer>
    </Container>
  );
};

export default NavBar;
