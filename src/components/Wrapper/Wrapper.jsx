import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import { Container } from './WrapperStyled';

export default function Wrapper() {
  return (
    <>
      {/* <Header /> */}
      <Container>
        <Outlet></Outlet>
      </Container>
      {/* <Footer /> */}
    </>
  );
}
