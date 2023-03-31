import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import {
  ButtonStyled,
  Container,
  FormStyled,
  InputStyled,
  CartContainer,
  NavLinkStyled,
  CartCount,
  LogoContainer,
} from './SearchStyled';
import logo from '../../../../assets/images/logo 1.png';

const Search = () => {
  const handlerSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <Container>
      <LogoContainer>
        <img
          src={logo}
          alt="logo"
        />
      </LogoContainer>
      <FormStyled onSubmit={handlerSubmit}>
        <InputStyled
          type="text"
          placeholder="Я шукаю..."
        />
        <ButtonStyled type="submit">Знайти</ButtonStyled>
      </FormStyled>
      <CartContainer>
        <NavLinkStyled>
          <IoCartOutline style={{ color: 'white', height: 24, width: 24 }} />
          <CartCount>5</CartCount>
          <span>Корзина</span>
        </NavLinkStyled>
      </CartContainer>
    </Container>
  );
};

export default Search;
