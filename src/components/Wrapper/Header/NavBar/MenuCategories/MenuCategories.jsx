import React, { useEffect } from 'react';
import {
  Backdrop,
  ItemCategories,
  ListCategories,
  ListCategoriesContainer,
  NavLinkStyled,
} from './MenuCategoriesStyled';

const MenuCategories = ({ handleClick, data }) => {
  useEffect(() => {
    window.addEventListener('wheel', noScroll, { passive: false });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('wheel', noScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const noScroll = (e) => {
    e.preventDefault();
  };
  const onKeyDown = (e) => {
    if (e.code === 'Escape') {
      handleClick();
    }
  };
  return (
    <>
      <ListCategoriesContainer>
        <ListCategories>
          {data.map((item) => (
            <ItemCategories key={item.id}>
              <NavLinkStyled>{item.category}</NavLinkStyled>
            </ItemCategories>
          ))}
        </ListCategories>
      </ListCategoriesContainer>
      <Backdrop onClick={handleClick}></Backdrop>
    </>
  );
};

export default MenuCategories;
