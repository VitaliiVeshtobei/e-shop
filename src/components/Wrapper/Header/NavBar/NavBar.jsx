import React, { useState } from 'react';
import MenuCategories from './MenuCategories/MenuCategories';
import { ButtonCategories, Container, ListContainer, NavLinkStyled, TextStyled } from './NavBarStyled';

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
      {showCategories && (
        <MenuCategories
          handleClick={handleClick}
          showCategories={showCategories}
        />
      )}
    </>
  );
};

export default NavBar;
