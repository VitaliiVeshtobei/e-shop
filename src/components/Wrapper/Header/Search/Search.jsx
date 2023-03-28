import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { ButtonStyled, Container, FormStyled, InputStyled, CartContainer } from './SearchStyled';
import logo from '../../../../assets/images/logo 1.png';

const Search = () => {
  const handlerSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <Container>
      <div>
        <img
          src={logo}
          alt="logo"
        />
      </div>
      <FormStyled onSubmit={handlerSubmit}>
        <InputStyled
          type="text"
          placeholder="Я шукаю..."
        />
        <ButtonStyled type="submit">Знайти</ButtonStyled>
      </FormStyled>
      <CartContainer>
        <TiShoppingCart style={{ color: 'white', height: 24, width: 24 }} />
        <p>Корзина</p>
      </CartContainer>
    </Container>
  );
};

export default Search;
