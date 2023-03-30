import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuCategories from './MenuCategories/MenuCategories';
import { ButtonCategories, Container, ListContainer, TextStyled, ItemContainer } from './NavBarStyled';

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
            <NavLink>
              <TextStyled>Головна</TextStyled>
            </NavLink>
          </ItemContainer>

          <ItemContainer>
            <NavLink>
              <TextStyled>Всі товари</TextStyled>
            </NavLink>
          </ItemContainer>

          <ItemContainer>
            <NavLink>
              <TextStyled>Відгуки</TextStyled>
            </NavLink>
          </ItemContainer>

          <ItemContainer>
            <NavLink>
              <TextStyled>Контакти</TextStyled>
            </NavLink>
          </ItemContainer>

          <ItemContainer>
            <NavLink>
              <TextStyled>Про нас</TextStyled>
            </NavLink>
          </ItemContainer>

          <ItemContainer>
            <NavLink>
              <TextStyled>Доставка і оплата</TextStyled>
            </NavLink>
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
