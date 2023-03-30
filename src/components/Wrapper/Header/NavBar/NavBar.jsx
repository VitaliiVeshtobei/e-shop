import React, { useState } from 'react';
import MenuCategories from './MenuCategories/MenuCategories';
import { ButtonCategories, Container, ListContainer, ItemContainer, NavLinkStyled } from './NavBarStyled';

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
          <ItemContainer>
            <NavLinkStyled>Головна</NavLinkStyled>
          </ItemContainer>

          <ItemContainer>
            <NavLinkStyled>Всі товари</NavLinkStyled>
          </ItemContainer>

          <ItemContainer>
            <NavLinkStyled>Відгуки</NavLinkStyled>
          </ItemContainer>

          <ItemContainer>
            <NavLinkStyled>Контакти</NavLinkStyled>
          </ItemContainer>

          <ItemContainer>
            <NavLinkStyled>Про нас</NavLinkStyled>
          </ItemContainer>

          <ItemContainer>
            <NavLinkStyled>Доставка і оплата</NavLinkStyled>
          </ItemContainer>
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
